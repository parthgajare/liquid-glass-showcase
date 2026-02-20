import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  index: number;
}

const GlassCard = ({ title, description, index }: GlassCardProps) => {
  // Different animation variants per card for uniqueness
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
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      whileHover={{ scale: 1.03, y: -6 }}
      className="glass-card glass-card-hover p-6 min-h-[160px] flex flex-col justify-between relative group cursor-pointer"
    >
      {/* Liquid shine overlay */}
      <div className="absolute inset-0 liquid-shine rounded-[inherit] pointer-events-none" />

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(210 60% 60% / 0.06), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <h3 className="font-display font-bold text-foreground text-base mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default GlassCard;
