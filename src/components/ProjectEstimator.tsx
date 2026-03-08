import { useState, useMemo } from "react";
import { motion, type Easing } from "framer-motion";
import { Calculator, Clock, DollarSign, CheckCircle, Sparkles } from "lucide-react";

const ease: Easing = [0.25, 0.1, 0.25, 1];

interface ServiceOption {
  id: string;
  label: string;
  category: string;
  basePrice: number;
  baseDays: number;
}

const serviceOptions: ServiceOption[] = [
  { id: "logo", label: "Logo Design", category: "Graphic Design", basePrice: 150, baseDays: 5 },
  { id: "brand", label: "Full Brand Identity", category: "Graphic Design", basePrice: 400, baseDays: 10 },
  { id: "social", label: "Social Media Kit", category: "Graphic Design", basePrice: 200, baseDays: 7 },
  { id: "landing", label: "Landing Page", category: "Web Development", basePrice: 300, baseDays: 7 },
  { id: "website", label: "Business Website", category: "Web Development", basePrice: 800, baseDays: 21 },
  { id: "ecommerce", label: "E-Commerce Store", category: "Web Development", basePrice: 1500, baseDays: 35 },
  { id: "webapp", label: "Web Application", category: "Web Development", basePrice: 2500, baseDays: 45 },
  { id: "seo", label: "SEO Optimization", category: "Digital Marketing", basePrice: 350, baseDays: 30 },
  { id: "ads", label: "Paid Ad Campaign", category: "Digital Marketing", basePrice: 500, baseDays: 14 },
  { id: "smm", label: "Social Media Management", category: "Digital Marketing", basePrice: 400, baseDays: 30 },
];

const complexityLevels = [
  { id: "basic", label: "Basic", multiplier: 1 },
  { id: "standard", label: "Standard", multiplier: 1.5 },
  { id: "premium", label: "Premium", multiplier: 2.2 },
];

const urgencyLevels = [
  { id: "normal", label: "Normal", multiplier: 1, timeMultiplier: 1 },
  { id: "rush", label: "Rush (+30%)", multiplier: 1.3, timeMultiplier: 0.6 },
  { id: "urgent", label: "Urgent (+60%)", multiplier: 1.6, timeMultiplier: 0.4 },
];

