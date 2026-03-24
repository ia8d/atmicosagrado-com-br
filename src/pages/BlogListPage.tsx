import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { extractYouTubeId } from "@/lib/youtube";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const BlogListPage = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Sabedoria
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Artigos, reflexões e sabedoria para a tua jornada de evolução.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass rounded-2xl overflow-hidden animate-pulse">
                  <div className="aspect-[4/3] bg-muted" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-muted rounded w-1/4" />
                    <div className="h-6 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : !posts?.length ? (
            <p className="text-center text-muted-foreground font-body">
              Ainda não há artigos publicados.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => {
                const ytId = post.video_url ? extractYouTubeId(post.video_url) : null;
                const thumbnail = ytId
                  ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
                  : post.image_url;

                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="glass group block rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 h-full border border-border/50 hover:border-primary/30 shadow-lg shadow-background/50"
                    >
                      <div className="relative overflow-hidden aspect-[4/3]">
                        {thumbnail && (
                          <img
                            src={thumbnail}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />

                        {/* Category / Video badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          {post.category && (
                            <span className="px-3 py-1 rounded-full text-xs font-body font-semibold text-primary-foreground gradient-bg">
                              {post.category}
                            </span>
                          )}
                          {ytId && (
                            <span className="px-3 py-1 rounded-full text-xs font-body font-semibold text-primary-foreground bg-red-600 flex items-center gap-1">
                              <Play className="w-3 h-3" fill="currentColor" /> Vídeo
                            </span>
                          )}
                        </div>

                        {/* Play overlay for video posts */}
                        {ytId && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-6 space-y-3">
                        <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="text-muted-foreground font-body text-sm line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="flex items-center justify-between pt-2">
                          {post.published_at && (
                            <span className="flex items-center gap-1.5 text-muted-foreground text-xs font-body">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.published_at).toLocaleDateString("pt-BR", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          )}
                          <span className="flex items-center gap-1 text-primary text-xs font-body font-medium group-hover:gap-2 transition-all">
                            Ler <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogListPage;
