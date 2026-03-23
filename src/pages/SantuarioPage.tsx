import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Flower2, Moon, Flame, Heart, Lock, CheckCircle, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const meditacoes = [
  { nome: "Respiração Consciente", icon: Flame, desbloqueada: true },
  { nome: "Conexão com Kuan Yin", icon: Heart, desbloqueada: true },
  { nome: "Ativação dos Chakras", icon: Sparkles, desbloqueada: true },
  { nome: "Jornada Lunar", icon: Moon, desbloqueada: false },
  { nome: "Despertar do Sagrado", icon: Flower2, desbloqueada: false },
  { nome: "Cura do Útero", icon: Heart, desbloqueada: false },
];

const consultas = [
  { servico: "Reiki", data: "15 Mar 2026", status: "Concluída" },
  { servico: "Oráculo de Kuan Yin", data: "02 Mar 2026", status: "Concluída" },
  { servico: "Radiestesia", data: "18 Fev 2026", status: "Concluída" },
];

const SantuarioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Portal
          </Link>

          {/* Welcome */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="glass p-8 md:p-12 mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-muted-foreground font-body text-sm">Bem-vinda ao seu</p>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Santuário Interior</h1>
              </div>
            </div>
            <p className="text-muted-foreground font-body leading-relaxed">Este é o seu espaço sagrado. Aqui encontra as suas meditações, o histórico da sua jornada e as ferramentas para continuar a evoluir.</p>
          </motion.div>

          {/* Meditações */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Flower2 className="w-6 h-6 text-primary" /> Sua Jornada
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {meditacoes.map((m, i) => (
                <div
                  key={m.nome}
                  className={`glass p-6 text-center transition-all duration-500 ${
                    m.desbloqueada ? "glow-hover cursor-pointer hover:-translate-y-1" : "opacity-50"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${
                    m.desbloqueada ? "gradient-bg" : "bg-secondary"
                  }`}>
                    {m.desbloqueada ? (
                      <m.icon className="w-5 h-5 text-primary-foreground" />
                    ) : (
                      <Lock className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <p className="font-body text-sm text-foreground font-medium">{m.nome}</p>
                  {m.desbloqueada && (
                    <span className="inline-flex items-center gap-1 text-xs text-primary mt-2 font-body">
                      <CheckCircle className="w-3 h-3" /> Desbloqueada
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Histórico */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" /> Histórico de Consultas
            </h2>
            <div className="space-y-4">
              {consultas.map((c) => (
                <div key={c.data} className="glass p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-foreground font-medium text-sm">{c.servico}</p>
                      <p className="text-muted-foreground text-xs font-body">{c.data}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-body font-semibold text-primary-foreground gradient-bg">
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/agendar" className="btn-mystic inline-block text-sm px-8 py-3">
                Agendar Nova Sessão
              </Link>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SantuarioPage;
