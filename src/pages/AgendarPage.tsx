import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Heart, Radio, Eye, CalendarIcon, X } from "lucide-react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servicos = [
  {
    icon: Heart,
    nome: "Reiki",
    preco: "R$ 180",
    duracao: "60 min",
    descricao: "Sessão de cura energética para restaurar o equilíbrio dos chakras, aliviar tensões e promover o bem-estar profundo do corpo e da alma.",
  },
  {
    icon: Radio,
    nome: "Radiestesia",
    preco: "R$ 220",
    duracao: "90 min",
    descricao: "Mesa Radiônica completa para identificar e corrigir bloqueios energéticos, harmonizar ambientes e alinhar o seu campo vibracional.",
  },
  {
    icon: Eye,
    nome: "Oráculo de Kuan Yin",
    preco: "R$ 150",
    duracao: "45 min",
    descricao: "Consulta oracular canalizada pela energia compassiva de Kuan Yin. Receba orientações para o seu caminho de cura e autoconhecimento.",
  },
];

const AgendarPage = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (nome: string) => {
    setSelectedService(nome);
    setSelectedDate(undefined);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Portal
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-6 animate-float" />
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">Agende sua Sessão</h1>
            <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">Escolha o serviço que ressoa com o seu momento e dê o primeiro passo na sua jornada de cura.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicos.map((s, i) => (
              <motion.div
                key={s.nome}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass glow-hover p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_hsl(330_100%_44%/0.4)] transition-shadow duration-500">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.nome}</h3>
                <p className="text-primary font-display text-2xl font-bold mb-1">{s.preco}</p>
                <p className="text-muted-foreground text-xs font-body mb-4">{s.duracao}</p>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8 flex-1">{s.descricao}</p>
                <button onClick={() => openModal(s.nome)} className="btn-mystic w-full text-sm py-3">
                  <CalendarIcon className="w-4 h-4 inline mr-2" /> Agendar
                </button>
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
                <button onClick={() => { setModalOpen(false); }} className="btn-mystic w-full text-sm py-3">
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
