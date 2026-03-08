import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.25, 0.1, 0.25, 1] as const;

const plans = [
  {
    name: "Starter",
    price: "$199",
    period: "/project",
    desc: "Perfect for small businesses and startups getting started online.",
    features: [
      "Logo Design",
      "Single Page Website",
      "Basic SEO Setup",
      "2 Revisions",
      "5 Day Delivery",
      "Email Support",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "$599",
    period: "/project",
    desc: "Ideal for growing brands that need a complete digital presence.",
    features: [
      "Full Brand Identity",
      "Multi-Page Website",
      "Advanced SEO",
      "Social Media Kit",
      "Unlimited Revisions",
      "Priority Support",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$1,499",
    period: "/project",
    desc: "Enterprise-grade solutions for maximum impact and scale.",
    features: [
      "Everything in Business",
      "E-Commerce / Web App",
      "Digital Marketing Campaign",
      "Analytics Dashboard",
      "Dedicated Project Manager",
      "24/7 VIP Support",
    ],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-[100px] bg-muted">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
      >
        <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
          Pricing
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4">
          Transparent Pricing
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Choose the plan that fits your goals. No hidden fees, ever.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease }}
            className={`rounded-3xl p-8 md:p-10 card-tilt flex flex-col ${
              plan.highlighted
                ? "bg-primary text-primary-foreground border-2 border-secondary shadow-[0_0_40px_hsl(var(--secondary)/0.2)] relative"
                : "bg-card border border-border"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                Most Popular
              </span>
            )}

            <h3 className={`font-heading text-2xl font-bold mb-2 ${plan.highlighted ? "text-secondary" : "text-foreground"}`}>
              {plan.name}
            </h3>
            <p className={`text-sm mb-6 ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
              {plan.desc}
            </p>

            <div className="mb-8">
              <span className={`font-heading text-4xl font-black ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.price}
              </span>
              <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                {plan.period}
              </span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check className={`w-4 h-4 shrink-0 ${plan.highlighted ? "text-secondary" : "text-secondary"}`} />
                  <span className={plan.highlighted ? "text-primary-foreground/80" : "text-foreground/80"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/8801616151002?text=${encodeURIComponent(`Hi! I'm interested in the ${plan.name} plan (${plan.price}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={plan.highlighted ? "cta" : "heroGhost"}
                size="lg"
                className="w-full text-base"
              >
                Get Started
              </Button>
            </a>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <p className="text-muted-foreground mb-4">Need a custom solution?</p>
        <a
          href={`https://wa.me/8801616151002?text=${encodeURIComponent("Hi! I'd like a free consultation for my project.")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="cta" size="lg" className="text-base px-10">
            Get Free Consultation
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
