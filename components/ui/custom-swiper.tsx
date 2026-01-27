"use client";

import React, { useMemo } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CustomSwiperProps extends SwiperProps {
  items: React.ReactNode[];
  showPagination?: boolean;
  showNavigation?: boolean;
  className?: string;
}

export function CustomSwiper({
  items,
  slidesPerView = 1,
  spaceBetween = 16,
  loop = false,
  autoplay = false,
  showPagination = false,
  showNavigation = false,
  breakpoints,
  className = "",
  modules = [],
  ...props
}: CustomSwiperProps) {
  const autoplayOptions = useMemo(() => {
    if (typeof autoplay === "boolean") {
      return autoplay ? { delay: 3000, disableOnInteraction: false } : false;
    }
    return autoplay;
  }, [autoplay]);

  const combinedModules = useMemo(() => {
    const mods = [...modules];
    if (showNavigation && !mods.includes(Navigation)) mods.push(Navigation);
    if (showPagination && !mods.includes(Pagination)) mods.push(Pagination);
    if (autoplayOptions && !mods.includes(Autoplay)) mods.push(Autoplay);
    return mods;
  }, [modules, showNavigation, showPagination, autoplayOptions]);

  return (
    <div className={`relative group/swiper ${className}`}>
      <Swiper
        modules={combinedModules}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop}
        autoplay={autoplayOptions}
        pagination={showPagination ? { clickable: true } : false}
        navigation={showNavigation}
        breakpoints={breakpoints}
        className="w-full h-full"
        {...props}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx} className="h-auto">
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// how to use
