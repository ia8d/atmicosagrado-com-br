import { Heart, Radio, Zap, Moon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const pilares = [
  {
    icon: Heart,
    title: "Kuan Yin",
    subtitle: "Compaixão",
    description: "Encontre a deusa interior e abra o coração para a cura através da compaixão infinita.",
  },
  {
    icon: Radio,
    title: "Radiestesia",
    subtitle: "Frequência",
    description: "Alinhe seu campo energético através das frequências sagradas e vibrações sutis.",
  },
  {
    icon: Zap,
    title: "Reiki",
    subtitle: "Cura Energética",
    description: "Conecte-se com a energia universal e permita que a cura flua através de você.",
  },
  {
    icon: Moon,
    title: "Sagrado Feminino",
    subtitle: "Essência",
    description: "Reverencie os ciclos naturais e reconecte-se com a sabedoria ancestral feminina.",
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
            Caminhos de Cura
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
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <pilar.icon className="w-7 h-7 text-primary" />
              </div>
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
      </div>
    </section>
  );
};

export default PilaresSection;
