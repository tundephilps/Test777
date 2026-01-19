import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";

import localFont from "next/font/local";

import Header from "../../components/layout/header";
import Sidebar from "../../components/layout/sidebar";
import Footer from "../../components/layout/footer";

import { SidebarProvider } from "../../components/layout/SidebarContext";
import LayoutContent from "../../components/layout/LayoutContent";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bounded = localFont({
  src: [
    {
      path: "../../public/fonts/Bounded-regular.ttf", // Changed path
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Bounded-extralight.ttf", // Changed path
      weight: "200", // ExtraLight is typically 200, not 700
      style: "normal",
    },
  ],
  variable: "--font-bounded",
  display: "swap",
});

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div
        className={`${geistSans.variable} ${geistMono.variable} ${bounded.variable} bg-[#061621]`}
      >
        <SidebarProvider>
          <Header />
          <LayoutContent>{children}</LayoutContent>
          <Footer />
        </SidebarProvider>
      </div>
    </div>
  );
}
