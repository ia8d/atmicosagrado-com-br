import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Eye, Radio, Heart, BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import kuanYinImg from "@/assets/kuan-yin.jpg";
import radiestesiaImg from "@/assets/radiestesia.jpg";
import reikiImg from "@/assets/reiki.jpg";
import registrosImg from "@/assets/registros-akashicos.jpg";

const disciplinas = [
  {
    icon: Eye,
    nome: "Oráculo de Kuan Yin",
    subtitulo: "Clareza e Compaixão",
    descricao: "Consulta oracular canalizada pela energia compassiva de Kuan Yin, a Deusa da Misericórdia. Através das cartas e da intuição, revelamos mensagens que trazem clareza, direção e acolhimento para o seu momento presente. O Oráculo é o primeiro passo do Método Átmico — o mapa que guia toda a sessão.",
    imagem: kuanYinImg,
  },
  {
    icon: Radio,
    nome: "Radiestesia",
    subtitulo: "Limpeza e Proteção",
    descricao: "A arte de medir e harmonizar frequências energéticas utilizando a Mesa Radiônica. A Radiestesia identifica bloqueios, padrões repetitivos e desequilíbrios no campo vibracional, permitindo intervenções precisas para limpar, proteger e alinhar a sua energia com o seu propósito.",
    imagem: radiestesiaImg,
  },
  {
    icon: Heart,
    nome: "Reiki",
    subtitulo: "Alívio de Stress e Energia",
    descricao: "Técnica de cura energética que canaliza a energia vital universal (Ki) através da imposição de mãos. O Reiki restaura o equilíbrio dos chakras, dissolve tensões físicas e emocionais e promove um estado profundo de paz e regeneração celular.",
    imagem: reikiImg,
  },
  {
    icon: BookOpen,
    nome: "Registros Akáshicos",
    subtitulo: "Missão de Vida e Padrões",
    placeholder: true,
    descricao: "Os Registros Akáshicos são o arquivo cósmico de toda experiência vivida pela sua alma. Em breve, esta modalidade será integrada ao Método Átmico, permitindo acessar memórias, contratos e padrões de vidas passadas que influenciam o seu agora.",
    imagem: registrosImg,
  },
];

const terapeutas = [
  {
    nome: "Raquel",
    papel: "Terapeuta Intuitiva & Oraculista",
    bio: "Com anos de dedicação ao estudo das terapias holísticas, Raquel canaliza a energia de Kuan Yin para guiar cada sessão com compaixão, intuição e profundidade. Sua abordagem acolhedora cria um espaço seguro para a cura e o autoconhecimento.",
  },
  {
    nome: "Gabriel",
    papel: "Co-fundador & Terapeuta Energético",
    bio: "Gabriel une a sensibilidade espiritual com uma visão estratégica para co-criar o Portal Átmico. Praticante de Reiki e Radiestesia, ele acredita que a tecnologia e a espiritualidade podem caminhar juntas para democratizar o acesso à cura energética.",
  },
];

const MetodoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Portal
          </Link>

          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-24">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-6 animate-float" />
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">O Método Átmico</h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Uma abordagem intuitiva e integrada de cura. Cada ferramenta é usada conforme a sua energia pede — sem rigidez, com compaixão.
            </p>
          </motion.div>

          {/* Pilares — layout alternado */}
          <div className="space-y-24 md:space-y-32">
            {disciplinas.map((d, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={d.nome}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16 ${d.placeholder ? "opacity-80" : ""}`}
                >
                  {/* Imagem com gradiente que "derrete" no fundo */}
                  <div className="w-full md:w-1/2 relative group shrink-0">
                    <div className="relative overflow-hidden rounded-3xl">
                      <img
                        src={d.imagem}
                        alt={d.nome}
                        loading="lazy"
                        width={1024}
                        height={768}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient overlay — blends image into background */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                      <div className={`absolute inset-0 bg-gradient-to-${isEven ? "r" : "l"} from-transparent via-transparent to-background/60`} />
                    </div>
                    {/* Glow behind image */}
                    <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  {/* Texto */}
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{d.nome}</h2>
                        <p className="text-primary font-body text-sm">{d.subtitulo}</p>
                      </div>
                      {d.placeholder && (
                        <span className="text-xs font-body text-primary bg-primary/10 px-3 py-1 rounded-full ml-auto">Em breve</span>
                      )}
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed text-base">{d.descricao}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Seção Terapeutas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="mt-32"
          >
            <div className="text-center mb-12">
              <Users className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Quem Somos</h2>
              <p className="text-muted-foreground font-body max-w-xl mx-auto">
                Por trás do Portal Átmico estão pessoas reais, movidas pelo propósito de tornar a cura energética acessível e acolhedora.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {terapeutas.map((t) => (
                <div key={t.nome} className="glass glow-hover p-8 text-center">
                  {/* Placeholder avatar */}
                  <div className="w-28 h-28 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-display text-3xl font-bold">
                    {t.nome[0]}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{t.nome}</h3>
                  <p className="text-primary font-body text-sm mb-4">{t.papel}</p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{t.bio}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mt-20">
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
