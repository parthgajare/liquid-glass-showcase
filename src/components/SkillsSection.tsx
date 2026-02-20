import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const skills = [
  {
    title: "Content Strategy",
    description: "I help brands and individuals plan content that is visually strong and strategically built for growth.",
    subtitle: "What I do:",
    bullets: ["Content ideation & planning", "Instagram & short-form strategy", "Trend research", "Content calendars", "Campaign planning"],
  },
  {
    title: "Video Production",
    description: "High-quality video production tailored for digital platforms and brand storytelling.",
    subtitle: "Projects include:",
    bullets: ["Brand films", "Instagram reels", "Product videos", "Automotive films", "Fashion & lifestyle shoots", "Fitness content"],
  },
  {
    title: "Photography",
    description: "Professional photography built for marketing and brand presence.",
    subtitle: "Specialties:",
    bullets: ["Automotive", "Fashion & streetwear", "Product photography", "Real estate", "Corporate shoots", "Events"],
  },
  {
    title: "Video Editing & Post-Production",
    description: "Clean, cinematic edits designed to elevate storytelling and retention.",
    subtitle: "Services:",
    bullets: ["Cinematic editing", "Color grading", "Sound design", "Motion graphics", "Social media formatting", "Before/after edits"],
  },
  {
    title: "Personal Branding Content",
    description: "Helping creators and professionals build authority through visuals.",
    subtitle: "Includes:",
    bullets: ["Content shoot planning", "Reels production", "Visual identity development", "Creator-focused formats"],
  },
  {
    title: "Creative Direction",
    description: "Ensuring every shoot aligns with a strong visual identity.",
    subtitle: "Covers:",
    bullets: ["Moodboards & references", "Shoot styling guidance", "Location planning", "Shot breakdowns", "Concept development"],
  },
  {
    title: "Social Media Creatives & Design",
    description: "Scroll-stopping creatives optimized for engagement.",
    subtitle: "Includes:",
    bullets: ["Carousel creatives", "Campaign posters", "Launch creatives", "Story designs", "Thumbnails"],
  },
  {
    title: "Meta Ads",
    description: "I create and optimize ad content designed for performance and conversions.",
    subtitle: "Services:",
    bullets: ["Ad creatives (video + static)", "Funnel-based ad content", "Retargeting creatives", "Campaign visual strategy", "Performance-focused edits"],
  },
  {
    title: "SEO",
    description: "Helping brands improve visibility and discoverability online.",
    subtitle: "Includes:",
    bullets: ["Basic website SEO setup", "Keyword research", "On-page SEO optimization", "Content optimization", "YouTube SEO for videos"],
  },
  {
    title: "Web Services",
    description: "Building clean, functional digital spaces that showcase brands effectively.",
    subtitle: "Services:",
    bullets: ["Portfolio websites", "Business websites", "Landing pages", "Visual website design", "Content integration (photo/video)"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 lg:px-12 relative">
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

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, i) => (
          <GlassCard
            key={skill.title}
            title={skill.title}
            description={skill.description}
            subtitle={skill.subtitle}
            bullets={skill.bullets}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
