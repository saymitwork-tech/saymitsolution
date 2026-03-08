import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

import gdImg1 from "@/assets/portfolio-gd1.jpg";
import gdImg2 from "@/assets/portfolio-gd2.jpg";
import gdImg3 from "@/assets/portfolio-gd3.jpg";
import dmImg1 from "@/assets/portfolio-dm1.jpg";
import dmImg2 from "@/assets/portfolio-dm2.jpg";
import dmImg3 from "@/assets/portfolio-dm3.jpg";
import wdImg1 from "@/assets/portfolio-wd1.jpg";
import wdImg2 from "@/assets/portfolio-wd2.jpg";
import wdImg3 from "@/assets/portfolio-wd3.jpg";

const ease = [0.25, 0.1, 0.25, 1] as const;

const gdImages = [gdImg1, gdImg2, gdImg3];
const dmImages = [dmImg1, dmImg2, dmImg3];
const wdImages = [wdImg1, wdImg2, wdImg3];

type Category = "All" | "Logo" | "Web" | "Branding";

interface Project {
  title: string;
  desc: string;
  category: Exclude<Category, "All">;
  image: string;
}

const projects: Project[] = [
  // Logo
  { title: "Luxe Noir Brand Identity", desc: "Complete luxury brand identity system with logo, typography, and color palette.", category: "Logo", image: gdImages[0] },
  { title: "Prestige Cosmetics Logo Suite", desc: "Elegant logomark and wordmark design for an international cosmetics brand.", category: "Logo", image: gdImages[1] },
  { title: "Stellar Finance Visual Identity", desc: "Modern fintech branding with geometric logo design and brand guidelines.", category: "Logo", image: gdImages[2] },
  { title: "Elite Sports Team Logo", desc: "Dynamic sports team logo with full visual identity including jerseys and banners.", category: "Logo", image: gdImages[0] },
  { title: "Zen Wellness Logomark", desc: "Holistic wellness brand logo with calming aesthetics and custom iconography.", category: "Logo", image: gdImages[1] },
  { title: "TechVault App Icon Suite", desc: "Complete app icon collection and logo kit for a cybersecurity software company.", category: "Logo", image: gdImages[2] },

  // Web
  { title: "LuxeCart E-Commerce Platform", desc: "Full-stack e-commerce platform with 10,000+ SKUs and mobile-first design.", category: "Web", image: wdImages[0] },
  { title: "FinTrack Admin Dashboard", desc: "Enterprise-grade admin dashboard with real-time analytics and data visualization.", category: "Web", image: wdImages[1] },
  { title: "MediBook Appointment System", desc: "Healthcare appointment booking system with doctor profiles and telemedicine.", category: "Web", image: wdImages[2] },
  { title: "PropertyHub Real Estate Portal", desc: "Advanced real estate listing platform with 3D virtual tours and map integration.", category: "Web", image: wdImages[0] },
  { title: "EduSphere Learning Management", desc: "Full-featured LMS with video streaming, progress tracking, and certificates.", category: "Web", image: wdImages[1] },
  { title: "CryptoVault Trading Interface", desc: "Real-time cryptocurrency trading dashboard with WebSocket data feeds.", category: "Web", image: wdImages[2] },

  // Branding
  { title: "Royal Heritage Packaging", desc: "Premium packaging design with gold foil embossing and minimalist aesthetics.", category: "Branding", image: dmImages[0] },
  { title: "Artisan Coffee Brand Kit", desc: "Rustic-luxury brand identity for an artisan coffee chain including merch.", category: "Branding", image: dmImages[1] },
  { title: "Velvet Skincare Social Campaign", desc: "Series of 30+ premium social media creatives for a luxury skincare brand.", category: "Branding", image: dmImages[2] },
  { title: "Diamond Jewellery Catalogue", desc: "High-end product catalogue design with lifestyle photography integration.", category: "Branding", image: dmImages[0] },
  { title: "Fusion Restaurant Menu Design", desc: "Luxurious menu design with custom illustrations for fine-dining fusion restaurant.", category: "Branding", image: dmImages[1] },
  { title: "Nova Music Festival Branding", desc: "Vibrant festival branding including stage backdrops and digital promotional assets.", category: "Branding", image: dmImages[2] },
];

const categories: Category[] = ["All", "Logo", "Web", "Branding"];
const WHATSAPP_BASE = "https://wa.me/8801616151002?text=";

const FeaturedWorks = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="portfolio" className="py-[100px] bg-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
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
          <h2 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground mb-4">
            Featured Works
          </h2>
          <p className="text-primary-foreground/50 text-lg max-w-xl mx-auto">
            A curated showcase of premium projects across Logo Design, Web Development & Branding.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setShowAll(false); }}
              className={`px-6 py-2.5 rounded-full font-heading text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-secondary text-secondary-foreground shadow-lg shadow-[hsl(var(--orange)/0.3)]"
                  : "glass-dark text-primary-foreground/70 hover:text-secondary hover:border-secondary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
                className="group relative rounded-2xl overflow-hidden glass-dark border border-primary-foreground/10 hover:border-secondary/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--orange)/0.25)] transition-all duration-500"
              >
                {/* Image with zoom */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — Saym IT Solution`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.15]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))] via-[hsl(var(--navy)/0.3)] to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-[10px] font-heading font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/50 text-sm leading-relaxed mb-5 line-clamp-2">
                    {project.desc}
                  </p>

                  <a
                    href={`${WHATSAPP_BASE}${encodeURIComponent(`Hi! I'm interested in a project like "${project.title}" (${project.category}). Let's discuss!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground text-xs font-heading font-bold px-5 py-2.5 rounded-xl hover:bg-[hsl(var(--orange-hover))] transition-colors btn-hover-lift"
                  >
                    Start Similar Project <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Less */}
        {filtered.length > 6 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-3.5 rounded-full border-2 border-secondary text-secondary font-heading font-bold text-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            >
              {showAll ? "Show Less" : `View All ${filtered.length} Projects`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedWorks;
