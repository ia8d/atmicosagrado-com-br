import { Sparkles, Heart } from "lucide-react";
import { Instagram, Youtube } from "lucide-react";

const WA_GENERIC = "https://wa.me/555391461889?text=Oi%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.";

const Footer = () =>
  <footer id="agendar" className="py-16 border-t border-border/30">
    <div className="container mx-auto px-6 text-center">
      
      <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
        Pronta (o) para despertar?
      </h2>
      <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
        Agende uma sessão e dê o primeiro passo na sua jornada de cura e autoconhecimento.
      </p>
      <a
        href={WA_GENERIC}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-mystic text-base inline-block mb-12"
      >
        Agendar Sessão
      </a>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-6 mb-10">
        <a
          href="https://www.instagram.com/atmico_sagrado/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:drop-shadow-[0_0_12px_hsl(330,100%,44%)] transition-all duration-300 hover:scale-110"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="https://www.youtube.com/@átmico_sagrado"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:drop-shadow-[0_0_12px_hsl(330,100%,44%)] transition-all duration-300 hover:scale-110"
        >
          <Youtube className="w-6 h-6" />
        </a>
      </div>

      <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm font-body">
          © 2026 Portal Átmico Sagrado. Todos os direitos reservados.
        </p>
        <p className="text-muted-foreground text-sm font-body flex items-center gap-1">
          Feito com <Heart className="w-3 h-3 text-primary" /> e intenção sagrada
        </p>
      </div>
    </div>
  </footer>;

export default Footer;