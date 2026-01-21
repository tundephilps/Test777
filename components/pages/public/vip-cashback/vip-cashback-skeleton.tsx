// import { Skeleton } from "@/components/ui";

// const VIPCardSkeleton = () => (
//   <div className="bg-background1 p-4 tab:p-6 rounded-3xl flex flex-col laptop:flex-row items-center gap-6 tab:gap-10 border border-white/5">
//     {/* img placeholder */}
//     <div className="w-36 tab:w-48 shrink-0 flex justify-center items-center">
//       <Skeleton className="w-32 h-32 tab:w-40 tab:h-40 rounded-full" />
//     </div>

//     {/* content */}
//     <div className="w-full">
//       <div className="flex flex-col tab:flex-row items-center justify-between gap-2 mb-6">
//         <Skeleton className="h-10 w-48 rounded-lg" />
//         <Skeleton className="h-6 w-32 rounded-full" />
//       </div>

//       <div className="bg-background4/20 p-6 rounded-2xl grid grid-cols-2 tab:grid-cols-5 gap-4 border border-white/5">
//         {[...Array(5)].map((_, i) => (
//           <div key={i} className="flex flex-col items-center gap-2">
//             <Skeleton className="h-8 w-16 rounded" />
//             <Skeleton className="h-3 w-20 rounded" />
//           </div>
//         ))}
//       </div>

//       {/* bottom benefits */}
//       <div className="mt-6 flex flex-col tab:flex-row items-center justify-center gap-6 tab:gap-10">
//         <div className="flex items-center gap-2">
//           <Skeleton className="h-5 w-24 rounded" />
//           <Skeleton className="w-8 h-8 rounded-full" />
//         </div>
//         <div className="flex items-center gap-2">
//           <Skeleton className="h-5 w-32 rounded" />
//           <Skeleton className="w-8 h-8 rounded-full" />
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export const VIPCashbackSkeleton = () => {
//   return (
//     <section className="pt-8 pb-16 flex flex-col gap-10">
//       {/* header */}
//       <div className="text-center space-y-4">
//         <div className="flex justify-center">
//           <Skeleton className="h-8 w-40 rounded-full" />
//         </div>
//         <div className="flex justify-center">
//           <Skeleton className="h-12 w-3/4 laptop:w-1/2 rounded-xl" />
//         </div>
//         <div className="flex flex-col items-center gap-2 mt-2">
//           <Skeleton className="h-5 w-full laptop:w-[60%] rounded" />
//           <Skeleton className="h-5 w-[80%] laptop:w-[50%] rounded" />
//         </div>
//       </div>

//       {/* Daily Cashback Indicator Area */}
//       <div className="w-full tab:w-[500px] m-auto">
//         <div className="bg-primary/5 p-1 rounded-2xl border border-primary/10">
//           <div className="bg-background1 rounded-xl p-6 h-32 flex items-center justify-center">
//             <Skeleton className="h-full w-full rounded-lg" />
//           </div>
//         </div>
//       </div>

//       {/* Banner Skeleton Placeholder */}
//       <div className="w-full">
//         <div className="bg-background1 rounded-3xl h-64 laptop:h-80 w-full overflow-hidden">
//           <Skeleton className="w-full h-full rounded-none" />
//         </div>
//       </div>

//       {/* vip cashback list */}
//       <div className="flex flex-col gap-8 mt-4">
//         <div className="flex items-center gap-4 mb-2">
//           <div className="h-px bg-white/10 grow"></div>
//           <Skeleton className="h-6 w-40 rounded" />
//           <div className="h-px bg-white/10 grow"></div>
//         </div>

//         {[...Array(3)].map((_, i) => (
//           <VIPCardSkeleton key={i} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default VIPCashbackSkeleton;
