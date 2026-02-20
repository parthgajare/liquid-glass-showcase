import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
import { Mail, Instagram, Youtube, Linkedin, ArrowUp, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

const socials = [
  { icon: Instagram, href: "#", label: "Instagram", color: "330 70% 60%" },
  { icon: Youtube, href: "#", label: "YouTube", color: "0 70% 55%" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "210 70% 55%" },
  { icon: Mail, href: "#", label: "Email", color: "160 50% 50%" },
];

const marqueeWords = ["DESIGN", "·", "CREATE", "·", "DEVELOP", "·", "BRAND", "·", "SHOOT", "·", "EDIT", "·"];

const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const glowX = useTransform(mouseX, (v) => v);
  const glowY = useTransform(mouseY, (v) => v);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <footer
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 px-6 lg:px-12 overflow-hidden"
    >
      {/* Mouse-following glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.04]"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, hsl(210 60% 60%), transparent 70%)",
        }}
      />

      {/* Infinite marquee */}
      <div className="relative mb-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex whitespace-nowrap"
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="flex shrink-0"
          >
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span
                key={i}
                className={`text-5xl md:text-7xl lg:text-8xl font-display font-extrabold mx-4 ${
                  word === "·" ? "text-muted-foreground/30" : "text-gradient"
                }`}
              >
                {word}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* CTA Glass Panel */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="glass-card p-10 md:p-14 mb-16 text-center relative group"
        >
          <div className="absolute inset-0 liquid-shine rounded-[inherit] pointer-events-none" />
          
          {/* Orbiting sparkle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-4 right-4 text-muted-foreground/30"
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm tracking-[0.3em] text-muted-foreground mb-6 uppercase"
            >
              Ready to collaborate?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="text-4xl md:text-6xl font-display font-extrabold text-foreground mb-8"
            >
              Let's Build<br />
              <span className="text-gradient">Together.</span>
            </motion.h2>
            <motion.a
              href="mailto:hello@sanskar.dev"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block glass-card px-8 py-4 font-display font-bold text-foreground text-lg glass-card-hover"
            >
              hello@sanskar.dev
            </motion.a>
          </div>
        </motion.div>

        {/* Social icons — magnetic hover with color reveal */}
        <div className="flex gap-6 justify-center mb-16">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              initial={{ opacity: 0, y: 40, rotate: -15 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 + i * 0.12,
                type: "spring",
                stiffness: 150,
                damping: 12,
              }}
              whileHover={{ scale: 1.25, y: -8, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onHoverStart={() => setHoveredSocial(i)}
              onHoverEnd={() => setHoveredSocial(null)}
              className="glass-card w-14 h-14 flex items-center justify-center glass-card-hover relative"
              style={{
                boxShadow: hoveredSocial === i
                  ? `0 0 30px hsl(${s.color} / 0.3), 0 0 60px hsl(${s.color} / 0.1)`
                  : undefined,
              }}
            >
              <s.icon
                className="w-5 h-5 transition-colors duration-300"
                style={{
                  color: hoveredSocial === i
                    ? `hsl(${s.color})`
                    : "hsl(0 0% 55%)",
                }}
              />
            </motion.a>
          ))}
        </div>

        {/* Bottom wave divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="h-px w-full mb-8 bg-gradient-to-r from-transparent via-border to-transparent origin-center"
        />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-between"
        >
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">
              © 2026 Sanskar D Bamane
            </p>
            <p className="text-[10px] text-muted-foreground/50">
              Designed & Developed with passion
            </p>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.15, y: -4, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="glass-card w-11 h-11 flex items-center justify-center glass-card-hover"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-muted-foreground" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
