import "./globals.css";
import type { Metadata } from "next";
import TopInfoBar from "@/components/layout/TopInfoBar";
import MobileInfoBar from "@/components/layout/MobileInfoBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "City Multi-Speciality Hospital | Amravati",
  description:
    "Advanced multi-speciality healthcare with modern facilities in Amravati",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-800">
        <LanguageProvider>
          <TopInfoBar />
          <Header />
          <MobileInfoBar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
