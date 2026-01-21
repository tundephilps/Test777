// "use client";
// import { HeaderTitle } from "@/components/common/header-title";
// import { CustomSwiper } from "@/components/ui";
// import { motion } from "framer-motion";
// import { allProvidersData } from "./data";

// import { ProviderCard } from "./provider-card";

// export const AllProviderHome = () => {
//   const slides = allProvidersData.map((provider, index) => (
//     <ProviderCard key={provider.id} provider={provider} index={index} />
//   ));

//   return (
//     <section>
//       <motion.div
//         className="max-w-7xl mx-auto"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         {/* Header with slide-in */}
//         <motion.div
//           initial={{ x: -50, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <HeaderTitle title="All Providers" url="/all-providers" />
//         </motion.div>

//         {/* Swiper with container animation */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           <CustomSwiper
//             items={slides}
//             skeleton={
//               <div className="grid-cols-2 tab:grid-cols-4 laptop:grid-cols-8 gap-3 grid">
//                 {[...Array(8)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="bg-background1 p-3 rounded-2xl text-center overflow-hidden h-24 animate-pulse"
//                   />
//                 ))}
//               </div>
//             }
//             autoplay={{ delay: 2500, disableOnInteraction: false }}
//             showPagination={false}
//             showNavigation={false}
//             breakpoints={{
//               320: { slidesPerView: 2, spaceBetween: 12 },
//               500: { slidesPerView: 3, spaceBetween: 15 },
//               768: { slidesPerView: 4, spaceBetween: 15 },
//               1024: { slidesPerView: 8, spaceBetween: 12 },
//             }}
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };
