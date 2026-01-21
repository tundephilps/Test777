// "use client";

// import { Skeleton } from "@/components/ui";
// import { motion } from "framer-motion";

// interface ProviderCardSkeletonProps {
//   index: number;
// }

// export const ProviderCardSkeleton: React.FC<ProviderCardSkeletonProps> = ({
//   index,
// }) => {
//   return (
//     <motion.div
//       key={index}
//       className="bg-background1 p-3 rounded-2xl text-center overflow-hidden"
//       initial={{ opacity: 0, y: 25, scale: 0.95 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 0.3, delay: index * 0.03 }}
//       viewport={{ once: true, margin: "-100px" }}
//     >
//       <div className="flex flex-col items-center space-y-2 h-full justify-center">
//         {/* Logo skeleton */}
//         <Skeleton className="w-16 h-14 desktop:h-16 rounded-lg mx-auto" />

//         {/* Name skeleton */}
//         <Skeleton className="w-full h-[25px] rounded-md px-2" />
//       </div>
//     </motion.div>
//   );
// };
