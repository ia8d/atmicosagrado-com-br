import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PilaresSection from "@/components/PilaresSection";
import OraculoSection from "@/components/OraculoSection";
import FeedEvolucao from "@/components/FeedEvolucao";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PilaresSection />
      <OraculoSection />
      <FeedEvolucao />
      <Footer />
    </div>
  );
};

export default Index;
