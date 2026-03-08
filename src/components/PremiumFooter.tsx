import logo from "@/assets/logo.png";
import { Facebook, Mail, Phone, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PremiumFooter = () => {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1 — Branding */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Saym IT Solution Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="font-heading text-xl font-bold text-primary-foreground">
                SAYM <span className="text-secondary">IT</span> SOLUTION
              </span>
            </a>
            <p className="text-primary-foreground/50 text-sm leading-relaxed text-center md:text-left max-w-xs">
              Premium digital agency crafting world-class web experiences, branding, and marketing solutions since 2016.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading text-lg font-bold text-secondary mb-5">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-foreground/60 text-sm hover:text-secondary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading text-lg font-bold text-secondary mb-5">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/8801616151002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/60 text-sm hover:text-secondary transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4 text-secondary" />
                +880 1616-151002
              </a>
              <a
                href="https://www.facebook.com/saymitsolution"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/60 text-sm hover:text-secondary transition-colors duration-300"
              >
                <Facebook className="w-4 h-4 text-secondary" />
                facebook.com/saymitsolution
              </a>
              <a
                href="mailto:info@saymitsolution.com"
                className="flex items-center gap-3 text-primary-foreground/60 text-sm hover:text-secondary transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-secondary" />
                info@saymitsolution.com
              </a>
              <a
                href="tel:+8801616151002"
                className="flex items-center gap-3 text-primary-foreground/60 text-sm hover:text-secondary transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-secondary" />
                Call Us Anytime
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-5">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Saym IT Solution. All rights reserved.
          </p>
          <a
            href="https://www.facebook.com/saymitsolution"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary-foreground/40 hover:text-secondary transition-colors"
          >
            Developed by Saym IT Solution
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
