import { motion } from "framer-motion";
import logo1 from "@/assets/client-logo1.png";
import logo2 from "@/assets/client-logo2.png";
import logo3 from "@/assets/client-logo3.png";
import logo4 from "@/assets/client-logo4.png";
import logo5 from "@/assets/client-logo5.png";
import logo6 from "@/assets/client-logo6.png";

const ease = [0.25, 0.1, 0.25, 1] as const;

const logos = [
  { src: logo1, alt: "Tech Muirt" },
  { src: logo2, alt: "Startur Company" },
  { src: logo3, alt: "Luxune Roliry" },
  { src: logo4, alt: "Creative Agency" },
  { src: logo5, alt: "ContelPlaste" },
  { src: logo6, alt: "FinaTech" },
];

const ClientLogosSection = () => (
  <section className="py-[100px] bg-muted">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
      >
        <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
          Our Clients
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4">
          Trusted by Leading Brands
        </h2>
      </motion.div>

      {/* Infinite scroll slider */}
      <div className="relative overflow-hidden">
        <div className="flex animate-logo-scroll">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 md:w-48 h-28 mx-6 flex items-center justify-center group"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-20 max-w-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ClientLogosSection;
