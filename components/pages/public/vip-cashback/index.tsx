// "use client";
// import { VIPLevel } from "@/components/common/vip-level";
// import { PromoBanners } from "@/components/design-library/promo-banners";
// import PromoBannerSkeletonV1 from "@/components/design-library/promo-banners/promo-banner-skeleton";
// import { H2, H3, H4, H5, H6, Image } from "@/components/ui";
// import { CheckIcon, CloseIcon } from "@/icons";
// import { Suspense } from "react";
// import { vipCashbackData, VIPLevelData } from "./data";

// const BenefitIndicator = ({
//   label,
//   isActive,
//   showBorder = true,
// }: {
//   label: string;
//   isActive: boolean;
//   showBorder?: boolean;
// }) => (
//   <H5
//     className={`flex items-center gap-2 ${
//       showBorder
//         ? "border-b tab:border-b-0 tab:border-r border-primary/30 pb-5 tab:pb-0 tab:pr-5 w-full tab:w-auto"
//         : ""
//     } justify-center tab:justify-start`}
//   >
//     <span className="uppercase opacity-80">{label}</span>
//     {isActive ? (
//       <div className="w-8 h-8 rounded-full flex items-center justify-center bg-success/80 text-white shadow-lg shadow-success/20">
//         <CheckIcon width={18} height={18} />
//       </div>
//     ) : (
//       <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-color/80 text-white shadow-lg shadow-red-color/20">
//         <CloseIcon width={18} height={18} />
//       </div>
//     )}
//   </H5>
// );

// const VIPCard = ({ item }: { item: VIPLevelData }) => (
//   <div className="bg-background1 p-4 tab:p-6 rounded-3xl flex flex-col laptop:flex-row items-center gap-6 tab:gap-10 border border-white/5 hover:border-primary/20 transition-all duration-300">
//     {/* img */}
//     <div className="w-36 tab:w-48 shrink-0 relative group">
//       <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//       <Image
//         src={item.image}
//         alt={item.title}
//         width={200}
//         height={200}
//         className="w-full h-full object-contain relative z-10 scale-95 group-hover:scale-105 transition-transform duration-500"
//         quality={100}
//       />
//     </div>

//     {/* content */}
//     <div className="w-full">
//       <div className="flex flex-col tab:flex-row items-center justify-between gap-2 mb-4">
//         <H2 className="text-3xl laptop:text-4xl text-primary font-black uppercase tracking-tight">
//           {item.title}
//         </H2>
//         <div className="bg-primary/20 text-primary-light px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-primary/30">
//           Exclusive Rewards
//         </div>
//       </div>

//       <div className="bg-background4/40 backdrop-blur-sm p-6 rounded-2xl grid grid-cols-2 tab:grid-cols-5 gap-4 text-center border border-white/5 shadow-inner">
//         {/* item */}
//         <div className="tab:border-r border-primary/20 pb-2 tab:pb-0">
//           <H3 className="text-2xl laptop:text-3xl font-bold">
//             {item.compPoint}
//           </H3>
//           <H6 className="mt-1 text-white-color/50 text-[10px] uppercase font-bold tracking-wider">
//             Comp Points
//           </H6>
//         </div>

//         {/* item */}
//         <div className="tab:border-r border-primary/20 pb-2 tab:pb-0">
//           <H3 className="text-2xl laptop:text-3xl font-bold text-success">
//             {item.dailyPoint}
//           </H3>
//           <H6 className="mt-1 text-white-color/50 text-[10px] uppercase font-bold tracking-wider">
//             Daily Cashback
//           </H6>
//         </div>

//         {/* item */}
//         <div className="tab:border-r border-primary/20 pb-2 tab:pb-0">
//           <H3 className="text-2xl laptop:text-3xl font-bold text-success-light">
//             {item.weeklyPoint}
//           </H3>
//           <H6 className="mt-1 text-white-color/50 text-[10px] uppercase font-bold tracking-wider">
//             Weekly Cashback
//           </H6>
//         </div>

//         {/* item */}
//         <div className="tab:border-r border-primary/20 pb-2 tab:pb-0">
//           <H3 className="text-2xl laptop:text-3xl font-bold">
//             {item.priceLevel}
//           </H3>
//           <H6 className="mt-1 text-white-color/50 text-[10px] uppercase font-bold tracking-wider">
//             Free Gifts / Day
//           </H6>
//         </div>

//         {/* item */}
//         <div className="col-span-2 tab:col-span-1 border-t tab:border-t-0 pt-2 tab:pt-0">
//           <H3 className="text-2xl laptop:text-3xl font-bold text-secondary">
//             {item.wager}
//           </H3>
//           <H6 className="mt-1 text-white-color/50 text-[10px] uppercase font-bold tracking-wider">
//             Wager
//           </H6>
//         </div>
//       </div>

//       {/* bottom benefits */}
//       <div className="mt-6 flex flex-col tab:flex-row items-center justify-center gap-6 tab:gap-10">
//         <BenefitIndicator label="Special Event" isActive={item.eventIcon} />
//         <BenefitIndicator
//           label="Personal Manager"
//           isActive={item.managerIcon}
//           showBorder={false}
//         />
//       </div>
//     </div>
//   </div>
// );

// export const VIPCashback = () => {
//   return (
//     <section className="pt-8 pb-16 flex flex-col gap-10">
//       {/* header */}
//       <div className="text-center text-white-color space-y-4">
//         <div className="inline-block bg-primary/10 text-primary-light px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-2 border border-primary/20">
//           VIP Experience
//         </div>
//         <H2 className="text-3xl laptop:text-4xl font-black uppercase leading-tight">
//           The best VIP program <br className="hidden laptop:block" /> in the
//           world
//         </H2>
//         <H4 className="w-full laptop:w-[60%] m-auto text-white-color/70 text-base laptop:text-xl font-medium leading-relaxed">
//           Get up to 30% Cashback Daily, Exchange VIP Points for Free Spins or
//           Bonus Cash, and Earn Tickets to WIN a 2026 Audi A3 – Only Here!
//         </H4>
//       </div>

//       <div className="w-full tab:w-[500px] m-auto">
//         <div className="bg-primary/5 p-1 rounded-2xl border border-primary/20">
//           <div className="bg-background1 rounded-xl p-6 shadow-2xl">
//             <VIPLevel />
//           </div>
//         </div>
//       </div>

//       <Suspense fallback={<PromoBannerSkeletonV1 />}>
//         <div className="rounded-3xl overflow-hidden shadow-2xl">
//           <PromoBanners />
//         </div>
//       </Suspense>

//       {/* vip cashback list */}
//       <div className="flex flex-col gap-8 text-white-color mt-4">
//         <div className="flex items-center gap-4 mb-2">
//           <div className="h-px bg-white/10 grow"></div>
//           <H5 className="uppercase tracking-[0.3em] text-white-color/40 font-bold">
//             Loyalty Tiers
//           </H5>
//           <div className="h-px bg-white/10 grow"></div>
//         </div>

//         {vipCashbackData.map((item) => (
//           <VIPCard key={item.id} item={item} />
//         ))}
//       </div>
//     </section>
//   );
// };
