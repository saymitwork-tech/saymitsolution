import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const posts = [
  {
    title: "10 Web Design Trends Dominating 2026",
    excerpt: "From AI-driven layouts to immersive 3D experiences — discover the design trends that are shaping the future of the web.",
    category: "Web Design",
    date: "Mar 5, 2026",
    readTime: "5 min read",
  },
  {
    title: "How SEO Can 10x Your Business Revenue",
    excerpt: "A step-by-step guide to leveraging search engine optimization for sustainable, long-term business growth.",
    category: "Digital Marketing",
    date: "Feb 28, 2026",
    readTime: "7 min read",
  },
  {
    title: "Brand Identity: Why It Matters More Than Ever",
    excerpt: "In a crowded market, a strong visual identity is your greatest competitive advantage. Here's how to build one.",
    category: "Branding",
    date: "Feb 20, 2026",
    readTime: "4 min read",
  },
];

const BlogSection = () => (
  <section className="py-[100px] bg-muted">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
      >
        <p className="text-secondary font-heading font-semibold tracking-widest uppercase text-sm mb-3">
          Our Blog
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-4">
          Digital Insights
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Expert perspectives on design, development, and digital marketing.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease }}
            className="bg-card border border-border rounded-3xl overflow-hidden card-tilt group cursor-pointer"
          >
            {/* Category bar */}
            <div className="bg-primary px-6 py-3">
              <span className="text-secondary text-xs font-bold uppercase tracking-widest">
                {post.category}
              </span>
            </div>

            <div className="p-6 md:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {post.excerpt}
              </p>

              <span className="inline-flex items-center gap-2 text-secondary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
