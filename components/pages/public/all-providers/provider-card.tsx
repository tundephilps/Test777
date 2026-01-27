import { Provider } from "@/actions/public/providers/types";
import Image from "next/image";
import Link from "next/link";

interface ProviderCardProps {
  provider: Provider;
  index: number;
}

export const ProviderCard: React.FC<ProviderCardProps> = ({
  provider,
  index,
}) => {
  return (
    <div
      key={provider.id}
      className="bg-[#0f2535] p-3 rounded-2xl text-center overflow-hidden group cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
    >
      <Link
        href={`/provider-games/${provider.name}`}
        className="block h-full w-full"
        scroll={false}
      >
        <div className="h-full flex flex-col justify-between group-hover:no-underline">
          {/* Logo */}
          <div className="relative mx-auto mb-3 shrink-0">
            <Image
              src={provider.logo || "/placeholder-logo.png"}
              alt={provider.name}
              width={100}
              height={100}
              className="object-contain w-auto h-14 desktop:h-16 tab:px-3 desktop:px-5 group-hover:brightness-110 transition-all duration-300"
            />
          </div>

          {/* Provider name */}
          <div className="mt-1 bg-background5/90 backdrop-blur-sm w-full rounded-md px-2 py-1.5 font-semibold text-gray-400 text-center capitalize text-xs line-clamp-1 h-[25px] group-hover:bg-red-600/25 group-hover:text-white transition-all">
            <h5>{provider.name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};
