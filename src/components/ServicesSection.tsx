import { useState } from "react";
import { motion, AnimatePresence, type Easing } from "framer-motion";
import { Palette, Globe, Megaphone, X, CheckCircle } from "lucide-react";
import serviceGraphic from "@/assets/service-graphic.jpg";
import serviceWebdev from "@/assets/service-webdev.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";

const ease: Easing = [0.25, 0.1, 0.25, 1];

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    tagline: "Visual storytelling that captivates.",
    image: serviceGraphic,
    description:
      "We create stunning visual identities that make brands unforgettable. From logos and brand kits to social media creatives and print materials — every pixel is crafted with purpose.",
    features: [
      "Logo & Brand Identity Design",
      "Social Media Graphics & Templates",
      "Business Cards & Stationery",
      "Packaging & Label Design",
      "UI/UX Mockups & Wireframes",
      "Banner & Poster Design",
    ],
    demos: [
      "Brand identity for 50+ businesses",
      "Social media kits for e-commerce brands",
      "Print-ready packaging for retail clients",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    tagline: "Websites that perform and convert.",
    image: serviceWebdev,
    description:
      "We build fast, responsive, and SEO-optimized websites that deliver results. Whether it's a landing page or a full-scale web application, we use cutting-edge technologies to bring your vision to life.",
    features: [
      "Custom Website Design & Development",
      "E-Commerce Solutions (Shopify, WooCommerce)",
      "React & Next.js Web Applications",
      "WordPress Development & Customization",
      "Progressive Web Apps (PWA)",
      "API Integration & Backend Development",
    ],
    demos: [
      "E-commerce platform with 10k+ monthly users",
      "SaaS dashboard for fintech startup",
      "Portfolio websites for creative agencies",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    tagline: "Growth strategies that deliver ROI.",
    image: serviceMarketing,
    description:
      "We craft data-driven digital marketing strategies that amplify your reach and boost conversions. From SEO to paid ads, we help businesses scale with measurable results.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing & Management",
      "Google Ads & Facebook Ads Campaigns",
      "Content Marketing & Copywriting",
      "Email Marketing Automation",
      "Analytics & Performance Reporting",
    ],
    demos: [
      "300% organic traffic growth for local businesses",
      "Social media campaigns reaching 1M+ impressions",
      "PPC campaigns with 5x ROAS for e-commerce",
    ],
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <>
      <section id="services" className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
              What We Do
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground mb-4">
              Our Services
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto">
              Premium digital services tailored to elevate your brand and accelerate growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, ease }}
                onClick={() => setActiveService(i)}
                className="group cursor-pointer relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-xl p-8 text-center transition-all duration-300 hover:bg-primary-foreground/10 hover:border-secondary/40 hover:shadow-[0_8px_40px_-12px_hsl(var(--orange)/0.3)]"
              >
                {/* Glass highlight */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-foreground/10 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/15 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/25 transition-colors">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-secondary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {service.tagline}
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={`https://wa.me/8801616151002?text=${encodeURIComponent(`Hi! I'm interested in your ${service.title} service.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-4 py-2 rounded-lg hover:bg-orange-hover transition-colors"
                    >
                      Place an Order
                    </a>
                    <div className="text-xs font-semibold text-secondary/80 uppercase tracking-wider group-hover:text-secondary transition-colors">
                      Learn More →
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen Popup */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-primary/80 backdrop-blur-md"
              onClick={() => setActiveService(null)}
            />

            {/* Modal */}
            <motion.div
              className="relative z-10 w-full max-w-4xl max-h-[90vh] mx-4 bg-background rounded-3xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease }}
            >
              {/* Close */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <X className="w-5 h-5 text-primary" />
              </button>

              <div className="overflow-y-auto max-h-[90vh]">
                {/* Hero image */}
                <div className="relative h-56 md:h-72 overflow-hidden">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-3">
                      {(() => {
                        const Icon = services[activeService].icon;
                        return <Icon className="w-6 h-6 text-secondary-foreground" />;
                      })()}
                    </div>
                    <h3 className="font-heading text-3xl font-black text-secondary">
                      {services[activeService].title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <p className="text-primary text-lg leading-relaxed mb-8">
                    {services[activeService].description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="font-heading text-lg font-bold text-secondary mb-4">
                        What We Offer
                      </h4>
                      <ul className="space-y-3">
                        {services[activeService].features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                            <span className="text-primary text-sm">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Demo work */}
                    <div>
                      <h4 className="font-heading text-lg font-bold text-secondary mb-4">
                        Demo Work Samples
                      </h4>
                      <div className="space-y-3">
                        {services[activeService].demos.map((d, i) => (
                          <div
                            key={i}
                            className="bg-muted rounded-xl p-4 border border-border"
                          >
                            <p className="text-primary text-sm font-medium">{d}</p>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => setActiveService(null)}
                        className="mt-6 w-full bg-secondary text-secondary-foreground font-heading font-bold py-3 rounded-xl hover:bg-orange-hover transition-colors"
                      >
                        Start a Project →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesSection;
