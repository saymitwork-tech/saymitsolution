import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jpg";
import client3 from "@/assets/client3.jpg";

const ease = [0.25, 0.1, 0.25, 1] as const;

const reviews = [
  {
    name: "Rafiq Hasan",
    role: "CEO, TechBridge BD",
    photo: client1,
    rating: 5,
    text: "Saym IT Solution delivered an outstanding e-commerce platform for us. Their attention to detail and commitment to deadlines is truly impressive. Highly recommended!",
  },
  {
    name: "Nasreen Akter",
    role: "Founder, StyleHive",
    photo: client2,
    rating: 5,
    text: "The branding and marketing campaign they designed for StyleHive exceeded all expectations. Our social media engagement grew by 400% within the first quarter.",
  },
  {
    name: "Tanvir Rahman",
    role: "CTO, FinoApp",
    photo: client3,
    rating: 5,
    text: "Their UI/UX team redesigned our entire application. The result was a 60% improvement in user retention. Professional, creative, and easy to work with.",
  },
];

const ClientReviews = () => {
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((p) => (p + 1) % reviews.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + reviews.length) % reviews.length), []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const review = reviews[active];

  return (
    <section className="py-[100px] bg-primary">
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
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground mb-4">
            Client Success Stories
          </h2>
          <p className="text-primary-foreground/50 text-lg max-w-xl mx-auto">
            Hear what our clients say about working with us.
          </p>
        </motion.div>

        {/* Review Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5, ease }}
            className="relative glass-dark rounded-3xl p-10 md:p-14 border border-primary-foreground/10"
          >
            {/* Quote icon */}
            <Quote className="w-12 h-12 text-secondary/20 absolute top-8 right-10" />

            <div className="flex flex-col items-center text-center">
              {/* Photo */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-[3px] border-secondary mb-8 shadow-[0_0_30px_-5px_hsl(var(--orange)/0.3)]">
                <img
                  src={review.photo}
                  alt={`${review.name} — Client of Saym IT Solution`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stars */}
              <div className="flex gap-1.5 mb-8">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-serif italic">
                "{review.text}"
              </p>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-secondary/30 rounded-full mb-6" />

              {/* Name */}
              <h4 className="font-heading text-xl font-bold text-primary-foreground">
                {review.name}
              </h4>
              <p className="text-secondary text-sm font-medium mt-1">{review.role}</p>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/50 hover:border-secondary hover:text-secondary transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    i === active
                      ? "bg-secondary w-10"
                      : "bg-primary-foreground/20 w-2.5 hover:bg-primary-foreground/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/50 hover:border-secondary hover:text-secondary transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
