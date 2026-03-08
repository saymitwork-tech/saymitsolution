import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import ClientReviews from "@/components/ClientReviews";
import PaymentSection from "@/components/PaymentSection";
import ProjectEstimator from "@/components/ProjectEstimator";
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
      <PaymentSection />
      <ProjectEstimator />
      <FloatingButtons />
      <footer className="w-full py-4 text-center bg-[hsl(var(--primary))]">
        <a
          href="https://www.facebook.com/saymitsolution"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary-foreground/80 hover:text-[hsl(var(--accent))] transition-colors"
        >
          Developed by Saym IT Solution
        </a>
      </footer>
    </div>
  );
};

export default Index;
