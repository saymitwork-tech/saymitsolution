import founderImg from "@/assets/founder.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 py-16 lg:py-24">
        {/* Left — Founder */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start gap-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative">
            <motion.div
              className="w-64 h-80 md:w-80 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={founderImg}
                alt="A. Kamal Ahmed Saym — Founder & CEO of Saym IT Solution | Best IT services in Bangladesh"
                className="w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out"
                loading="eager"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-heading font-bold text-sm shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 400 }}
            >
              Founder & CEO
            </motion.div>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-primary">
              A. Kamal Ahmed Saym
            </h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
              {[{ label: "8+ Years", sub: "Experience" }, { label: "300+", sub: "Projects" }].map((s, i) => (
                <motion.div
                  key={s.label}
                  className="bg-primary text-primary-foreground px-5 py-3 rounded-xl text-center card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                >
                  <p className="font-heading text-xl font-bold">{s.label}</p>
                  <p className="text-xs text-primary-foreground/70">{s.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — CTA */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.p
            className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Welcome to
          </motion.p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-primary">
            SAYM <span className="text-secondary">IT</span> SOLUTION
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg">
            We craft digital experiences that drive growth. From web development to full-scale IT solutions — your vision, our expertise.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href={`https://wa.me/8801616151002?text=${encodeURIComponent("Hi! I'd like to start a project with Saym IT Solution.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="cta" size="lg" className="text-base px-8">
                Place an Order
              </Button>
            </a>
            <a href="#portfolio">
              <Button variant="heroGhost" size="lg" className="text-base px-8">
                View Portfolio
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
