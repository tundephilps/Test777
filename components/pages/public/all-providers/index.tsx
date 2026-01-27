"use client";
import { Provider } from "@/actions/public/providers/types";

import { ProviderCard } from "./provider-card";

interface AllProvidersProps {
  providers: Provider[];
}

export const AllProviders = ({ providers }: AllProvidersProps) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-white text-2xl mb-5">
          <h2>All Providers</h2>
        </div>

        {/* Provider Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-5">
          {providers.map((provider, index) => (
            <ProviderCard key={provider.id} provider={provider} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
