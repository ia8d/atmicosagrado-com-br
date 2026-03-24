import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PilaresSection from "@/components/PilaresSection";
import ServicosSection from "@/components/ServicosSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ArticlesPreviewSection from "@/components/ArticlesPreviewSection";
import VideosPreviewSection from "@/components/VideosPreviewSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PilaresSection />
      <ArticlesPreviewSection />
      <VideosPreviewSection />
      <ServicosSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
