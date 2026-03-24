import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
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
                  <div className="aspect-[16/10] bg-muted" />
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
              {posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="glass glow-hover group block rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  >
                    {post.image_url && (
                      <div className="relative overflow-hidden aspect-[16/10]">
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                        {post.category && (
                          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-body font-semibold text-primary-foreground gradient-bg">
                            {post.category}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="p-6 space-y-3">
                      <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-muted-foreground font-body text-sm line-clamp-3">
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
              ))}
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
