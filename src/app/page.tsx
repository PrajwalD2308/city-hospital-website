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
export default function Home() {
  return (
    <>
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
