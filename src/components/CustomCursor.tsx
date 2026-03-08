import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [hidden, setHidden] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setHidden(true);
      return;
    }

    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Instant position — no lerp, no spring, no delay
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${x - 22}px, ${y - 22}px) scale(${hovering ? 1.3 : 1})`;
      }

      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button'], input, textarea, select"));
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move, { passive: true });
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
  }, [hovering]);

  if (hidden) return null;

  return (
    <>
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full will-change-transform"
        style={{
          width: 44,
          height: 44,
          border: `2px solid hsl(var(--secondary) / ${hovering ? 0.8 : 0.5})`,
          boxShadow: hovering
            ? "0 0 12px hsl(var(--secondary) / 0.4)"
            : "0 0 8px hsl(var(--secondary) / 0.2)",
          transition: "border-color 0.2s, box-shadow 0.2s, width 0.2s, height 0.2s",
        }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full will-change-transform"
        style={{
          width: 8,
          height: 8,
          background: "hsl(var(--secondary))",
          boxShadow: "0 0 6px hsl(var(--secondary) / 0.5)",
          transform: clicking ? "scale(0.6)" : undefined,
        }}
      />
      <style>{`@media (pointer: fine) { *, *::before, *::after { cursor: none !important; } }`}</style>
    </>
  );
};

export default CustomCursor;
