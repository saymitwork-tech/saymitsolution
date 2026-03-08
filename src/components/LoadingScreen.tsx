import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 150);

    const timer = setTimeout(() => setLoading(false), 2400);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
          style={{ background: "hsl(228 54% 12%)" }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0, 1] }}
        >
          {/* Radial glow */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 200,
              height: 200,
              background: "radial-gradient(circle, hsl(24 95% 53% / 0.25) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Orbiting ring */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 110,
              height: 110,
              border: "2px solid transparent",
              borderTopColor: "hsl(24 95% 53%)",
              borderRightColor: "hsl(24 95% 53% / 0.3)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />

          {/* Second ring */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 130,
              height: 130,
              border: "1px solid transparent",
              borderBottomColor: "hsl(24 95% 53% / 0.4)",
              borderLeftColor: "hsl(24 95% 53% / 0.1)",
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Logo */}
          <motion.img
            src={logo}
            alt="Saym IT Solution — Best IT services in Bangladesh"
            className="w-16 h-16 object-contain relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          />

          {/* Brand name */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="font-heading text-lg font-bold tracking-wider" style={{ color: "hsl(0 0% 100%)" }}>
              SAYM <span style={{ color: "hsl(24 95% 53%)" }}>IT</span> SOLUTION
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="mt-6 w-48 h-0.5 rounded-full overflow-hidden"
            style={{ background: "hsl(0 0% 100% / 0.1)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(24 95% 53%), hsl(24 95% 63%))" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
