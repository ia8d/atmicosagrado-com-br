import { Link } from "react-router-dom";
import { Sparkles, Heart } from "lucide-react";

const Footer = () => (
  <footer id="agendar" className="py-16 border-t border-border/30">
    <div className="container mx-auto px-6 text-center">
      <Sparkles className="w-6 h-6 text-primary mx-auto mb-6" />
      <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
        Pronta para despertar?
      </h2>
      <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
        Agende uma sessão e dê o primeiro passo na sua jornada de cura e autoconhecimento.
      </p>
      <a href="#" className="btn-mystic text-base inline-block mb-12">
        Agendar Sessão
      </a>
      <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm font-body">
          © 2026 Portal Átmico Sagrado. Todos os direitos reservados.
        </p>
        <p className="text-muted-foreground text-sm font-body flex items-center gap-1">
          Feito com <Heart className="w-3 h-3 text-primary" /> e intenção sagrada
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
