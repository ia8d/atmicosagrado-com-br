import { Heart, Radio, Zap, BookOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const pilares = [
  {
    icon: Heart,
    title: "Kuan Yin",
    subtitle: "Clareza e Decisões",
    description: "Receba orientação direta do Oráculo para tomar decisões com confiança e clareza emocional.",
  },
  {
    icon: Radio,
    title: "Radiestesia",
    subtitle: "Limpeza e Proteção",
    description: "Identifique e remova bloqueios energéticos que drenam a sua vitalidade e travam o seu progresso.",
  },
  {
    icon: Zap,
    title: "Reiki",
    subtitle: "Alívio de Stress e Energia",
    description: "Dissolva tensões acumuladas e restaure a sua energia vital para viver com mais leveza e disposição.",
  },
  {
    icon: BookOpen,
    title: "Registros Akáshicos",
    subtitle: "Missão de Vida e Padrões",
    description: "Acesse a sua história da alma para compreender padrões repetitivos e alinhar-se à sua missão de vida.",
  },
];

const PilaresSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pilares" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Como te ajudamos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Nossos Pilares
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((pilar, i) => (
            <motion.div
              key={pilar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass glow-hover group p-8 text-center cursor-pointer transition-all duration-500 hover:-translate-y-2"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {pilar.title}
              </h3>
              <p className="text-primary text-sm font-body mb-3">
                {pilar.subtitle}
              </p>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {pilar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/metodo"
            className="btn-mystic inline-flex items-center gap-2 text-sm px-8 py-3"
          >
            Conheça o Método Átmico em detalhes
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PilaresSection;
