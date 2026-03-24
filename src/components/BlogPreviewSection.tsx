import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Play, ArrowRight, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { extractYouTubeId } from "@/lib/youtube";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BlogPreviewSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const { data: posts } = useQuery({
    queryKey: ["posts-preview"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("published_at", { ascending: false })
        .limit(3);
      if (error) throw error;
      return data;
    },
  });

  if (!posts?.length) return null;

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
            Blog
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => {
            const ytId = post.video_url ? extractYouTubeId(post.video_url) : null;
            const thumbnail = ytId
              ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
              : post.image_url;

            return (
              <Link to={`/blog/${post.slug}`} key={post.id}>
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="glass glow-hover group overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 h-full"
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

                    {ytId && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-muted-foreground text-sm font-body leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </motion.article>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn-mystic inline-flex items-center gap-2 text-sm px-8 py-3">
            Ver todos os artigos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
