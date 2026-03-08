import { motion } from "framer-motion";
import { Clock, Zap, Award, Lightbulb, HeadphonesIcon, BadgeDollarSign } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const reasons = [
  { icon: Clock, title: "8+ Years Experience", desc: "Proven expertise delivering world-class digital solutions since 2016." },
  { icon: Zap, title: "Fast Delivery", desc: "Rapid turnaround without compromising quality — on time, every time." },
  { icon: Award, title: "Premium Quality", desc: "Pixel-perfect designs and clean code that exceed industry standards." },
  { icon: Lightbulb, title: "Creative Strategy", desc: "Data-driven creative approaches that set your brand apart from competition." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "24/7 client support with a personal project manager for every engagement." },
  { icon: BadgeDollarSign, title: "Affordable Packages", desc: "Enterprise-grade results at competitive prices tailored to your budget." },
];

const WhyChooseUsSection = () => (
  <section className="py-[100px] bg-primary">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
      >
        <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
          Why Us
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground mb-4">
          Why Choose Us
        </h2>
        <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto">
          Six reasons why leading brands trust Saym IT Solution.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease }}
              className="glass-dark rounded-2xl p-8 text-center card-tilt border border-primary-foreground/10 hover:border-secondary/40 transition-colors duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                <Icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">
                {r.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
