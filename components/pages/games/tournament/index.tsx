// "use client";
// import { CustomSwiper, H3, H4, H6, Image } from "@/components/ui";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { tournamentData } from "./data";
// import {
//   calculateTimeLeft,
//   formatCurrency,
//   formatDate,
//   TimeLeft,
// } from "./utils";

// interface Game {
//   id: number;
//   slug: string;
//   game_name: string;
//   thumbnail: string;
// }

// interface TournamentItem {
//   id: number;
//   title: string;
//   image: string;
//   prize_pool: string | number;
//   status: string;
//   start_date: string;
//   end_date: string;
//   players?: number;
//   games: Game[];
// }

// const TournamentCard = ({ item }: { item: TournamentItem }) => {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>(
//     calculateTimeLeft(item.end_date)
//   );

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft(item.end_date));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [item.end_date]);

//   const slides = item.games.map((game: Game) => (
//     <Link href={`/play-games/${game.slug}`} key={game.id} className="block">
//       <Image
//         src={game.thumbnail}
//         alt={game.game_name}
//         width={200}
//         height={200}
//         className="w-full h-60 laptop:h-40 object-cover rounded-2xl"
//       />
//       <H6 className="mt-2 text-center">{game.game_name}</H6>
//     </Link>
//   ));

//   return (
//     <div className="bg-background1 p-2 tab:p-3 rounded-2xl grid grid-cols-1 laptop:grid-cols-3 gap-5 text-white">
//       {/* left */}
//       <div className="laptop:col-span-1">
//         <Image
//           src={item.image}
//           alt={item.title}
//           width={200}
//           height={200}
//           className="w-full rounded-2xl h-[290px] object-fill"
//         />

//         {/* time */}
//         <ul className="grid grid-cols-4 gap-2 mt-3 text-2xl font-bold">
//           <li className="bg-primary/20 rounded-2xl p-3 flex flex-col justify-center items-center">
//             {timeLeft.days}
//             <span className="text-base font-normal">Days</span>
//           </li>
//           <li className="bg-primary/20 rounded-2xl p-3 flex flex-col justify-center items-center">
//             {timeLeft.hours}
//             <span className="text-base font-normal">Hours</span>
//           </li>
//           <li className="bg-primary/20 rounded-2xl p-3 flex flex-col justify-center items-center">
//             {timeLeft.minutes}
//             <span className="text-base font-normal">Min</span>
//           </li>
//           <li className="bg-primary/20 rounded-2xl p-3 flex flex-col justify-center items-center">
//             {timeLeft.seconds}
//             <span className="text-base font-normal">Sec</span>
//           </li>
//         </ul>
//       </div>

//       {/* right */}
//       <div className="col-span-1 laptop:col-span-2 flex flex-col gap-3">
//         {/* title */}
//         <div className="flex items-center gap-2">
//           <H3>{item.title}</H3>
//           {item.status === "active" && !timeLeft.isExpired && (
//             <div className="bg-primary py-1 px-2 rounded-lg inline-flex items-center gap-1 text-xs whitespace-nowrap">
//               <span className="w-2 h-2 rounded-full bg-white"></span>
//               Live
//             </div>
//           )}
//         </div>

//         {/* items */}
//         <div className="grid grid-cols-2 tab:grid-cols-4 gap-3">
//           <div className="bg-primary/10 p-3 rounded-2xl">
//             <H6>Prize pool</H6>
//             <H4 className="text-primary text-2xl font-bold">
//               $ {formatCurrency(item.prize_pool)}
//             </H4>
//           </div>

//           <div className="bg-primary/10 p-3 rounded-2xl">
//             <H6>Start Date</H6>
//             <H4 className="text-primary text-xl font-bold">
//               {formatDate(item.start_date)}
//             </H4>
//           </div>

//           <div className="bg-primary/10 p-3 rounded-2xl">
//             <H6>End Date</H6>
//             <H4 className="text-primary text-xl font-bold">
//               {formatDate(item.end_date)}
//             </H4>
//           </div>

//           <div className="bg-primary/10 p-3 rounded-2xl">
//             <H6>Player</H6>
//             <H4 className="text-primary text-2xl font-bold">
//               {item.players || 5000}
//             </H4>
//           </div>
//         </div>

//         {/* games */}
//         <div className="">
//           <H4>Participating Games</H4>

//           <div className="mt-2">
//             {slides.length > 0 ? (
//               <CustomSwiper
//                 items={slides}
//                 skeleton={
//                   <div className="h-60 laptop:h-44 bg-primary/10 rounded-2xl animate-pulse" />
//                 }
//                 autoplay={{ delay: 2500, disableOnInteraction: false }}
//                 showPagination={false}
//                 showNavigation={false}
//                 breakpoints={{
//                   320: { slidesPerView: 1.3, spaceBetween: 12 },
//                   520: { slidesPerView: 2.2, spaceBetween: 12 },
//                   768: { slidesPerView: 3.1, spaceBetween: 12 },
//                   1024: { slidesPerView: 4.5, spaceBetween: 12 },
//                 }}
//               />
//             ) : (
//               <div className="h-44 bg-primary/10 rounded-2xl animate-pulse" />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const Tournament = () => {
//   return (
//     <section className="flex flex-col gap-5 tab:gap-8">
//       {tournamentData?.data?.map((item) => (
//         <TournamentCard key={item.id} item={item} />
//       ))}
//     </section>
//   );
// };
