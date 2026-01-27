"use client";
import { Provider } from "@/actions/public/providers/types";

import { CustomSwiper } from "@/components/ui/custom-swiper";
import Link from "next/link";
import { ProviderCard } from "./provider-card";

interface AllProviderHomeProps {
  providers: Provider[];
}

export const AllProviderHome = ({ providers }: AllProviderHomeProps) => {
  const slides = providers.map((provider, index) => (
    <ProviderCard key={provider.id} provider={provider} index={index} />
  ));

  return (
    <section>
      <div>
        {/* Header */}
        <div>
          <div className="flex items-center justify-between py-4 text-white w-full">
            <h4>All Providers</h4>

            <Link href={"/providers"}>View All</Link>
          </div>
        </div>

        {/* Swiper */}
        <div>
          <CustomSwiper
            items={slides}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            showPagination={false}
            showNavigation={false}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 12 },
              500: { slidesPerView: 3, spaceBetween: 15 },
              768: { slidesPerView: 4, spaceBetween: 15 },
              1024: { slidesPerView: 8, spaceBetween: 12 },
            }}
          />
        </div>
      </div>
    </section>
  );
};
