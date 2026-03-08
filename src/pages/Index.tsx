import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudySection from "@/components/CaseStudySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import PricingSection from "@/components/PricingSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import ClientReviews from "@/components/ClientReviews";
import BlogSection from "@/components/BlogSection";
import CTABanner from "@/components/CTABanner";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import PaymentSection from "@/components/PaymentSection";
import ProjectEstimator from "@/components/ProjectEstimator";
import FloatingButtons from "@/components/FloatingButtons";
import AIChatWidget from "@/components/AIChatWidget";
import PremiumFooter from "@/components/PremiumFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CaseStudySection />
      <WhyChooseUsSection />
      <ClientLogosSection />
      <PricingSection />
      <FeaturedWorks />
      <ClientReviews />
      <BlogSection />
      <CTABanner />
      <LeadCaptureSection />
      <PaymentSection />
      <ProjectEstimator />
      <FloatingButtons />
      <AIChatWidget />
      <PremiumFooter />
    </div>
  );
};

export default Index;
