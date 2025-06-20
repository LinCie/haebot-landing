import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TopHeader from "@/components/layout/top-header";
import Chatbot from "@/components/chatbot";

export const metadata: Metadata = {
  title: "HaeBot | Komponen & Konsultasi CNC | PT HaeBot Teknologi Indonesia",
  description:
    "Tingkatkan operasional CNC Anda dengan HaeBot, sumber terpercaya Anda untuk komponen CNC berkualitas tinggi dan layanan konsultasi ahli. Temukan berbagai macam suku cadang CNC dari merek-merek terkemuka, yang disesuaikan dengan kebutuhan industri Anda. Manfaatkan konsultasi teknis mendalam kami untuk mengoptimalkan kinerja dan efisiensi mesin Anda. HaeBot - mitra Anda dalam mencapai produktivitas maksimal dengan solusi CNC yang andal.",
  keywords: [
    "CNC",
    "Komponen CNC",
    "Suku Cadang CNC",
    "Konsultasi CNC",
    "Layanan CNC",
    "Otomatisasi Industri",
    "Mesin",
    "HaeBot",
    "PT HaeBot Teknologi Indonesia",
    "Indonesia",
    "Manufaktur",
    "Teknologi",
    "Pabrikasi",
    "Produksi",
    "Kualitas Tinggi",
    "Suku Cadang Mesin",
    "Mesin CNC",
    "Mesin Bubut",
    "Mesin Las",
    "Mesin Giling",
    "Mesin Milling",
    "Mesin EDM",
  ],
  openGraph: {
    title: "HaeBot | Komponen & Konsultasi CNC | PT HaeBot Teknologi Indonesia",
    description:
      "Tingkatkan operasional CNC Anda dengan HaeBot, sumber terpercaya Anda untuk komponen CNC berkualitas tinggi dan layanan konsultasi ahli. Temukan berbagai macam suku cadang CNC dari merek-merek terkemuka, yang disesuaikan dengan kebutuhan industri Anda. Manfaatkan konsultasi teknis mendalam kami untuk mengoptimalkan kinerja dan efisiensi mesin Anda. HaeBot - mitra Anda dalam mencapai produktivitas maksimal dengan solusi CNC yang andal.",
    url: "https://haebot.com",
    siteName: "HaeBot",
    images: [
      {
        url: "/images/cnc-machine.jpg",
        alt: "Komponen dan layanan konsultasi CNC HaeBot",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HaeBot | Komponen & Konsultasi CNC | PT HaeBot Teknologi Indonesia",
    description:
      "Tingkatkan operasional CNC Anda dengan HaeBot, sumber terpercaya Anda untuk komponen CNC berkualitas tinggi dan layanan konsultasi ahli. Temukan berbagai macam suku cadang CNC dari merek-merek terkemuka, yang disesuaikan dengan kebutuhan industri Anda. Manfaatkan konsultasi teknis mendalam kami untuk mengoptimalkan kinerja dan efisiensi mesin Anda. HaeBot - mitra Anda dalam mencapai produktivitas maksimal dengan solusi CNC yang andal.",
    images: ["/images/cnc-machine.jpg"],
  },
};

const openSans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(openSans.className)}>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <div className="flex w-full flex-col">
            <TopHeader />
            <Header />
            <div className="w-full">
              <main className="bg-background w-full">{children}</main>
            </div>
            <Chatbot />
            <Footer />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
