import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug!)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-24">
          <div className="container mx-auto px-6 max-w-3xl animate-pulse space-y-6">
            <div className="h-4 bg-muted rounded w-32" />
            <div className="aspect-video bg-muted rounded-2xl" />
            <div className="h-10 bg-muted rounded w-3/4" />
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
              <div className="h-4 bg-muted rounded w-4/6" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground font-body mb-4">Artigo não encontrado</p>
          <Link to="/blog" className="btn-mystic inline-block text-sm">
            Voltar ao Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {post.image_url && (
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {post.category && (
                  <span className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-xs font-body font-semibold text-primary-foreground gradient-bg">
                    {post.category}
                  </span>
                )}
              </div>
            )}

            <div className="flex items-center gap-4 text-muted-foreground text-sm font-body mb-6">
              {post.category && <span>{post.category}</span>}
              {post.published_at && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.published_at).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              {post.title}
            </h1>

            <div
              className="prose prose-invert prose-lg max-w-none font-body
                prose-headings:font-display prose-headings:text-foreground
                prose-p:text-foreground/90 prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>

          <div className="mt-16 text-center">
            <Link to="/blog" className="btn-mystic inline-block text-sm px-8 py-3">
              Ver mais artigos
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
