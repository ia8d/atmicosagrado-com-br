import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Eye, Radio, Heart, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const disciplinas = [
  {
    icon: Eye,
    nome: "Oráculo de Kuan Yin",
    descricao: "Consulta oracular canalizada pela energia compassiva de Kuan Yin, a Deusa da Misericórdia. Através das cartas e da intuição, revelamos mensagens que trazem clareza, direção e acolhimento para o seu momento presente. O Oráculo é o primeiro passo do Método Átmico — o mapa que guia toda a sessão.",
  },
  {
    icon: Radio,
    nome: "Radiestesia",
    descricao: "A arte de medir e harmonizar frequências energéticas utilizando a Mesa Radiônica. A Radiestesia identifica bloqueios, padrões repetitivos e desequilíbrios no campo vibracional, permitindo intervenções precisas para limpar, proteger e alinhar a sua energia com o seu propósito.",
  },
  {
    icon: Heart,
    nome: "Reiki",
    descricao: "Técnica de cura energética que canaliza a energia vital universal (Ki) através da imposição de mãos. O Reiki restaura o equilíbrio dos chakras, dissolve tensões físicas e emocionais e promove um estado profundo de paz e regeneração celular.",
  },
  {
    icon: BookOpen,
    nome: "Registros Akáshicos",
    placeholder: true,
    descricao: "Os Registros Akáshicos são o arquivo cósmico de toda experiência vivida pela sua alma. Em breve, esta modalidade será integrada ao Método Átmico, permitindo acessar memórias, contratos e padrões de vidas passadas que influenciam o seu agora.",
  },
];

const MetodoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Portal
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-6 animate-float" />
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">O Método Átmico</h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Uma abordagem intuitiva e integrada de cura. Cada ferramenta é usada conforme a sua energia pede — sem rigidez, com compaixão.
            </p>
          </motion.div>

          <div className="space-y-8">
            {disciplinas.map((d, i) => (
              <motion.div
                key={d.nome}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`glass glow-hover p-8 md:p-10 flex flex-col md:flex-row items-start gap-6 ${d.placeholder ? "opacity-70 border border-dashed border-primary/30" : ""}`}
              >
                <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center shrink-0">
                  <d.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">{d.nome}</h2>
                    {d.placeholder && (
                      <span className="text-xs font-body text-primary bg-primary/10 px-3 py-1 rounded-full">Em breve</span>
                    )}
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed">{d.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-16">
            <Link to="/agendar" className="btn-mystic inline-flex items-center gap-2 text-base px-8 py-4">
              <Sparkles className="w-5 h-5" /> Agendar uma Sessão
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MetodoPage;
