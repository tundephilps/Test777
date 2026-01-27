"use client";

import { searchProviders } from "@/actions/search/providers";
import { ProviderCard } from "@/components/pages/public/all-providers/provider-card";
import { useModal } from "@/contexts/modal-context";
import { Provider } from "@/types/api-schema/schema";
import { useEffect, useState, useTransition } from "react";
import { toast } from "react-hot-toast";

interface SearchProviderProps {
  query: string;
}

export const SearchProvider = ({ query }: SearchProviderProps) => {
  const { closeModal } = useModal();
  const [isPending, startTransition] = useTransition();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      setLoading(true);
      startTransition(async () => {
        const result = await searchProviders({ query });

        if (result?.error) {
          toast.error(result.error);
        } else if (result?.data?.data) {
          setProviders(result.data.data);
        } else {
          setProviders([]);
        }
        setLoading(false);
      });
    };

    const debounceTimer = setTimeout(fetchProviders, query ? 500 : 0);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
        </div>
      ) : providers.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {providers.map((provider, index) => (
            <div
              key={provider.id}
              onClick={closeModal}
              className="cursor-pointer"
            >
              <ProviderCard provider={provider} index={index} />
            </div>
          ))}
        </div>
      ) : query.length >= 1 ? (
        <div className="text-center py-10 text-gray-400">
          No providers found for &quot;{query}&quot;
        </div>
      ) : (
        <div className="text-center py-10 text-gray-400">
          No providers available
        </div>
      )}
    </div>
  );
};
