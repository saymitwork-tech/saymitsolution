import { useState, useEffect, useCallback } from "react";
import { motion, type Easing } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jpg";
import client3 from "@/assets/client3.jpg";

const ease: Easing = [0.25, 0.1, 0.25, 1];

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
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
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
          <h2 className="font-heading text-3xl md:text-4xl font-black text-primary-foreground mb-4">
            Client Reviews
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease }}
            className="relative bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/10 rounded-3xl p-8 md:p-12"
          >
            {/* Quote icon */}
            <Quote className="w-10 h-10 text-secondary/30 absolute top-6 right-8" />

            <div className="flex flex-col items-center text-center">
              {/* Photo */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-secondary mb-6 shadow-lg">
                <img src={review.photo} alt={`${review.name} — Client of Saym IT Solution | Best IT services in Bangladesh`} className="w-full h-full object-cover" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-xl italic">
                "{review.text}"
              </p>

              {/* Name */}
              <h4 className="font-heading text-xl font-bold text-primary-foreground">
                {review.name}
              </h4>
              <p className="text-secondary text-sm font-medium">{review.role}</p>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-secondary hover:text-secondary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === active ? "bg-secondary w-8" : "bg-primary-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:border-secondary hover:text-secondary transition-colors"
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
