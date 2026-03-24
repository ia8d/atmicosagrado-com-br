import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, ShieldCheck, Gem, CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fluxo = [
  { icon: Search, titulo: "Consulta", desc: "Oráculo de Kuan Yin revela o mapa energético." },
  { icon: Stethoscope, titulo: "Diagnóstico", desc: "Radiestesia identifica bloqueios e frequências." },
  { icon: Zap, titulo: "Intervenção", desc: "Reiki canaliza a cura para onde é necessário." },
  { icon: BookOpen, titulo: "Recomendação", desc: "Banhos, cristais e práticas para o pós-sessão." },
];

const servicos = [
  {
    icon: Gem,
    nome: "Pílula de Clareza",
    preco: "R$ 69",
    duracao: "30 min",
    descricao: "Foco em uma questão específica. Consulta com o Oráculo de Kuan Yin seguida de indicação personalizada de banhos, cristais e práticas de ancoragem para o seu momento.",
    destaques: ["Oráculo de Kuan Yin", "Indicação de banhos e cristais", "Orientação prática"],
  },
  {
    icon: ShieldCheck,
    nome: "Imersão Átmica Completa",
    preco: "R$ 99",
    duracao: "60 - 80 min",
    descricao: "Sessão integrativa que combina Oráculo, Reiki e Radiestesia para uma limpeza e proteção energética profunda. O Método Átmico em sua expressão plena.",
    destaques: ["Oráculo + Reiki + Radiestesia", "Limpeza e proteção profundas", "Relatório energético completo"],
    destaque: true,
  },
];

const waLinks: Record<string, string> = {
  "Pílula de Clareza": "https://wa.me/555391461889?text=Ol%C3%A1%20Raquel!%20Vi%20no%20portal%20e%20gostaria%20de%20agendar%20uma%20P%C3%ADlula%20de%20Clareza.",
  "Imersão Átmica Completa": "https://wa.me/555391461889?text=Ol%C3%A1%20Raquel!%20Sinto%20que%20meu%20templo%20precisa%20de%20uma%20limpeza%20profunda.%20Gostaria%20de%20agendar%20a%20Imers%C3%A3o%20%C3%81tmica%20Completa.",
};

const AgendarPage = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>

          {/* Hero */}

          {/* A Jornada Átmica */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="mb-24">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase text-center mb-3">O Método</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">A Jornada Átmica</h2>
            <p className="text-muted-foreground font-body text-center max-w-2xl mx-auto mb-12">
              O atendimento é intuitivo e integrado. Oráculo, Reiki e Radiestesia se combinam de forma orgânica conforme a necessidade energética revelada durante a sessão.
            </p>

          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {servicos.map((s, i) => (
              <motion.div
                key={s.nome}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className={`glass glow-hover p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 relative ${s.destaque ? "ring-1 ring-primary/40" : ""}`}
              >
                {s.destaque && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-body font-semibold px-4 py-1 rounded-full">Recomendado</span>
                )}
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-shadow duration-500">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.nome}</h3>
                <p className="text-primary font-display text-2xl font-bold mb-1">{s.preco}</p>
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
                  href={waLinks[s.nome]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-mystic w-full text-sm py-3 mt-auto text-center block"
                >
                  <CalendarIcon className="w-4 h-4 inline mr-2" /> Agendar
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative glass-strong p-8 max-w-md w-full z-10"
          >
            <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Agendar {selectedService}</h3>
            <p className="text-muted-foreground font-body text-sm mb-6">Escolha uma data disponível para a sua sessão.</p>
            <div className="flex justify-center mb-6">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date()}
                className="p-3 pointer-events-auto glass rounded-xl"
              />
            </div>
            {selectedDate && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
                <p className="text-foreground font-body text-sm mb-4">
                  Data selecionada: <span className="text-primary font-semibold">{selectedDate.toLocaleDateString("pt-BR")}</span>
                </p>
                <button onClick={() => setModalOpen(false)} className="btn-mystic w-full text-sm py-3">
                  Confirmar Agendamento
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AgendarPage;
