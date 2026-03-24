import { MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingWhatsApp = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <a
      href="https://wa.me/555391461889?text=Oi%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 btn-mystic px-5 py-3 text-sm shadow-[0_0_30px_hsl(330_100%_44%/0.5)] animate-pulse hover:animate-none"
    >
      <MessageCircle className="w-5 h-5" />
      Agendar
    </a>
  );
};

export default FloatingWhatsApp;
