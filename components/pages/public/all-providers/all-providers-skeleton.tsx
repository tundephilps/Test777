// "use client";
// import { Skeleton } from "@/components/ui";
// import { motion } from "framer-motion";

// import { ProviderCardSkeleton } from "./provider-card";

// interface AllProvidersSkeletonProps {
//   isHome?: boolean;
// }

// export const AllProvidersSkeleton: React.FC<AllProvidersSkeletonProps> = ({
//   isHome = false,
// }) => {
//   const count = isHome ? 8 : 16;
//   const providerSkeletons = [...Array(count)].map((_, index) => (
//     <ProviderCardSkeleton key={index} index={index} />
//   ));

//   return (
//     <section className={isHome ? "" : "py-8 px-4"}>
//       <motion.div
//         className="max-w-7xl mx-auto"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         {/* Header skeleton */}
//         {isHome ? (
//           <div className="flex items-center justify-between mb-6">
//             <Skeleton className="h-8 w-48 rounded-lg" />
//             <Skeleton className="h-10 w-28 rounded-md" />
//           </div>
//         ) : (
//           <div className="mb-8">
//             <Skeleton className="h-10 w-56 rounded-lg mx-auto" />
//           </div>
//         )}

//         {/* Grid skeleton */}
//         {isHome ? (
//           <div className="swiper-mock-container">
//             {/* Mobile: 2 slides */}
//             <div className="grid-cols-2 gap-3 mb-2 grid tab:hidden">
//               {providerSkeletons.slice(0, 2)}
//             </div>
//             {/* Tablet: 4 slides */}
//             <div className="grid-cols-4 gap-3 mb-2 hidden tab:grid laptop:hidden">
//               {providerSkeletons.slice(0, 4)}
//             </div>
//             {/* Desktop: 8 slides */}
//             <div className="grid-cols-8 gap-3 hidden lg:grid">
//               {providerSkeletons}
//             </div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 tab:grid-cols-4 laptop:grid-cols-8 gap-3 tab:gap-5">
//             {providerSkeletons}
//           </div>
//         )}
//       </motion.div>
//     </section>
//   );
// };
