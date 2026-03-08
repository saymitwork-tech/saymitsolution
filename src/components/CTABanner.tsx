import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const CTABanner = () => (
  <section className="py-[100px] bg-primary relative overflow-hidden">
    {/* Decorative glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-semibold px-5 py-2 rounded-full mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
        >
          <Sparkles className="w-4 h-4" />
          Limited Time Offer
        </motion.div>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-6 leading-tight">
          Ready to Transform Your{" "}
          <span className="text-secondary">Digital Presence?</span>
        </h2>

        <p className="text-primary-foreground/60 text-lg mb-10 max-w-xl mx-auto">
          Book a free strategy session with our experts and discover how we can accelerate your growth.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`https://wa.me/8801616151002?text=${encodeURIComponent("Hi! I'd like a free consultation.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="cta" size="lg" className="text-base px-10">
              <Sparkles className="w-4 h-4 mr-2" />
              Get Free Consultation
            </Button>
          </a>
          <a
            href={`https://wa.me/8801616151002?text=${encodeURIComponent("Hi! I'd like to start a project with Saym IT Solution.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="heroGhost" size="lg" className="text-base px-10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
