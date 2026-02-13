import type { Metadata } from "next";
import Script from "next/script";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FounderMessageSection from "@/components/home/FounderMessageSection";
import SpecializationSection from "@/components/home/SpecializationSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DepartmentPreview from "@/components/home/DepartmentPreview";
import DoctorsSection from "@/components/home/DoctorsSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactCTASection from "@/components/home/ContactCTASection";

/* ================= SEO METADATA ================= */

export const metadata: Metadata = {
  title:
    "Best Multispeciality Hospital in Amravati | ICU, Cardiac & Neuro Care",
  description:
    "City Multispeciality Hospital & Critical Care Centre in Amravati provides 24x7 Emergency, Advanced ICU, Cardiac Care, Neuro Care, Trauma Unit, Diagnostics and Multispeciality treatments with experienced doctors and modern infrastructure.",

  alternates: {
    canonical: "https://city-multispeciality-hospital-websi.vercel.app/",
  },
};

/* ================= PAGE ================= */

export default function Home() {
  return (
    <>
      {/* ================= STRUCTURED DATA (VERY IMPORTANT FOR SEO) ================= */}
      <Script
        id="hospital-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hospital",
            name: "City Multispeciality Hospital & Critical Care Centre",
            image:
              "https://city-multispeciality-hospital-websi.vercel.app/images/city-hospital-logoo.png",
            url: "https://city-multispeciality-hospital-websi.vercel.app/",
            telephone: "+917709912176",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Amravati",
              addressRegion: "Maharashtra",
              addressCountry: "IN",
            },
            medicalSpecialty: [
              "Cardiology",
              "Neurology",
              "Critical Care",
              "Emergency Medicine",
              "General Surgery",
              "ICU Care",
            ],
            openingHours: "Mo-Sa 00:00-23:59",
            priceRange: "₹₹",
          }),
        }}
      />

      {/* ================= PAGE CONTENT ================= */}
      <Hero />
      <About />
      <WhyChooseUs />
      <SpecializationSection />
      <FounderMessageSection />
      <DepartmentPreview />
      <DoctorsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <ContactCTASection />
    </>
  );
}
