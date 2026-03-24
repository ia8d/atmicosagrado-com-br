import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PilaresSection from "@/components/PilaresSection";
import ServicosSection from "@/components/ServicosSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogPreviewSection from "@/components/BlogPreviewSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PilaresSection />
      <ServicosSection />
      <BlogPreviewSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
