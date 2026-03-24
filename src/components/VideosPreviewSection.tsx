import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FEATURED_VIDEOS = [
  {
    id: "_Qm5pYyi5YQ",
    title: "Título do seu vídeo 1",
  },
  {
    id: "hv1CihzODQA",
    title: "Título do seu vídeo 2",
  },
  {
    id: "o86tvT7Ds3s",
    title: "Título do seu vídeo 3",
  },
];

const VideosPreviewSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Conteúdo
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Destaques no YouTube
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {FEATURED_VIDEOS.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass overflow-hidden border border-border/50 shadow-lg shadow-background/50 rounded-2xl"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-sm font-semibold text-foreground line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
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
