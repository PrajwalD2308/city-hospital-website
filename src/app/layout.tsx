import "./globals.css";
import type { Metadata } from "next";
import TopInfoBar from "@/components/layout/TopInfoBar";
import MobileInfoBar from "@/components/layout/MobileInfoBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://city-multispeciality-hospital-websi.vercel.app",
  ),

  title: {
    default:
      "City Multispeciality Hospital | Best ICU & Emergency Care in Amravati",
    template: "%s | City Multispeciality Hospital Amravati",
  },

  description:
    "City Multispeciality Hospital & Critical Care Centre in Amravati offers advanced ICU, Cardiac Care, Neuro Care, Emergency Services, Trauma Unit, Diagnostics and Multispeciality treatment with expert doctors and 24x7 emergency support.",

  keywords: [
    "City Multispeciality Hospital Amravati",
    "Best Hospital in Amravati",
    "ICU in Amravati",
    "Emergency Hospital Amravati",
    "Cardiac Care Amravati",
    "Neuro Specialist Amravati",
    "Trauma Care Hospital",
    "Critical Care Centre Amravati",
    "Multispeciality Hospital Maharashtra",
  ],

  authors: [{ name: "City Multispeciality Hospital" }],

  creator: "City Multispeciality Hospital",
  publisher: "City Multispeciality Hospital",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "City Multispeciality Hospital | Advanced ICU & Emergency Care in Amravati",
    description:
      "Advanced multispeciality healthcare with ICU, Cardiac & Neuro Care, 24x7 Emergency and Trauma services in Amravati.",
    url: "https://city-multispeciality-hospital-websi.vercel.app",
    siteName: "City Multispeciality Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/city-hospital-logoo.png",
        width: 1200,
        height: 630,
        alt: "City Multispeciality Hospital Amravati",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "City Multispeciality Hospital | ICU & Emergency Care in Amravati",
    description:
      "Trusted multispeciality hospital in Amravati with ICU, Cardiac, Neuro & Trauma Care.",
    images: ["/images/city-hospital-logoo.png"],
  },

  themeColor: "#7A0C0C",
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
