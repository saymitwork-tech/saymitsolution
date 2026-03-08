import logo from "@/assets/logo.jpg";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Saym IT Solution Logo — Best IT services in Bangladesh" className="h-10 w-10 object-contain" />
          <span className="font-heading text-lg font-bold tracking-wide text-primary-foreground">
            SAYM <span className="text-secondary">IT</span> SOLUTION
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              {item}
            </a>
          ))}
          <Button variant="cta" size="sm">Start a Project</Button>
        </div>

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4">
          {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-sm text-primary-foreground/80 hover:text-secondary"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button variant="cta" size="sm" className="mt-2 w-full">Start a Project</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
