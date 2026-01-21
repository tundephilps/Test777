// "use client";

// import { PromoBanners } from "@/components/design-library/promo-banners";
// import PromoBannerSkeletonV1 from "@/components/design-library/promo-banners/promo-banner-skeleton";
// import { Button, H2, H3, H6, Image, Modal, P } from "@/components/ui";
// import { CheckIcon, CopyIcon } from "@/icons";
// import Link from "next/link";
// import { Suspense, useState } from "react";
// import { promotionsData } from "./data";

// interface Promotion {
//   name: string;
//   title: string | null;
//   type: string;
//   promo_code: string;
//   image: string;
//   description: string;
//   start_at: string;
//   end_at: string;
// }

// const PromotionCard = ({
//   item,
//   onReadMore,
// }: {
//   item: Promotion;
//   onReadMore: (item: Promotion) => void;
// }) => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(item.promo_code);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="bg-background1 rounded-2xl overflow-hidden shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-white/5 group">
//       {/* Image Section */}
//       <div className="relative overflow-hidden">
//         <Image
//           src={item.image}
//           alt={item.name}
//           width={600}
//           height={400}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//         />
//         {item.title && (
//           <div className="absolute top-4 left-4 bg-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg">
//             {item.title}
//           </div>
//         )}
//       </div>

//       {/* Content Section */}
//       <div className="p-3 tab:p-5 flex flex-col gap-2 tab:gap-4">
//         <div>
//           <H3 className="text-xl laptop:text-2xl font-bold text-white line-clamp-1 group-hover:text-primary transition-colors">
//             {item.name}
//           </H3>
//           <P className="text-white/60 text-sm mt-2 line-clamp-2 min-h-[40px]">
//             {item.description}
//           </P>
//         </div>

//         {/* Promo Code Section */}
//         <div className="flex items-center justify-between bg-black/30 p-3 rounded-xl border border-white/5">
//           <div className="flex flex-col">
//             <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">
//               Promo Code
//             </span>
//             <span className="text-primary font-black tracking-widest uppercase">
//               {item.promo_code}
//             </span>
//           </div>
//           <button
//             onClick={handleCopy}
//             className={`p-2 rounded-lg transition-all duration-200 ${
//               copied
//                 ? "bg-green-500/20 text-green-500"
//                 : "bg-white/5 text-white/60 hover:bg-primary hover:text-white"
//             }`}
//             title="Copy Code"
//           >
//             {copied ? <CheckIcon /> : <CopyIcon width={20} height={20} />}
//           </button>
//         </div>

//         {/* Buttons Section */}
//         <div className="grid grid-cols-2 gap-5 mt-2">
//           <Button
//             onClick={() => onReadMore(item)}
//             className="bg-background4! text-white border border-white/10 capitalize rounded-xl! py-2.5"
//           >
//             Read More
//           </Button>
//           <Button className="font-bold capitalize rounded-xl! py-2.5">
//             Claim Now
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const Promotions = () => {
//   const [selectedPromo, setSelectedPromo] = useState<Promotion | null>(null);

//   return (
//     <section className="py-5 flex flex-col gap-8">
//       {/* Header */}
//       <div className="text-center space-y-3">
//         <H2 className="text-4xl laptop:text-5xl font-black uppercase tracking-tight text-white font-['Montserrat']">
//           Exclusive <span className="text-primary">Promotions</span>
//         </H2>
//         <P className="max-w-2xl mx-auto text-white/60">
//           Boost your game with our daily, weekly, and special event promotions.
//           Copy your code and start winning today!
//         </P>
//       </div>

//       {/* do you have a promo code? */}
//       <div className="flex items-center justify-center gap-3 py-2 px-6 bg-primary/5 rounded-full border border-primary/10 w-fit mx-auto">
//         <H6 className="text-white/80 font-medium">Do you have a promo code?</H6>
//         <Link
//           className="text-primary hover:text-primary-light transition-colors text-lg font-bold flex items-center gap-1 group/link"
//           href={"/dashboard/deposit"}
//         >
//           Yes
//           <span className="group-hover/link:translate-x-1 transition-transform">
//             →
//           </span>
//         </Link>
//       </div>

//       <Suspense fallback={<PromoBannerSkeletonV1 />}>
//         <PromoBanners />
//       </Suspense>

//       {/* Grid */}
//       <div className="grid grid-cols-1 tab:grid-cols-2 gap-6">
//         {promotionsData.map((promo, index) => (
//           <PromotionCard
//             key={index}
//             item={promo as Promotion}
//             onReadMore={setSelectedPromo}
//           />
//         ))}
//       </div>

//       {/* Details Modal */}
//       <Modal
//         open={!!selectedPromo}
//         onClose={() => setSelectedPromo(null)}
//         title={""}
//         boxClassName="w-[95%] tab:w-[500px] bg-background1 border border-white/10 text-white p-0 overflow-hidden"
//       >
//         <div className="space-y-0 mt-2">
//           <div className="relative w-full overflow-hidden">
//             <Image
//               src={selectedPromo?.image || ""}
//               alt={selectedPromo?.name || ""}
//               width={800}
//               height={500}
//               className="w-full h-full object-cover rounded-2xl"
//             />
//           </div>

//           <div className="space-y-2 mt-2">
//             <div className="space-y-4">
//               <H3 className="text-xl font-bold">{selectedPromo?.name}</H3>
//               <div className="prose prose-invert max-w-none">
//                 <p className="text-white/70 leading-relaxed">
//                   {selectedPromo?.description}
//                 </p>
//               </div>
//             </div>

//             <div className="bg-black/40 p-2 rounded-2xl border border-white/5 flex flex-col items-center gap-1">
//               <span className="text-[10px] text-white/40 uppercase font-black tracking-[0.3em]">
//                 Promo Code
//               </span>
//               <span className="text-primary text-2xl font-black tracking-[0.2em] uppercase">
//                 {selectedPromo?.promo_code}
//               </span>
//             </div>

//             <Button className="w-full py-3 font-black uppercase tracking-widest text-lg shadow-[0_10px_30px_rgba(var(--primary-rgb),0.3)]">
//               Deposit Now
//             </Button>
//           </div>
//         </div>
//       </Modal>
//     </section>
//   );
// };
