import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FloatingButtons />
    </div>
  );
};

export default Index;
