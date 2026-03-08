import { useState } from "react";
import { motion, AnimatePresence, type Easing } from "framer-motion";
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

const ease: Easing = [0.25, 0.1, 0.25, 1];

const gdImages = [gdImg1, gdImg2, gdImg3];
const dmImages = [dmImg1, dmImg2, dmImg3];
const wdImages = [wdImg1, wdImg2, wdImg3];

type Category = "All" | "Graphic Design" | "Digital Marketing" | "Web Development";

interface Project {
  title: string;
  desc: string;
  category: Category;
  image: string;
}

const projects: Project[] = [
  // ─── Graphic Design (15) ───
  { title: "Luxe Noir Brand Identity", desc: "Complete luxury brand identity system with logo, typography, and color palette for a premium fashion label.", category: "Graphic Design", image: gdImages[0] },
  { title: "Prestige Cosmetics Logo Suite", desc: "Elegant logomark and wordmark design for an international cosmetics brand launching in South Asia.", category: "Graphic Design", image: gdImages[1] },
  { title: "Royal Heritage Packaging", desc: "Premium packaging design for a heritage tea brand featuring gold foil embossing and minimalist aesthetics.", category: "Graphic Design", image: gdImages[2] },
  { title: "Stellar Finance Visual Identity", desc: "Modern fintech branding with geometric logo design and comprehensive brand guidelines.", category: "Graphic Design", image: gdImages[0] },
  { title: "Artisan Coffee Brand Kit", desc: "Rustic-luxury brand identity for an artisan coffee chain including merchandise and storefront signage.", category: "Graphic Design", image: gdImages[1] },
  { title: "Velvet Skincare Social Posters", desc: "Series of 30+ premium social media creatives for a luxury skincare brand's Instagram campaign.", category: "Graphic Design", image: gdImages[2] },
  { title: "Elite Sports Team Branding", desc: "Dynamic sports team logo and full visual identity including jerseys, banners, and promotional materials.", category: "Graphic Design", image: gdImages[0] },
  { title: "Diamond Jewellery Catalogue", desc: "High-end product catalogue design with lifestyle photography integration for a premium jewellery brand.", category: "Graphic Design", image: gdImages[1] },
  { title: "Metro Real Estate Collateral", desc: "Corporate stationery suite and marketing collateral for a luxury real estate development company.", category: "Graphic Design", image: gdImages[2] },
  { title: "Zen Wellness Brand System", desc: "Holistic wellness brand identity with calming aesthetics, custom iconography, and packaging design.", category: "Graphic Design", image: gdImages[0] },
  { title: "Fusion Restaurant Menu Design", desc: "Luxurious menu design with custom illustrations for a fine-dining fusion restaurant.", category: "Graphic Design", image: gdImages[1] },
  { title: "TechVault App Icon Suite", desc: "Complete app icon collection and UI asset kit for a cybersecurity software company.", category: "Graphic Design", image: gdImages[2] },
  { title: "Opulent Wedding Stationery", desc: "Bespoke wedding invitation suite with custom calligraphy and gold foil details.", category: "Graphic Design", image: gdImages[0] },
  { title: "Horizon Travel Poster Series", desc: "Vintage-inspired travel poster collection for a luxury tour operator featuring 12 destinations.", category: "Graphic Design", image: gdImages[1] },
  { title: "Nova Music Festival Branding", desc: "Vibrant festival branding including stage backdrops, wristbands, and digital promotional assets.", category: "Graphic Design", image: gdImages[2] },

  // ─── Digital Marketing (15) ───
  { title: "GlowUp Skincare Facebook Ads", desc: "High-conversion Facebook ad campaign achieving 8.5x ROAS for a premium skincare brand launch.", category: "Digital Marketing", image: dmImages[0] },
  { title: "TechNova IT Lead Generation", desc: "B2B lead generation strategy for an IT solutions company resulting in 450+ qualified leads monthly.", category: "Digital Marketing", image: dmImages[1] },
  { title: "PureGlow SEO Domination", desc: "SEO campaign that achieved #1 Google ranking for 25+ competitive skincare keywords in 4 months.", category: "Digital Marketing", image: dmImages[2] },
  { title: "CloudSync SaaS Growth Strategy", desc: "Full-funnel digital marketing strategy driving 300% MRR growth for a cloud-based SaaS platform.", category: "Digital Marketing", image: dmImages[0] },
  { title: "Elegance Fashion Instagram Ads", desc: "Instagram shopping campaign with carousel ads generating ৳15M+ revenue in the first quarter.", category: "Digital Marketing", image: dmImages[1] },
  { title: "MediCare Clinic Google Ads", desc: "Google Ads campaign for a healthcare clinic achieving 12x return with optimized local targeting.", category: "Digital Marketing", image: dmImages[2] },
  { title: "FreshBite Food Delivery SEO", desc: "Local SEO and content marketing strategy that tripled organic traffic for a food delivery startup.", category: "Digital Marketing", image: dmImages[0] },
  { title: "LuxeHome Real Estate Funnel", desc: "Complete marketing funnel with landing pages and retargeting ads for luxury property listings.", category: "Digital Marketing", image: dmImages[1] },
  { title: "EduPro Online Course Launch", desc: "Multi-platform launch campaign for an ed-tech company resulting in 5,000+ enrollments in 2 weeks.", category: "Digital Marketing", image: dmImages[2] },
  { title: "AutoElite Car Dealership Ads", desc: "Facebook and Google Ads strategy for a premium car dealership with 650% increase in test drive bookings.", category: "Digital Marketing", image: dmImages[0] },
  { title: "GreenLeaf Organic Brand Awareness", desc: "Brand awareness campaign across social platforms reaching 2.5M+ impressions for an organic food brand.", category: "Digital Marketing", image: dmImages[1] },
  { title: "FinanceGuru Content Marketing", desc: "SEO-driven blog strategy and email marketing automation for a financial advisory firm.", category: "Digital Marketing", image: dmImages[2] },
  { title: "StyleVault E-Commerce PPC", desc: "Pay-per-click advertising campaign with dynamic product ads achieving 6.2x ROAS for fashion e-commerce.", category: "Digital Marketing", image: dmImages[0] },
  { title: "WellnessFirst Email Automation", desc: "Automated email marketing sequences with 45% open rate and 12% conversion for a wellness brand.", category: "Digital Marketing", image: dmImages[1] },
  { title: "ByteForce IT Social Strategy", desc: "LinkedIn and Twitter marketing strategy for an IT company resulting in 200+ enterprise inquiries.", category: "Digital Marketing", image: dmImages[2] },

  // ─── Web Development (15) ───
  { title: "LuxeCart E-Commerce Platform", desc: "Full-stack e-commerce platform with 10,000+ SKUs, real-time inventory, and mobile-first responsive design.", category: "Web Development", image: wdImages[0] },
  { title: "FinTrack Admin Dashboard", desc: "Enterprise-grade admin dashboard with real-time analytics, role-based access, and data visualization.", category: "Web Development", image: wdImages[1] },
  { title: "MediBook Appointment System", desc: "Healthcare appointment booking system with doctor profiles, patient portal, and telemedicine integration.", category: "Web Development", image: wdImages[2] },
  { title: "PropertyHub Real Estate Portal", desc: "Advanced real estate listing platform with 3D virtual tours, map integration, and mortgage calculator.", category: "Web Development", image: wdImages[0] },
  { title: "EduSphere Learning Management", desc: "Full-featured LMS with video streaming, progress tracking, certificates, and payment gateway integration.", category: "Web Development", image: wdImages[1] },
  { title: "FoodFleet Delivery App", desc: "Restaurant delivery web app with real-time order tracking, driver management, and automated dispatch.", category: "Web Development", image: wdImages[2] },
  { title: "TravelMate Booking Engine", desc: "Travel booking platform with hotel, flight, and tour package integration plus multi-currency support.", category: "Web Development", image: wdImages[0] },
  { title: "HRCore Employee Portal", desc: "Human resources management system with payroll processing, leave management, and performance reviews.", category: "Web Development", image: wdImages[1] },
  { title: "CryptoVault Trading Interface", desc: "Real-time cryptocurrency trading dashboard with WebSocket data feeds and portfolio management.", category: "Web Development", image: wdImages[2] },
  { title: "EventPro Ticketing Platform", desc: "Event management and ticketing system with seat selection, QR code entry, and analytics dashboard.", category: "Web Development", image: wdImages[0] },
  { title: "AutoServ Workshop Manager", desc: "Automotive service management system with appointment scheduling, inventory tracking, and invoicing.", category: "Web Development", image: wdImages[1] },
  { title: "NewsForge Digital Magazine", desc: "Modern digital news platform with CMS, subscription management, and AMP-optimized article pages.", category: "Web Development", image: wdImages[2] },
  { title: "FitLife Fitness Tracker", desc: "Progressive web app for fitness tracking with workout plans, nutrition logging, and progress charts.", category: "Web Development", image: wdImages[0] },
  { title: "ShopLocal Marketplace", desc: "Multi-vendor marketplace connecting local artisans with buyers, featuring reviews and secure payments.", category: "Web Development", image: wdImages[1] },
  { title: "CloudDesk Project Manager", desc: "Project management tool with Kanban boards, Gantt charts, team collaboration, and time tracking.", category: "Web Development", image: wdImages[2] },
];

const categories: Category[] = ["All", "Graphic Design", "Digital Marketing", "Web Development"];

const WHATSAPP_BASE = "https://wa.me/8801616151002?text=";

const FeaturedWorks = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="portfolio" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
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
            45+ premium projects across Graphic Design, Digital Marketing & Web Development.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setShowAll(false); }}
              className={`px-5 py-2.5 rounded-full font-heading text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/30"
                  : "bg-primary/10 text-primary hover:bg-primary/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease }}
                className="group relative rounded-2xl overflow-hidden bg-primary shadow-lg hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — Saym IT Solution | Best IT services in Bangladesh`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-[10px] font-heading font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.desc}
                  </p>

                  <a
                    href={`${WHATSAPP_BASE}${encodeURIComponent(`Hi! I'm interested in a project like "${project.title}" (${project.category}). Let's discuss!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground text-xs font-heading font-bold px-4 py-2 rounded-lg hover:bg-orange-hover transition-colors"
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
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full border-2 border-secondary text-secondary font-heading font-bold text-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            >
              {showAll ? "Show Less" : `View All ${filtered.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedWorks;
