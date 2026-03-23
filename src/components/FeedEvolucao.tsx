import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import blogReiki from "@/assets/blog-reiki.jpg";
import blogFeminino from "@/assets/blog-feminino.jpg";
import blogRadiestesia from "@/assets/blog-radiestesia.jpg";

const posts = [
  {
    id: "reiki-principios",
    image: blogReiki,
    tag: "Reiki",
    title: "Os 5 Princípios do Reiki para Transformar o Seu Dia",
    excerpt: "Descubra como aplicar a sabedoria milenar do Reiki na sua rotina diária.",
  },
  {
    image: blogFeminino,
    tag: "Sagrado Feminino",
    title: "Honrando os Ciclos: A Sabedoria da Lua Interior",
    excerpt: "Conecte-se com as fases lunares e desperte o poder do seu ciclo sagrado.",
  },
  {
    image: blogRadiestesia,
    tag: "Radiestesia",
    title: "Como o Pêndulo Pode Revelar Bloqueios Energéticos",
    excerpt: "Um guia introdutório sobre a arte da radiestesia e o equilíbrio vibracional.",
  },
];

const FeedEvolucao = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="evolucao" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Sabedoria
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Feed de Evolução
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass glow-hover group overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-body font-semibold text-primary-foreground gradient-bg">
                  {post.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedEvolucao;