const ProjectEstimator = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [complexity, setComplexity] = useState("standard");
  const [urgency, setUrgency] = useState("normal");

  const toggleService = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const estimate = useMemo(() => {
    if (selected.length === 0) return null;

    const comp = complexityLevels.find((c) => c.id === complexity)!;
    const urg = urgencyLevels.find((u) => u.id === urgency)!;

    const selectedServices = serviceOptions.filter((s) => selected.includes(s.id));
    const totalBase = selectedServices.reduce((sum, s) => sum + s.basePrice, 0);
    const maxDays = Math.max(...selectedServices.map((s) => s.baseDays));
    const parallelBonus = selectedServices.length > 1 ? 0.8 : 1;

    const price = Math.round(totalBase * comp.multiplier * urg.multiplier);
    const days = Math.round(maxDays * parallelBonus * urg.timeMultiplier * (comp.multiplier * 0.7 + 0.3));

    return { priceLow: Math.round(price * 0.85), priceHigh: Math.round(price * 1.15), days };
  }, [selected, complexity, urgency]);

  const categories = [...new Set(serviceOptions.map((s) => s.category))];

  return (
    <section id="estimator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary font-heading text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary mb-4">
            Project Estimator
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Select your services and get an instant price & timeline estimate.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Left: Service Selection */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            {/* Services */}
            {categories.map((cat) => (
              <div key={cat}>
                <h3 className="font-heading text-sm font-bold text-secondary tracking-widest uppercase mb-3">
                  {cat}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {serviceOptions
                    .filter((s) => s.category === cat)
                    .map((service) => {
                      const isActive = selected.includes(service.id);
                      return (
                        <button
                          key={service.id}
                          onClick={() => toggleService(service.id)}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                            isActive
                              ? "border-secondary bg-secondary/5 shadow-md"
                              : "border-border bg-muted hover:border-secondary/40"
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                              isActive
                                ? "border-secondary bg-secondary"
                                : "border-muted-foreground/30"
                            }`}
                          >
                            {isActive && <CheckCircle className="w-4 h-4 text-secondary-foreground" />}
                          </div>
                          <div>
                            <p className="font-heading text-sm font-bold text-primary">{service.label}</p>
                            <p className="text-xs text-muted-foreground">
                              From ${service.basePrice} · ~{service.baseDays} days
                            </p>
                          </div>
                        </button>
                      );
                    })}
                </div>
              </div>
            ))}

            {/* Complexity */}
            <div>
              <h3 className="font-heading text-sm font-bold text-secondary tracking-widest uppercase mb-3">
                Complexity
              </h3>
              <div className="flex gap-3">
                {complexityLevels.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setComplexity(c.id)}
                    className={`flex-1 py-3 rounded-xl border-2 font-heading text-sm font-bold transition-all ${
                      complexity === c.id
                        ? "border-secondary bg-secondary/5 text-secondary"
                        : "border-border text-muted-foreground hover:border-secondary/40"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div>
              <h3 className="font-heading text-sm font-bold text-secondary tracking-widest uppercase mb-3">
                Timeline
              </h3>
              <div className="flex gap-3">
                {urgencyLevels.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => setUrgency(u.id)}
                    className={`flex-1 py-3 rounded-xl border-2 font-heading text-sm font-bold transition-all ${
                      urgency === u.id
                        ? "border-secondary bg-secondary/5 text-secondary"
                        : "border-border text-muted-foreground hover:border-secondary/40"
                    }`}
                  >
                    {u.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Estimate Card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="sticky top-28 glass-dark bg-[hsl(var(--primary)/0.85)] rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary-foreground">
                  Your Estimate
                </h3>
              </div>

              {estimate ? (
                <motion.div
                  key={`${selected.join("-")}-${complexity}-${urgency}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease }}
                  className="space-y-6"
                >
                  {/* Price */}
                  <div className="bg-primary-foreground/5 rounded-2xl p-6 border border-primary-foreground/10">
                    <div className="flex items-center gap-2 text-secondary text-xs font-bold tracking-widest uppercase mb-2">
                      <DollarSign className="w-4 h-4" />
                      Estimated Cost
                    </div>
                    <p className="font-heading text-3xl font-black text-primary-foreground">
                      ${estimate.priceLow.toLocaleString()} – ${estimate.priceHigh.toLocaleString()}
                    </p>
                    <p className="text-primary-foreground/50 text-xs mt-1">USD, project-based</p>
                  </div>

                  {/* Timeline */}
                  <div className="bg-primary-foreground/5 rounded-2xl p-6 border border-primary-foreground/10">
                    <div className="flex items-center gap-2 text-secondary text-xs font-bold tracking-widest uppercase mb-2">
                      <Clock className="w-4 h-4" />
                      Estimated Timeline
                    </div>
                    <p className="font-heading text-3xl font-black text-primary-foreground">
                      ~{estimate.days} Days
                    </p>
                    <p className="text-primary-foreground/50 text-xs mt-1">Approximate delivery</p>
                  </div>

                  {/* Selected */}
                  <div>
                    <p className="text-primary-foreground/50 text-xs font-bold uppercase tracking-wider mb-2">
                      {selected.length} service{selected.length > 1 ? "s" : ""} selected
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions
                        .filter((s) => selected.includes(s.id))
                        .map((s) => (
                          <span
                            key={s.id}
                            className="text-xs bg-secondary/15 text-secondary px-3 py-1 rounded-full font-medium"
                          >
                            {s.label}
                          </span>
                        ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/8801616151002?text=${encodeURIComponent(
                      `Hi! I'm interested in: ${serviceOptions
                        .filter((s) => selected.includes(s.id))
                        .map((s) => s.label)
                        .join(", ")}. Complexity: ${complexity}. Estimated budget: $${estimate.priceLow}-$${estimate.priceHigh}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-secondary text-secondary-foreground font-heading font-bold py-4 rounded-xl text-center hover:bg-orange-hover transition-colors"
                  >
                    Discuss This Project →
                  </a>
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/5 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-7 h-7 text-primary-foreground/20" />
                  </div>
                  <p className="text-primary-foreground/40 text-sm">
                    Select services to see your estimate
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimator;
