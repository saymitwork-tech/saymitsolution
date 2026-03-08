import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Globe, Megaphone, X, CheckCircle } from "lucide-react";
import serviceGraphic from "@/assets/service-graphic.jpg";
import serviceWebdev from "@/assets/service-webdev.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";

const ease = [0.25, 0.1, 0.25, 1] as const;

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
  },
];

const ServiceCard = ({
  service,
  index,
  onLearnMore,
}: {
  service: (typeof services)[0];
  index: number;
  onLearnMore: () => void;
}) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Glass card */}
      <div className="relative glass-dark rounded-3xl p-8 md:p-10 h-full flex flex-col items-center text-center border border-primary-foreground/10 hover:border-secondary/40 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_hsl(var(--orange)/0.3)]">
        {/* Gradient highlight */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-foreground/8 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Icon */}
        <div className="relative z-10 w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-500">
          <Icon className="w-10 h-10 text-secondary" />
        </div>

        {/* Title */}
        <h3 className="relative z-10 font-heading text-2xl font-bold text-secondary mb-3">
          {service.title}
        </h3>

        {/* Tagline */}
        <p className="relative z-10 text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-[280px]">
          {service.tagline}
        </p>

        {/* Divider */}
        <div className="relative z-10 w-12 h-0.5 bg-secondary/30 rounded-full mb-6 group-hover:w-20 transition-all duration-500" />

        {/* Quick features preview */}
        <ul className="relative z-10 space-y-2 mb-8 text-left w-full">
          {service.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-primary-foreground/60 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-secondary/70 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="relative z-10 mt-auto flex flex-col gap-3 w-full">
          {/* Order button */}
          <a
            href={`https://wa.me/8801616151002?text=${encodeURIComponent(`Hi! I'm interested in your ${service.title} service.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full bg-secondary text-secondary-foreground text-sm font-bold py-3 rounded-xl hover:bg-[hsl(var(--orange-hover))] transition-colors text-center btn-hover-lift"
          >
            Place an Order
          </a>

          {/* Learn more */}
          <button
            onClick={onLearnMore}
            className="w-full border border-primary-foreground/20 text-primary-foreground/80 text-sm font-semibold py-3 rounded-xl hover:border-secondary hover:text-secondary transition-all duration-300"
          >
            Learn More →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceModal = ({
  service,
  onClose,
}: {
  service: (typeof services)[0];
  onClose: () => void;
}) => {
  const Icon = service.icon;
  return (
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
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] mx-4 bg-background rounded-3xl overflow-hidden shadow-2xl"
        initial={{ scale: 0.92, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 30 }}
        transition={{ duration: 0.35, ease }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Hero image */}
          <div className="relative h-56 md:h-64 overflow-hidden">
            <img
              src={service.image}
              alt={`${service.title} — Saym IT Solution`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-6 left-8">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-3">
                <Icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-3xl font-black text-secondary">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              {service.description}
            </p>

            <h4 className="font-heading text-lg font-bold text-secondary mb-5">
              What We Offer
            </h4>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {service.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 bg-muted rounded-xl p-3 border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/8801616151002?text=${encodeURIComponent(`Hi! I want to order your ${service.title} service.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-secondary text-secondary-foreground font-heading font-bold text-center py-4 rounded-xl hover:bg-[hsl(var(--orange-hover))] transition-colors btn-hover-lift"
            >
              Order Now →
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <>
      <section id="services" className="py-[100px] bg-primary">
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
              What We Do
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground mb-4">
              Our Services
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto">
              Premium digital services tailored to elevate your brand and accelerate growth.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={i}
                onLearnMore={() => setActiveService(i)}
              />
            ))}
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-6xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden border border-primary-foreground/10 shadow-lg">
              <iframe
                title="Saym IT Solution Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.7!2d90.4!3d23.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU0JzAwLjAiTiA5MMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd&q=Bonomala+Road,+College+Gate,+Tongi,+Gazipur"
                width="100%"
                height="300"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.9) brightness(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-center text-primary-foreground/50 text-sm mt-4">
              📍 Bonomala Road, College Gate, Tongi, Gazipur
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeService !== null && (
          <ServiceModal
            service={services[activeService]}
            onClose={() => setActiveService(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesSection;
