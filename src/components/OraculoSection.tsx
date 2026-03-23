import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const respostas = [
  "A cura que você busca já vive em você. Permita-se sentir.",
  "O universo conspira a seu favor. Confie no processo.",
  "Seu coração sabe o caminho. Silencie a mente e ouça.",
  "A compaixão é a chave. Comece por si mesma.",
  "Cada ciclo traz renovação. Honre o que precisa partir.",
  "A luz que você procura já brilha dentro de você.",
  "Permita que a vulnerabilidade seja sua maior força.",
  "O sagrado habita nos pequenos momentos de presença.",
];

const OraculoSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [query, setQuery] = useState("");
  const [resposta, setResposta] = useState("");
  const [isRevealing, setIsRevealing] = useState(false);

  const handleConsultar = () => {
    if (!query.trim()) return;
    setIsRevealing(true);
    setTimeout(() => {
      setResposta(respostas[Math.floor(Math.random() * respostas.length)]);
      setIsRevealing(false);
    }, 1500);
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
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            O Oráculo
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            O que seu coração precisa ouvir hoje?
          </h2>
          <p className="text-muted-foreground font-body mb-10">
            Escreva sua pergunta e receba uma mensagem do universo.
          </p>
        </motion.div>

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
            <button
              onClick={handleConsultar}
              className="btn-mystic text-sm px-6 py-3 shrink-0"
            >
              Consultar
            </button>
          </div>
        </motion.div>

        {(isRevealing || resposta) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 glass p-8 text-center"
          >
            {isRevealing ? (
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-primary animate-spin" />
                <span className="text-muted-foreground font-body text-sm">
                  Consultando o universo...
                </span>
              </div>
            ) : (
              <p className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed">
                "{resposta}"
              </p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OraculoSection;
