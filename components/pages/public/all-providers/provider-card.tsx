// import { H5, Image, Skeleton } from "@/components/ui";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Provider } from "./data";

// interface ProviderCardProps {
//   provider: Provider;
//   index: number;
// }

// export const ProviderCard: React.FC<ProviderCardProps> = ({
//   provider,
//   index,
// }) => {
//   return (
//     <motion.div
//       key={provider.id}
//       className="bg-background1 p-3 rounded-2xl text-center overflow-hidden group cursor-pointer"
//       initial={{ opacity: 0, y: 20, scale: 0.95 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 0.2, delay: index * 0.03 }}
//       viewport={{ once: true, margin: "-100px" }}
//     >
//       <Link
//         href={`/providers/${provider.slug}`}
//         className="block h-full w-full"
//         scroll={false}
//       >
//         <motion.div
//           className="h-full flex flex-col justify-between group-hover:no-underline"
//           whileHover={{
//             scale: 1.05,
//             boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
//             y: -2,
//           }}
//           whileTap={{ scale: 0.98 }}
//           transition={{
//             type: "spring",
//             stiffness: 400,
//             damping: 25,
//           }}
//         >
//           {/* Logo with glow animation */}
//           <motion.div
//             className="relative mx-auto mb-3 shrink-0"
//             whileHover={{ scale: 1.1 }}
//             transition={{ type: "spring", stiffness: 300, damping: 10 }}
//           >
//             <Image
//               src={provider.logo}
//               alt={provider.name}
//               width={100}
//               height={100}
//               className="object-contain w-auto h-14 desktop:h-16 tab:px-3 desktop:px-5 group-hover:brightness-110 transition-all duration-300"
//             />
//             {/* Glow effect */}
//             <motion.div
//               className="absolute -inset-2 rounded-full bg-linear-to-r from-primary/40 via-blue-500/20 to-secondary/40 blur-xl opacity-0 group-hover:opacity-100"
//               initial={{ scale: 0 }}
//               animate={
//                 provider.slug === "pragmatic" || provider.slug === "netname"
//                   ? { scale: 1 }
//                   : { scale: 0.8 }
//               }
//               transition={{ duration: 0.4 }}
//             />
//           </motion.div>

//           {/* Provider name */}
//           <motion.div
//             className="mt-1 bg-background5/90 backdrop-blur-sm w-full rounded-md px-2 py-1.5 font-semibold text-white-color/90 text-center capitalize text-xs line-clamp-1 h-[25px]"
//             whileHover={{
//               backgroundColor: "rgba(59, 130, 246, 0.25)",
//               color: "#ffffff",
//               scale: 1.03,
//               boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)",
//             }}
//             whileTap={{ scale: 0.96 }}
//             transition={{ duration: 0.2, ease: "easeOut" }}
//           >
//             <H5>{provider.name}</H5>
//           </motion.div>
//         </motion.div>
//       </Link>
//     </motion.div>
//   );
// };

// export const ProviderCardSkeleton: React.FC<{ index: number }> = ({
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
