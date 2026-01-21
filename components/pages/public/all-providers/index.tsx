// "use client";
// import { HeaderTitle } from "@/components/common/header-title";
// import { motion } from "framer-motion";
// import { allProvidersData } from "./data";

// import { ProviderCard } from "./provider-card";

// export const AllProviders = () => {
//   return (
//     <section>
//       <motion.div
//         className="max-w-7xl mx-auto"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//       >
//         {/* Header */}
//         <motion.div
//           initial={{ x: -50, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="bg-primary/10 p-5 pb-1 mb-10"
//         >
//           <HeaderTitle title="All Providers" className="justify-center" />
//         </motion.div>

//         {/* Provider Cards */}
//         <div className="grid grid-cols-2 tab:grid-cols-4 laptop:grid-cols-8 gap-3 tab:gap-5">
//           {allProvidersData.map((provider, index) => (
//             <ProviderCard key={provider.id} provider={provider} index={index} />
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };
