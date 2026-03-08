import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import ClientReviews from "@/components/ClientReviews";
import PaymentSection from "@/components/PaymentSection";
import ProjectEstimator from "@/components/ProjectEstimator";
import FloatingButtons from "@/components/FloatingButtons";
import PremiumFooter from "@/components/PremiumFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedWorks />
      <ClientReviews />
      <PaymentSection />
      <ProjectEstimator />
      <FloatingButtons />
      <PremiumFooter />
    </div>
  );
};

export default Index;
