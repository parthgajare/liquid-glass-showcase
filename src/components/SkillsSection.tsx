import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const skills = [
  { title: "Content Strategy", description: "Content blueprints, Instagram strategy, trend research, calendars, campaign planning." },
  { title: "Video Production", description: "Short films, reels, product videos, automotive, fashion, fitness content." },
  { title: "Photography", description: "Automotive, fashion, product, real estate, corporates & events." },
  { title: "Video Editing & Post", description: "Cinematic edits, color grading, sound design, motion graphics." },
  { title: "Personal Branding", description: "Creator shoots, reels production, identity building." },
  { title: "Creative Direction", description: "Moodboards, shoot styling, concept & visual development." },
  { title: "Social Media Creatives", description: "Carousels, campaign posters, thumbnails, launch creatives." },
  { title: "Meta Ads", description: "Ad creatives, funnel strategy, retargeting visuals." },
  { title: "SEO", description: "Keyword research, on-page SEO, YouTube SEO." },
  { title: "Web Services", description: "Portfolio websites, landing pages, visual design." },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 lg:px-12 relative">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-foreground">
          SKILLS & SERVICES
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[2px] w-24 mx-auto mt-4 bg-gradient-to-r from-transparent via-muted-foreground to-transparent"
        />
      </motion.div>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, i) => (
          <GlassCard
            key={skill.title}
            title={skill.title}
            description={skill.description}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
