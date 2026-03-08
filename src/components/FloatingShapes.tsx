import { motion } from "framer-motion";

const shapes = [
  { size: 300, x: "10%", y: "20%", duration: 18, delay: 0, color: "var(--secondary)" },
  { size: 200, x: "70%", y: "60%", duration: 22, delay: 2, color: "var(--primary)" },
  { size: 150, x: "80%", y: "15%", duration: 20, delay: 4, color: "var(--secondary)" },
  { size: 250, x: "30%", y: "70%", duration: 25, delay: 1, color: "var(--primary)" },
  { size: 180, x: "55%", y: "35%", duration: 16, delay: 3, color: "var(--secondary)" },
];

const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {shapes.map((s, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: s.size,
          height: s.size,
          left: s.x,
          top: s.y,
          background: `radial-gradient(circle, hsl(${s.color} / 0.08) 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 30, -20, 15, 0],
          y: [0, -25, 15, -10, 0],
          scale: [1, 1.15, 0.95, 1.1, 1],
        }}
        transition={{
          duration: s.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: s.delay,
        }}
      />
    ))}
  </div>
);

export default FloatingShapes;
