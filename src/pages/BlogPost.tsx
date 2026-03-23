import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Instagram, Clock, Tag, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import blogReiki from "@/assets/blog-reiki.jpg";
import blogFeminino from "@/assets/blog-feminino.jpg";
import blogRadiestesia from "@/assets/blog-radiestesia.jpg";
import { useState } from "react";

const allPosts = [
  {
    id: "reiki-principios",
    image: blogReiki,
    tag: "Reiki",
    title: "Os 5 Princípios do Reiki para Transformar o Seu Dia",
    date: "20 Mar 2026",
    readTime: "5 min",
    content: [
      "O Reiki é uma prática milenar de cura energética que nos ensina a canalizar a energia universal para promover o equilíbrio do corpo, mente e espírito. Os seus cinco princípios são pilares que nos guiam no caminho da serenidade.",
      "Só por hoje, não se preocupe. A preocupação é uma energia que bloqueia o fluxo natural da vida. Quando nos libertamos dela, abrimos espaço para que o universo trabalhe a nosso favor.",
      "Só por hoje, não se irrite. A raiva é uma emoção que consome a nossa energia vital. Ao escolher a paz, alimentamos a nossa essência mais profunda e criamos harmonia ao nosso redor.",
      "Só por hoje, seja grato. A gratidão é a frequência mais elevada que podemos emitir. Quando agradecemos, atraímos mais razões para agradecer.",
      "Só por hoje, trabalhe honestamente. O trabalho feito com integridade e propósito torna-se uma forma de meditação ativa, conectando-nos com o nosso dharma.",
      "Só por hoje, seja gentil com todos os seres. A compaixão é a essência do Reiki. Quando tratamos todos os seres com amor e respeito, elevamos a vibração do planeta.",
    ],
  },
  {
    id: "sagrado-feminino-ciclos",
    image: blogFeminino,
    tag: "Sagrado Feminino",
    title: "Honrando os Ciclos: A Sabedoria da Lua Interior",
    date: "15 Mar 2026",
    readTime: "7 min",
    content: [
      "O Sagrado Feminino é um convite para reconectar-se com a sabedoria ancestral que habita em cada mulher. Os ciclos menstruais, assim como as fases da lua, carregam ensinamentos profundos sobre criação, maturação, libertação e recolhimento.",
      "Na fase da Lua Nova, somos convidadas ao silêncio e à introspecção. É o momento de plantar sementes de intenção, de olhar para dentro e honrar o vazio fértil que precede toda a criação.",
      "A Lua Crescente traz a energia da ação e do crescimento. É quando as ideias ganham forma e começamos a manifestar no mundo exterior aquilo que germinou no nosso interior.",
      "A Lua Cheia ilumina tudo. É o momento da plenitude, da celebração e da expressão máxima. É quando nos sentimos mais conectadas, mais intuitivas, mais poderosas.",
      "A Lua Minguante pede libertação. É o tempo de soltar, de deixar ir aquilo que já não nos serve. Honrar este ciclo é um ato de coragem e amor-próprio.",
    ],
  },
  {
    id: "radiestesia-pendulo",
    image: blogRadiestesia,
    tag: "Radiestesia",
    title: "Como o Pêndulo Pode Revelar Bloqueios Energéticos",
    date: "10 Mar 2026",
    readTime: "6 min",
    content: [
      "A Radiestesia é a ciência das vibrações. Através de instrumentos como o pêndulo e a mesa radiônica, conseguimos identificar e corrigir desequilíbrios energéticos que afetam a nossa saúde, emoções e até o nosso ambiente.",
      "O pêndulo funciona como uma extensão da nossa intuição. Ele amplifica as micro-movimentações do nosso corpo, que são respostas do sistema nervoso às frequências que nos rodeiam.",
      "Durante uma sessão de radiestesia, o terapeuta pode identificar bloqueios nos chakras, desequilíbrios nos meridianos e até influências ambientais que estão a afetar o seu bem-estar.",
      "A mesa radiônica é uma ferramenta avançada que permite trabalhar com múltiplas frequências em simultâneo, acelerando o processo de cura e harmonização energética.",
      "Os resultados da radiestesia são frequentemente surpreendentes. Muitas pessoas relatam uma sensação imediata de leveza, clareza mental e alívio emocional após as sessões.",
    ],
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const post = allPosts.find((p) => p.id === id);
  const related = allPosts.filter((p) => p.id !== id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground font-body mb-4">Post não encontrado</p>
          <Link to="/" className="btn-mystic inline-block text-sm">Voltar ao Portal</Link>
        </div>
      </div>
    );
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Feed
          </Link>

          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <span className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-xs font-body font-semibold text-primary-foreground gradient-bg">
                {post.tag}
              </span>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 text-muted-foreground text-sm font-body mb-6">
              <span className="flex items-center gap-1"><Tag className="w-3 h-3" /> {post.tag}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
              <span>{post.date}</span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">{post.title}</h1>

            {/* Content */}
            <div className="space-y-6 mb-12">
              {post.content.map((p, i) => (
                <p key={i} className="text-foreground/90 font-body leading-relaxed text-base">{p}</p>
              ))}
            </div>

            {/* Instagram Embed Placeholder */}
            <div className="glass p-8 flex flex-col items-center gap-3 mb-12">
              <Instagram className="w-8 h-8 text-muted-foreground" />
              <p className="text-muted-foreground font-body text-sm">Vídeo/Post do Instagram relacionado</p>
              <span className="text-xs text-muted-foreground/60 font-body">@portal.atmico</span>
            </div>

            {/* Newsletter */}
            <div className="glass p-8 mb-16 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Newsletter da Alma</h3>
              <p className="text-muted-foreground font-body text-sm mb-6">Receba mensagens de cura e sabedoria diretamente no seu e-mail.</p>
              {subscribed ? (
                <p className="text-primary font-body font-semibold">✨ Bem-vinda à jornada! Verifique o seu e-mail.</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="flex-1 bg-secondary/30 border border-border rounded-full px-5 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <button type="submit" className="btn-mystic px-6 py-3 flex items-center gap-2 text-sm">
                    <Send className="w-4 h-4" /> Inscrever
                  </button>
                </form>
              )}
            </div>
          </motion.article>

          {/* Related Posts */}
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Posts Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.id} to={`/blog/${r.id}`} className="glass glow-hover group overflow-hidden transition-all duration-500 hover:-translate-y-1">
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-body font-semibold text-primary-foreground gradient-bg">{r.tag}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
