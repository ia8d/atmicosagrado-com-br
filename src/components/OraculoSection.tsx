import { useState } from "react";
import { Search, Sparkles, ShieldCheck, CalendarIcon, Instagram, Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

type MediaType = "instagram" | "youtube";

interface OracleResponse {
  texto: string;
  recomendacao: string;
  servico: string;
  media: {
    type: MediaType;
    url: string; // Instagram post URL or YouTube video ID
    label: string;
  };
}

const respostas: OracleResponse[] = [
  {
    texto: "A cura que você busca já vive em você. Permita-se sentir. O caminho para a plenitude não está fora, está na coragem de olhar para dentro com compaixão.",
    recomendacao: "Recomendo uma sessão de Mesa Radiônica para desbloquear os canais energéticos que estão impedindo o fluxo da sua cura interior.",
    servico: "imersao",
    media: { type: "youtube", url: "dQw4w9WgXcQ", label: "Meditação Guiada — Cura Interior" },
  },
  {
    texto: "O universo conspira a seu favor. Confie no processo. Cada desafio é um portal de transformação que a vida oferece para que você se torne quem realmente é.",
    recomendacao: "Uma prática de Reiki pode ajudá-la a alinhar a energia com a frequência do universo e sentir essa confiança no corpo.",
    servico: "reiki",
    media: { type: "instagram", url: "https://www.instagram.com/p/EXAMPLE1/", label: "Energia Reiki — @portal.atmico" },
  },
  {
    texto: "Seu coração sabe o caminho. Silencie a mente e ouça. A sabedoria ancestral que habita em você é mais antiga que qualquer dúvida.",
    recomendacao: "Sugiro uma consulta com o Oráculo de Kuan Yin para aprofundar essa conexão com a voz do seu coração.",
    servico: "pilula",
    media: { type: "youtube", url: "dQw4w9WgXcQ", label: "Oráculo de Kuan Yin — Conexão Sagrada" },
  },
  {
    texto: "A compaixão é a chave. Comece por si mesma. Quando você se permite receber, o universo inteiro se reorganiza ao seu redor.",
    recomendacao: "Uma sessão de Reiki vai ajudar a abrir o canal do amor-próprio e restaurar a energia do seu campo áurico.",
    servico: "reiki",
    media: { type: "instagram", url: "https://www.instagram.com/p/EXAMPLE2/", label: "Amor-Próprio — @portal.atmico" },
  },
  {
    texto: "Cada ciclo traz renovação. Honre o que precisa partir. A luz que você procura já brilha dentro de você.",
    recomendacao: "A Imersão Átmica Completa é ideal para este momento de transição — integrando Oráculo, Reiki e Radiestesia.",
    servico: "imersao",
    media: { type: "youtube", url: "dQw4w9WgXcQ", label: "Imersão Átmica — Transformação Profunda" },
  },
  {
    texto: "Permita que a vulnerabilidade seja sua maior força. O sagrado habita nos pequenos momentos de presença.",
    recomendacao: "Uma Pílula de Clareza pode trazer a orientação prática que você precisa agora, com banhos e cristais personalizados.",
    servico: "pilula",
    media: { type: "instagram", url: "https://www.instagram.com/p/EXAMPLE3/", label: "Cristais & Clareza — @portal.atmico" },
  },
];

const waLinks: Record<string, string> = {
  reiki: "https://wa.me/555391461889?text=Ol%C3%A1%20Raquel!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20Reiki.",
  pilula: "https://wa.me/555391461889?text=Ol%C3%A1%20Raquel!%20Vi%20no%20portal%20e%20gostaria%20de%20agendar%20uma%20P%C3%ADlula%20de%20Clareza.",
  imersao: "https://wa.me/555391461889?text=Ol%C3%A1%20Raquel!%20Sinto%20que%20meu%20templo%20precisa%20de%20uma%20limpeza%20profunda.%20Gostaria%20de%20agendar%20a%20Imers%C3%A3o%20%C3%81tmica%20Completa.",
};

const MediaEmbed = ({ media }: { media: OracleResponse["media"] }) => {
  if (!media) return null;
  if (media.type === "youtube") {
    return (
      <div className="glass p-3 mb-8 overflow-hidden rounded-2xl">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${media.url}`}
            title={media.label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <p className="text-muted-foreground text-xs font-body text-center mt-3 flex items-center justify-center gap-1.5">
          <Play className="w-3 h-3" /> {media.label}
        </p>
      </div>
    );
  }

  return (
    <a
      href={media.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass p-6 flex flex-col items-center justify-center gap-3 mb-8 group hover:border-primary/30 transition-colors cursor-pointer"
    >
      <Instagram className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
      <p className="text-muted-foreground font-body text-sm text-center group-hover:text-foreground transition-colors">
        {media.label}
      </p>
      <span className="text-xs text-muted-foreground/60 font-body">@portal.atmico</span>
    </a>
  );
};

const OraculoSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [query, setQuery] = useState("");
  const [resultado, setResultado] = useState<OracleResponse | null>(null);
  const [isChanneling, setIsChanneling] = useState(false);

  const handleConsultar = () => {
    if (!query.trim() || isChanneling) return;
    setIsChanneling(true);
    setResultado(null);
    setTimeout(() => {
      setResultado(respostas[Math.floor(Math.random() * respostas.length)]);
      setIsChanneling(false);
    }, 2000);
  };

  const handleNovaPergunta = () => {
    setResultado(null);
    setQuery("");
  };

  return (
    <section id="oraculo" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div ref={ref} className="container mx-auto px-6 max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-6 animate-float" />
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">O Oráculo</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            O que seu coração precisa ouvir hoje?
          </h2>
          <p className="text-muted-foreground font-body mb-10">
            Escreva sua pergunta e receba uma mensagem do universo.
          </p>
        </motion.div>

        {/* Search input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass p-2 glow-hover"
        >
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-muted-foreground ml-4 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleConsultar()}
              placeholder="Faça sua pergunta ao universo..."
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground font-body py-4 text-sm"
            />
            <button onClick={handleConsultar} disabled={isChanneling} className="btn-mystic text-sm px-6 py-3 shrink-0">
              Consultar
            </button>
          </div>
        </motion.div>

        {/* Channeling animation */}
        <AnimatePresence>
          {isChanneling && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 glass p-10 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <Sparkles className="w-10 h-10 text-primary animate-spin" />
                  <div className="absolute inset-0 w-10 h-10 rounded-full bg-primary/20 animate-ping" />
                </div>
                <p className="text-muted-foreground font-body text-sm animate-pulse">
                  Canalizando a voz do universo...
                </p>
                <div className="flex gap-1.5 mt-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-primary/60"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result */}
        <AnimatePresence>
          {resultado && !isChanneling && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="mt-8"
            >
              <div className="glass p-8 md:p-10">
                {/* Raquel header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-foreground font-semibold">Raquel — Voz do Oráculo</p>
                    <p className="text-muted-foreground text-xs font-body">Canalização para você</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed mb-8 pl-6 border-l-2 border-primary/50">
                  "{resultado.texto}"
                </blockquote>

                {/* Recommendation */}
                <div className="bg-secondary/30 rounded-xl p-6 mb-8">
                  <p className="text-primary font-body text-sm font-semibold uppercase tracking-wider mb-2">
                    Recomendação
                  </p>
                  <p className="text-foreground font-body leading-relaxed">{resultado.recomendacao}</p>
                </div>

                {/* Media embed */}
                <MediaEmbed media={resultado.media} />

                {/* CTA Imersão */}
                <div className="glass p-6 rounded-2xl border border-primary/20 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center shrink-0 shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                      <ShieldCheck className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-display text-foreground font-semibold text-lg mb-1">Quer ir mais fundo?</p>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                        Para uma visão profunda e limpeza energética, agende sua{" "}
                        <span className="text-primary font-semibold">Imersão Átmica Completa</span> — integrando Oráculo, Reiki e Radiestesia.
                      </p>
                      <a
                        href={waLinks[resultado.servico]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-mystic inline-flex items-center gap-2 text-sm px-6 py-3 shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_35px_hsl(var(--primary)/0.6)]"
                      >
                        <CalendarIcon className="w-4 h-4" /> Agendar Sessão
                      </a>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={waLinks[resultado.servico]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-mystic text-center flex-1 flex items-center justify-center gap-2 shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                  >
                    <CalendarIcon className="w-4 h-4" /> Agendar Agora
                  </a>
                  <button
                    onClick={handleNovaPergunta}
                    className="flex-1 glass text-foreground font-body font-semibold py-4 px-6 rounded-full hover:bg-secondary/40 transition-all text-center"
                  >
                    Fazer Nova Pergunta
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OraculoSection;
