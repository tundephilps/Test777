// "use client";
// import { Skeleton } from "@/components/ui";
// import { motion } from "framer-motion";

// export const AllProviderHomeSkeleton = () => {
//   const slideSkeletons = [...Array(8)].map((_, index) => (
//     <motion.div
//       key={index}
//       className="bg-background1 p-3 rounded-2xl text-center overflow-hidden"
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.3, delay: index * 0.04 }}
//       viewport={{ once: true }}
//     >
//       <div className="flex flex-col items-center space-y-2 h-full">
//         {/* Logo skeleton */}
//         <Skeleton className="w-16 h-14 desktop:h-16 rounded-lg mx-auto" />

//         {/* Name skeleton */}
//         <Skeleton className="w-full h-[25px] rounded-md px-2" />
//       </div>
//     </motion.div>
//   ));

//   return (
//     <section className="py-8 px-4">
//       <motion.div
//         className="max-w-7xl mx-auto"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* HeaderTitle skeleton */}
//         <motion.div
//           className="flex items-center justify-between mb-6"
//           initial={{ x: -30, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//         >
//           <Skeleton className="h-8 w-48 rounded-lg" />
//           <Skeleton className="h-10 w-28 rounded-md" />
//         </motion.div>

//         {/* Swiper container skeleton */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//         >
//           <div className="swiper-mock-container">
//             {/* Mobile: 2 slides */}
//             <div className="grid-cols-2 gap-3 mb-2 grid tab:hidden">
//               {slideSkeletons.slice(0, 2)}
//             </div>

//             {/* Tablet: 3-4 slides */}
//             <div className="grid-cols-3 md:grid-cols-4 gap-3 mb-2 hidden tab:grid laptop:hidden">
//               {slideSkeletons.slice(0, 4)}
//             </div>

//             {/* Desktop: 8 slides */}
//             <div className="grid-cols-8 gap-3 hidden lg:grid">
//               {slideSkeletons}
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };
