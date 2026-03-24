import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { extractYouTubeId } from "@/lib/youtube";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const VideosPreviewSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const { data: videos } = useQuery({
    queryKey: ["videos-preview"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .not("video_url", "is", null)
        .order("published_at", { ascending: false })
        .limit(4);
      if (error) throw error;
      return data;
    },
  });

  if (!videos?.length) return null;

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Conteúdo
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Últimos Vídeos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, i) => {
            const ytId = video.video_url ? extractYouTubeId(video.video_url) : null;
            const thumbnail = ytId
              ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
              : video.image_url;

            return (
              <motion.a
                key={video.id}
                href={video.video_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="glass group overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-primary/30 shadow-lg shadow-background/50"
              >
                <div className="relative overflow-hidden aspect-video">
                  {thumbnail && (
                    <img
                      src={thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 text-primary-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  {video.excerpt && (
                    <p className="text-muted-foreground text-sm font-body leading-relaxed line-clamp-2 mt-2">
                      {video.excerpt}
                    </p>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@atmico_sagrado"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-mystic inline-flex items-center gap-2 text-sm px-8 py-3"
          >
            Ver Canal no YouTube <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideosPreviewSection;
