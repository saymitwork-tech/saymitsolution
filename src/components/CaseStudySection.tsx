import { motion } from "framer-motion";
import { AlertCircle, Lightbulb, TrendingUp } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const caseStudies = [
  {
    title: "LuxeCart E-Commerce Platform",
    problem:
      "An established retail brand was losing 60% of mobile users due to a slow, outdated website with poor UX and no mobile optimization.",
    solution:
      "We rebuilt the entire platform using React with a mobile-first approach, implemented lazy loading, optimized images, and designed a seamless checkout flow.",
    result:
      "Mobile conversions increased by 180%, page load time dropped from 8s to 1.2s, and monthly revenue grew by 45% within 3 months.",
  },
  {
    title: "Zen Wellness Brand Identity",
    problem:
      "A premium wellness startup had no visual identity and struggled to differentiate in a saturated market of generic health brands.",
    solution:
      "We crafted a complete brand identity — logo, color palette, typography, packaging, and social media templates — with a calming luxury aesthetic.",
    result:
      "Brand recognition increased by 300%, social media following grew 5x in 6 months, and the client secured two major retail partnerships.",
  },
  {
    title: "FinTrack Marketing Campaign",
    problem:
      "A fintech app had strong technology but near-zero user acquisition. Their marketing efforts were scattered with no measurable ROI.",
    solution:
      "We launched a full-funnel digital marketing strategy: SEO content, targeted Google & Meta ads, email nurturing sequences, and influencer partnerships.",
    result:
      "Cost per acquisition dropped by 65%, organic traffic increased 400%, and they hit 50,000 active users within the first quarter.",
  },
];

const phases = [
  { key: "problem", label: "The Problem", icon: AlertCircle, color: "text-destructive" },
  { key: "solution", label: "My Solution", icon: Lightbulb, color: "text-secondary" },
  { key: "result", label: "Final Result", icon: TrendingUp, color: "text-green-500" },
] as const;

const CaseStudySection = () => (
  <section className="py-[100px] bg-muted">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
      >
        <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
          Real Results
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4">
          Case Studies
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          See how we transformed challenges into measurable success stories.
        </p>
      </motion.div>

      <div className="grid gap-10 max-w-5xl mx-auto">
        {caseStudies.map((cs, i) => (
          <motion.div
            key={cs.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 card-tilt"
          >
            <h3 className="font-heading text-xl md:text-2xl font-bold text-secondary mb-8">
              {cs.title}
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {phases.map((phase) => {
                const Icon = phase.icon;
                return (
                  <div key={phase.key} className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-5 h-5 ${phase.color} shrink-0`} />
                      <span className="font-heading font-bold text-sm text-foreground">
                        {phase.label}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cs[phase.key]}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudySection;
