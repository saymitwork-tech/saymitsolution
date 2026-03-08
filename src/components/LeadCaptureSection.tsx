import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

const ease = [0.25, 0.1, 0.25, 1] as const;

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget"),
  message: z.string().trim().max(1000).optional(),
});

const services = ["Graphic Design", "Web Development", "Digital Marketing", "Full Branding", "Other"];
const budgets = ["< $200", "$200 – $500", "$500 – $1,000", "$1,000 – $5,000", "$5,000+"];

const LeadCaptureSection = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", budget: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handle = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: form.name,
      email: form.email,
      service: form.service,
      message: `Budget: ${form.budget}\n${form.message}`,
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
    toast.success("Thank you! We'll be in touch soon.");
  };

  const inputClass =
    "w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all";

  return (
    <section id="contact" className="py-[100px] bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground mb-4">
            Start Your Project
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto">
            Tell us about your vision and we'll craft the perfect solution.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6, ease }}
        >
          {submitted ? (
            <div className="glass-dark rounded-3xl p-12 text-center border border-primary-foreground/10">
              <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-3">
                Message Sent!
              </h3>
              <p className="text-primary-foreground/60">
                Our team will review your project and respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="glass-dark rounded-3xl p-8 md:p-10 space-y-5 border border-primary-foreground/10">
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" placeholder="Your Name *" value={form.name} onChange={handle("name")} className={inputClass} required />
                <input type="email" placeholder="Email Address *" value={form.email} onChange={handle("email")} className={inputClass} required />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <select value={form.service} onChange={handle("service")} className={inputClass} required>
                  <option value="">Select Service *</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <select value={form.budget} onChange={handle("budget")} className={inputClass} required>
                  <option value="">Estimated Budget *</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <textarea
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handle("message")}
                rows={4}
                className={inputClass + " resize-none"}
              />

              <Button type="submit" variant="cta" size="lg" className="w-full text-base" disabled={loading}>
                {loading ? "Sending..." : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
