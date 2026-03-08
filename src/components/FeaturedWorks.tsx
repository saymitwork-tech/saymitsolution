import { motion, useScroll, useTransform, type Easing } from "framer-motion";
import { useRef } from "react";
import workLogo from "@/assets/work-logo.jpg";
import workUiux from "@/assets/work-uiux.jpg";
import workMarketing from "@/assets/work-marketing.jpg";

const ease: Easing = [0.25, 0.1, 0.25, 1];

const works = [
  {
    image: workLogo,
    title: "Logo Design",
    category: "Branding",
    desc: "Crafted 50+ unique brand identities for startups and enterprises across industries.",
  },
  {
    image: workUiux,
    title: "UI/UX Design",
    category: "Product Design",
    desc: "Designed intuitive interfaces for fintech, e-commerce, and SaaS applications.",
  },
  {
    image: workMarketing,
    title: "Marketing Campaigns",
    category: "Digital Marketing",
    desc: "Launched high-conversion ad campaigns with 1M+ reach across social platforms.",
  },
];

const ParallaxCard = ({ work, index }: { work: typeof works[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6, ease }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={work.image}
          alt={`${work.title} — Saym IT Solution | Best IT services in Bangladesh`}
          className="w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </motion.div>
      {/* Overlay */}
      <div className="relative z-10 h-80 md:h-96 flex flex-col justify-end p-8 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent">
        <span className="text-secondary font-heading text-xs font-bold tracking-widest uppercase mb-2">
          {work.category}
        </span>
        <h3 className="font-heading text-2xl md:text-3xl font-black text-primary-foreground mb-2">
          {work.title}
        </h3>
        <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
          {work.desc}
        </p>
      </div>
    </motion.div>
  );
};

const FeaturedWorks = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
            Portfolio
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary mb-4">
            Featured Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A curated selection of projects that showcase our expertise and creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <ParallaxCard key={work.title} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
