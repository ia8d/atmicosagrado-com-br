import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Instagram, ArrowLeft, Send, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const respostas = [
  {
    texto: "A cura que você busca já vive em você. Permita-se sentir. O caminho para a plenitude não está fora, está na coragem de olhar para dentro com compaixão.",
    recomendacao: "Recomendo uma sessão de Mesa Radiônica para desbloquear os canais energéticos que estão impedindo o fluxo da sua cura interior.",
  },
  {
    texto: "O universo conspira a seu favor. Confie no processo. Cada desafio é um portal de transformação que a vida oferece para que você se torne quem realmente é.",
    recomendacao: "Uma prática de Reiki pode ajudá-la a alinhar a energia com a frequência do universo e sentir essa confiança no corpo.",
  },
  {
    texto: "Seu coração sabe o caminho. Silencie a mente e ouça. A sabedoria ancestral que habita em você é mais antiga que qualquer dúvida.",
    recomendacao: "Sugiro uma consulta com o Oráculo de Kuan Yin para aprofundar essa conexão com a voz do seu coração.",
  },
];

const OraculoPage = () => {
  const [pergunta, setPergunta] = useState("");
  const [resultado, setResultado] = useState<(typeof respostas)[0] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsultar = () => {
    if (!pergunta.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setResultado(respostas[Math.floor(Math.random() * respostas.length)]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-6 animate-float" />
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">O Oráculo Sagrado</h1>
            <p className="text-muted-foreground font-body text-lg">A voz de Raquel, canalizada pelo universo, traz a mensagem que sua alma precisa.</p>
          </motion.div>

          {!resultado && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="glass p-8 mb-8">
              <label className="block text-foreground font-display text-lg mb-4">Qual é a pergunta do seu coração?</label>
              <textarea
                value={pergunta}
                onChange={(e) => setPergunta(e.target.value)}
                placeholder="Escreva aqui o que a sua alma deseja saber..."
                rows={4}
                className="w-full bg-secondary/30 border border-border rounded-xl p-4 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none mb-6"
              />
              <button onClick={handleConsultar} disabled={loading} className="btn-mystic w-full flex items-center justify-center gap-2 text-base">
                {loading ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-spin" /> Consultando o universo...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Receber Mensagem
                  </>
                )}
              </button>
            </motion.div>
          )}

          {resultado && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
              <div className="glass p-8 md:p-12 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-foreground font-semibold">Raquel — Voz do Oráculo</p>
                    <p className="text-muted-foreground text-xs font-body">Canalização para você</p>
                  </div>
                </div>

                {/* Prévia da resposta */}
                <blockquote className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed mb-8 pl-6 border-l-2 border-primary/50">
                  "{resultado.texto}"
                </blockquote>

                <div className="bg-secondary/30 rounded-xl p-6 mb-8">
                  <p className="text-primary font-body text-sm font-semibold uppercase tracking-wider mb-2">Recomendação</p>
                  <p className="text-foreground font-body leading-relaxed">{resultado.recomendacao}</p>
                </div>

                {/* CTA Imersão Átmica */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass p-6 rounded-2xl border border-primary/20 mb-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-display text-foreground font-semibold text-lg mb-1">Quer ir mais fundo?</p>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                        Para uma visão profunda e limpeza energética, agende sua <span className="text-primary font-semibold">Imersão Átmica Completa</span> — integrando Oráculo, Reiki e Radiestesia em uma sessão transformadora.
                      </p>
                      <Link to="/agendar" className="btn-mystic inline-flex items-center gap-2 text-sm px-6 py-3">
                        Agendar Imersão Átmica
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* Instagram Embed Placeholder */}
                <div className="glass p-6 flex flex-col items-center justify-center gap-3 mb-8">
                  <Instagram className="w-8 h-8 text-muted-foreground" />
                  <p className="text-muted-foreground font-body text-sm text-center">Post relacionado do Instagram será exibido aqui</p>
                  <span className="text-xs text-muted-foreground/60 font-body">@portal.atmico</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/agendar" className="btn-mystic text-center flex-1 flex items-center justify-center gap-2">
                    Agendar Sessão
                  </Link>
                  <button onClick={() => { setResultado(null); setPergunta(""); }} className="flex-1 glass text-foreground font-body font-semibold py-4 px-6 rounded-full hover:bg-secondary/40 transition-all text-center">
                    Fazer Nova Pergunta
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OraculoPage;
