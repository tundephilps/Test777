const vipImg = process.env.NEXT_PUBLIC_IMG_CDN + "common-img/vip/";

export interface VIPLevelData {
  id: number;
  image: string;
  title: string;
  compPoint: string;
  dailyPoint: string;
  weeklyPoint: string;
  wager: string;
  priceLevel: string;
  eventIcon: boolean;
  managerIcon: boolean;
}

export const vipCashbackData: VIPLevelData[] = [
  {
    id: 1,
    image: vipImg + "1.webp",
    title: "Level 1",
    compPoint: "0-29,999",
    dailyPoint: "10%",
    weeklyPoint: "3%",
    wager: "X35",
    priceLevel: "9",
    eventIcon: false,
    managerIcon: false,
  },

  {
    id: 2,
    image: vipImg + "2.webp",
    title: "Level 2",
    dailyPoint: "12%",
    compPoint: "30,000",
    weeklyPoint: "5%",
    wager: "X35",
    priceLevel: "11",
    eventIcon: false,
    managerIcon: false,
  },
  {
    id: 3,
    image: vipImg + "3.webp",
    title: "Level 3",
    dailyPoint: "14%",
    compPoint: "60,000",
    weeklyPoint: "6%",
    wager: "X35",
    priceLevel: "13",
    eventIcon: true,
    managerIcon: false,
  },
  {
    id: 4,
    image: vipImg + "4.webp",
    title: "Level 4",
    dailyPoint: "16%",
    compPoint: "120,000",
    weeklyPoint: "7%",
    wager: "X35",
    priceLevel: "15",
    eventIcon: true,
    managerIcon: true,
  },
  {
    id: 5,
    image: vipImg + "5.webp",
    title: "Level 5",
    dailyPoint: "18%",
    compPoint: "240,000",
    weeklyPoint: "8%",
    wager: "X35",
    priceLevel: "17",
    eventIcon: true,
    managerIcon: true,
  },
  {
    id: 6,
    image: vipImg + "6.webp",
    title: "Level 6",
    dailyPoint: "21%",
    compPoint: "300,000",
    weeklyPoint: "10%",
    wager: "X35",
    priceLevel: "20",
    eventIcon: true,
    managerIcon: true,
  },

  {
    id: 7,
    image: vipImg + "7.webp",
    title: "Level 7",
    dailyPoint: "24%",
    compPoint: "400,000",
    weeklyPoint: "24%",
    wager: "X30",
    priceLevel: "23",
    eventIcon: true,
    managerIcon: true,
  },

  {
    id: 8,
    image: vipImg + "8.webp",
    title: "Level 8",
    dailyPoint: "30%",
    compPoint: "500,000",
    weeklyPoint: "30%",
    wager: "X25",
    priceLevel: "25",
    eventIcon: true,
    managerIcon: true,
  },
];
