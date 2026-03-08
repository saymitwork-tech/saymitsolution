import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) {
      setHidden(true);
      return;
    }

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      {/* Glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: clicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
        style={{
          width: 40,
          height: 40,
          border: "2px solid hsl(var(--secondary))",
          boxShadow: "0 0 15px hsl(var(--secondary) / 0.4), 0 0 30px hsl(var(--secondary) / 0.15)",
          mixBlendMode: "difference",
        }}
      />
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-secondary"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: clicking ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
        style={{ width: 8, height: 8 }}
      />
      {/* Hide default cursor */}
      <style>{`@media (pointer: fine) { * { cursor: none !important; } }`}</style>
    </>
  );
};

export default CustomCursor;
