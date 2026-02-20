import { motion } from "framer-motion";
import { Mail, Instagram, Youtube, Linkedin, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "About Me", href: "#" },
  { label: "Work", href: "#" },
  { label: "Fashion", href: "#" },
  { label: "Automotive", href: "#" },
  { label: "Contact", href: "#" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative py-20 px-6 lg:px-12">
      {/* Top divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        className="h-px w-full max-w-5xl mx-auto mb-16 bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div className="max-w-5xl mx-auto">
        {/* Brand + CTA */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4">
              Let's Create<br />
              <span className="text-gradient">Something Amazing.</span>
            </h2>
            <p className="text-muted-foreground max-w-sm">
              Ready to bring your vision to life? Let's collaborate and build something extraordinary together.
            </p>
          </motion.div>

          {/* Glass contact card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card glass-card-hover p-8 flex flex-col justify-center"
          >
            <div className="absolute inset-0 liquid-shine rounded-[inherit] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-sm text-muted-foreground mb-2 font-medium">GET IN TOUCH</p>
              <a
                href="mailto:hello@sanskar.dev"
                className="text-xl font-display font-bold text-foreground hover:text-muted-foreground transition-colors"
              >
                hello@sanskar.dev
              </a>
            </div>
          </motion.div>
        </div>

        {/* Navigation links */}
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-6 mb-12 justify-center"
        >
          {footerLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-4 justify-center mb-12"
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.15, y: -3 }}
              className="glass-card w-11 h-11 flex items-center justify-center glass-card-hover"
            >
              <s.icon className="w-4 h-4 text-muted-foreground" />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-between text-xs text-muted-foreground"
        >
          <span>© 2026 Sanskar D Bamane. All rights reserved.</span>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card w-9 h-9 flex items-center justify-center glass-card-hover"
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
