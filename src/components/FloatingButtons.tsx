import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-[20px]">
      {/* Facebook */}
      <motion.a
        href="https://www.facebook.com/saymitsolution"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg"
        aria-label="Facebook"
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <svg className="w-6 h-6 fill-current text-primary-foreground" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/8801616151002"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: "#25D366" }}
        aria-label="WhatsApp"
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
