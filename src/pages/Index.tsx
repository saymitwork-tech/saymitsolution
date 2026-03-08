import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import ClientReviews from "@/components/ClientReviews";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedWorks />
      <ClientReviews />
      <FloatingButtons />
    </div>
  );
};

export default Index;
