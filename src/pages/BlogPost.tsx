import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Share2, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { extractYouTubeId } from "@/lib/youtube";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ShareButtons = ({ title, url }: { title: string; url: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const shareWhatsApp = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;

  return (
    <div className="flex items-center gap-3 py-6 border-t border-b border-border">
      <Share2 className="w-4 h-4 text-muted-foreground" />
      <span className="text-sm text-muted-foreground font-body">Partilhar:</span>
      <a href={shareWhatsApp} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full text-xs font-body font-medium glass hover:text-primary transition-colors">
        WhatsApp
      </a>
      <a href={shareFacebook} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full text-xs font-body font-medium glass hover:text-primary transition-colors">
        Facebook
      </a>
      <a href={shareTwitter} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full text-xs font-body font-medium glass hover:text-primary transition-colors">
        Twitter
      </a>
      <button onClick={handleCopy} className="px-3 py-1.5 rounded-full text-xs font-body font-medium glass hover:text-primary transition-colors flex items-center gap-1">
        {copied ? <><Check className="w-3 h-3" /> Copiado</> : <><Copy className="w-3 h-3" /> Link</>}
      </button>
    </div>
  );
};

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

  const ytId = post.video_url ? extractYouTubeId(post.video_url) : null;
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

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
            {/* Video embed or cover image */}
            {ytId ? (
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${ytId}`}
                  title={post.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ) : post.image_url ? (
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
            ) : null}

            {/* Meta */}
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

            {/* Share */}
            <ShareButtons title={post.title} url={currentUrl} />

            {/* Content */}
            <div
              className="mt-10 prose prose-invert prose-lg max-w-none font-body
                prose-headings:font-display prose-headings:text-foreground
                prose-p:text-foreground/90 prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
                prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Bottom share */}
            <div className="mt-12">
              <ShareButtons title={post.title} url={currentUrl} />
            </div>
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
