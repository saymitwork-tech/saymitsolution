import { motion } from "framer-motion";
import { Smartphone, CreditCard, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const PaymentSection = () => {
  const [copied, setCopied] = useState(false);
  const bkashNumber = "01990000996";

  const handleCopy = () => {
    navigator.clipboard.writeText(bkashNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="payment" className="py-[100px] bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-widest uppercase mb-4">
            Payment Methods
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Easy & Secure <span className="text-secondary">Payments</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            Choose your preferred payment method. We accept bKash and bank transfers for your convenience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* bKash Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 rounded-2xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500" style={{ background: "linear-gradient(135deg, #E2136E, #D1175B)" }} />
            <div className="relative glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "hsl(340 82% 49% / 0.1)" }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Smartphone className="w-6 h-6" style={{ color: "#E2136E" }} />
                </motion.div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground">bKash</h3>
                  <p className="text-muted-foreground text-xs">Mobile Payment</p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-4 mb-4">
                <p className="text-xs text-muted-foreground mb-1">Send Payment to</p>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xl font-bold text-foreground tracking-wider">
                    {bkashNumber}
                  </span>
                  <motion.button
                    onClick={handleCopy}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/10 text-secondary text-xs font-semibold hover:bg-secondary/20 transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              <div className="space-y-2 text-xs text-muted-foreground">
                <p>① Send money to the number above via <strong className="text-foreground">bKash</strong></p>
                <p>② Use <strong className="text-foreground">"Send Money"</strong> option</p>
                <p>③ Share the Transaction ID with us on WhatsApp</p>
              </div>
            </div>
          </motion.div>

          {/* Bank/Card Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-navy-light rounded-2xl opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500" />
            <div className="relative glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <CreditCard className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground">Bank Transfer</h3>
                  <p className="text-muted-foreground text-xs">Direct Payment</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {[
                  { label: "Bank Name", value: "Dutch-Bangla Bank Ltd." },
                  { label: "Account Name", value: "Saym IT Solution" },
                  { label: "Account Number", value: "Contact us for details" },
                ].map((item) => (
                  <div key={item.label} className="bg-muted rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                    <p className="font-heading font-semibold text-sm text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground">
                After payment, share the receipt via WhatsApp for confirmation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
