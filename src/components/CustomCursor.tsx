import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  const updateTrail = useCallback(() => {
    setTrailPos((prev) => ({
      x: prev.x + (pos.x - prev.x) * 0.15,
      y: prev.y + (pos.y - prev.y) * 0.15,
    }));
  }, [pos]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setHidden(true);
      return;
    }

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select, [data-hover]");
      setHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", checkHover);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    const raf = setInterval(updateTrail, 16);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      clearInterval(raf);
    };
  }, [updateTrail]);

  if (hidden) return null;

  return (
    <>
      {/* Outer glow trail */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          width: hovering ? 56 : 44,
          height: hovering ? 56 : 44,
          transform: `translate(${trailPos.x - (hovering ? 28 : 22)}px, ${trailPos.y - (hovering ? 28 : 22)}px)`,
          border: `2px solid hsl(var(--secondary) / ${hovering ? 0.8 : 0.5})`,
          boxShadow: `0 0 ${hovering ? 25 : 15}px hsl(var(--secondary) / ${hovering ? 0.5 : 0.3}), 0 0 ${hovering ? 50 : 30}px hsl(var(--secondary) / 0.1)`,
          transition: "width 0.3s, height 0.3s, border-color 0.3s, box-shadow 0.3s",
          mixBlendMode: "screen",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{
          x: pos.x - (clicking ? 5 : 4),
          y: pos.y - (clicking ? 5 : 4),
          scale: clicking ? 0.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 28 }}
        style={{
          width: 8,
          height: 8,
          background: "hsl(var(--secondary))",
          boxShadow: "0 0 8px hsl(var(--secondary) / 0.6)",
        }}
      />
      <style>{`@media (pointer: fine) { *, *::before, *::after { cursor: none !important; } }`}</style>
    </>
  );
};

export default CustomCursor;
