import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface GlassCardProps {
  title: string;
  description: string;
  subtitle?: string;
  bullets: string[];
  index: number;
}

const GlassCard = ({ title, description, subtitle, bullets, index }: GlassCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = [
    { initial: { opacity: 0, y: 80, rotateX: 15 }, animate: { opacity: 1, y: 0, rotateX: 0 } },
    { initial: { opacity: 0, scale: 0.7, rotate: -5 }, animate: { opacity: 1, scale: 1, rotate: 0 } },
    { initial: { opacity: 0, x: 100, skewY: 5 }, animate: { opacity: 1, x: 0, skewY: 0 } },
    { initial: { opacity: 0, y: -60, scale: 1.1 }, animate: { opacity: 1, y: 0, scale: 1 } },
    { initial: { opacity: 0, x: -80, rotateY: 20 }, animate: { opacity: 1, x: 0, rotateY: 0 } },
    { initial: { opacity: 0, scale: 0.5, rotate: 10 }, animate: { opacity: 1, scale: 1, rotate: 0 } },
    { initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } },
    { initial: { opacity: 0, x: 60, y: 60 }, animate: { opacity: 1, x: 0, y: 0 } },
    { initial: { opacity: 0, scale: 0.8, rotateZ: -8 }, animate: { opacity: 1, scale: 1, rotateZ: 0 } },
    { initial: { opacity: 0, y: 50, x: -50 }, animate: { opacity: 1, y: 0, x: 0 } },
  ];

  const v = variants[index % variants.length];

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.23, 1, 0.32, 1],
      }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="glass-card glass-card-hover p-6 flex flex-col relative group cursor-pointer"
    >
      <div className="absolute inset-0 liquid-shine rounded-[inherit] pointer-events-none" />

      <motion.div
        className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(210 60% 60% / 0.06), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display font-bold text-foreground text-base">
            {title}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 mt-0.5"
          >
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-1">
          {description}
        </p>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              {subtitle && (
                <p className="text-xs text-muted-foreground/70 font-medium mt-3 mb-2 uppercase tracking-wider">
                  {subtitle}
                </p>
              )}
              <ul className="space-y-1.5">
                {bullets.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default GlassCard;
