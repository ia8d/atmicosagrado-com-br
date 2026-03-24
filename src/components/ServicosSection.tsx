import { Sparkles, ShieldCheck, Gem, CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const servicos = [
  {
    icon: Gem,
    nome: "Pílula de Clareza",
    precoOriginal: "R$ 100",
    preco: "R$ 69",
    badge: "Valor de Lançamento",
    duracao: "30 min",
    descricao:
      "Foco em uma questão específica. Consulta com o Oráculo de Kuan Yin seguida de indicação personalizada de banhos, cristais e práticas de ancoragem para o seu momento.",
    destaques: ["Oráculo de Kuan Yin", "Indicação de banhos e cristais", "Orientação prática"],
    waLink:
      "https://wa.me/555391461889?text=Ol%C3%A1%20Raquel!%20Vi%20no%20portal%20e%20gostaria%20de%20agendar%20uma%20P%C3%ADlula%20de%20Clareza.",
  },
  {
    icon: ShieldCheck,
    nome: "Imersão Átmica Completa",
    precoOriginal: "R$ 180",
    preco: "R$ 120",
    badge: "Oferta Especial",
    duracao: "60 – 80 min",
    descricao:
      "Sessão integrativa que combina Oráculo, Reiki e Radiestesia para uma limpeza e proteção energética profunda. O Método Átmico em sua expressão plena.",
    destaques: ["Oráculo + Reiki + Radiestesia", "Limpeza e proteção profundas", "Relatório energético completo"],
    destaque: true,
    waLink:
      "https://wa.me/555391461889?text=Ol%C3%A1%20Raquel!%20Sinto%20que%20meu%20templo%20precisa%20de%20uma%20limpeza%20profunda.%20Gostaria%20de%20agendar%20a%20Imers%C3%A3o%20%C3%81tmica%20Completa.",
  },
];

const ServicosSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicos" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div ref={ref} className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Comece sua jornada
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Escolha a sua Sessão
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Atendimento online e intuitivo. Oráculo, Reiki e Radiestesia se combinam conforme a sua necessidade energética.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicos.map((s, i) => (
            <motion.div
              key={s.nome}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`glass glow-hover p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 relative ${s.destaque ? "ring-1 ring-primary/40" : ""}`}
            >
              {s.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-body font-semibold px-4 py-1 rounded-full shadow-[0_0_20px_hsl(330_100%_44%/0.5)]">
                  Recomendado
                </span>
              )}
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_hsl(330_100%_44%/0.4)] transition-shadow duration-500">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.nome}</h3>
              <p className="text-muted-foreground font-body text-sm line-through mb-1">{s.precoOriginal}</p>
              <p className="text-primary font-display text-3xl font-bold mb-1 drop-shadow-[0_0_16px_hsl(330_100%_44%/0.7)]">
                {s.preco}
              </p>
              <p className="text-muted-foreground text-xs font-body mb-4">{s.duracao}</p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">{s.descricao}</p>

              <ul className="w-full space-y-2 mb-8 text-left">
                {s.destaques.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-muted-foreground font-body text-xs">
                    <Sparkles className="w-3 h-3 text-primary shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>

              <a
                href={s.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mystic w-full text-sm py-3 mt-auto text-center block shadow-[0_0_20px_hsl(330_100%_44%/0.4)] hover:shadow-[0_0_35px_hsl(330_100%_44%/0.6)]"
              >
                <CalendarIcon className="w-4 h-4 inline mr-2" /> Agendar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
