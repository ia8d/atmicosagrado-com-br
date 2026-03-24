import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PilaresSection from "@/components/PilaresSection";
import ServicosSection from "@/components/ServicosSection";

import FeedEvolucao from "@/components/FeedEvolucao";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OraculoSection />
      <PilaresSection />
      <ServicosSection />
      <FeedEvolucao />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
