// import { Skeleton } from "@/components/ui";

// export const PromotionCardSkeleton = () => {
//   return (
//     <div className="bg-background1 rounded-2xl overflow-hidden shadow-lg border border-white/5">
//       {/* Image Section Skeleton */}
//       <div className="relative overflow-hidden">
//         <Skeleton className="w-full h-48 laptop:h-60 rounded-t-2xl" />
//       </div>

//       {/* Content Section Skeleton */}
//       <div className="p-3 tab:p-5 flex flex-col gap-2 tab:gap-4">
//         <div>
//           <Skeleton className="h-8 w-3/4 rounded-lg" />
//           <div className="space-y-2 mt-2">
//             <Skeleton className="h-4 w-full rounded" />
//             <Skeleton className="h-4 w-2/3 rounded" />
//           </div>
//         </div>

//         {/* Promo Code Section Skeleton */}
//         <div className="flex items-center justify-between bg-black/30 p-3 rounded-xl border border-white/5">
//           <div className="flex flex-col gap-1 w-1/2">
//             <Skeleton className="h-3 w-1/2 rounded" />
//             <Skeleton className="h-6 w-full rounded" />
//           </div>
//           <Skeleton className="h-10 w-10 rounded-lg" />
//         </div>

//         {/* Buttons Section Skeleton */}
//         <div className="grid grid-cols-2 gap-5 mt-2">
//           <Skeleton className="h-10 rounded-xl" />
//           <Skeleton className="h-10 rounded-xl" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export const PromotionsSkeleton = () => {
//   return (
//     <section className="py-5 flex flex-col gap-8">
//       {/* Header Skeleton */}
//       <div className="text-center space-y-3">
//         <div className="flex justify-center">
//           <Skeleton className="h-12 w-3/4 laptop:w-1/2 rounded-xl" />
//         </div>
//         <div className="flex flex-col items-center gap-2">
//           <Skeleton className="h-4 w-full laptop:w-[60%] rounded" />
//           <Skeleton className="h-4 w-2/3 laptop:w-[40%] rounded" />
//         </div>
//       </div>

//       {/* Promo code query Placeholder */}
//       <div className="flex justify-center">
//         <Skeleton className="h-7 w-64 rounded-full" />
//       </div>

//       {/* PromoBanners Skeleton Placeholder */}
//       <div className="w-full">
//         <div className="flex gap-4 overflow-hidden">
//           {[...Array(3)].map((_, i) => (
//             <Skeleton
//               key={i}
//               className="min-w-[calc(90%-12px)] tab:min-w-[calc(52%-16px)] laptop:min-w-[calc(33.33%-20px)] h-[450px] rounded-2xl"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Grid Skeleton */}
//       <div className="grid grid-cols-1 tab:grid-cols-2 gap-6">
//         {[...Array(6)].map((_, index) => (
//           <PromotionCardSkeleton key={index} />
//         ))}
//       </div>
//     </section>
//   );
// };
