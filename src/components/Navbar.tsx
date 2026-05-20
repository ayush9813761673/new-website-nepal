import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#features");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-background/95 backdrop-blur-xl border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-foreground flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-bold">F</span>
            </div>
            <span>Flowstra</span>
          </a>

          {/* Centered pill navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-border/40 bg-card/40 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeLink === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              className="bg-gradient-primary animate-button-glow transition-all rounded-full px-6"
              onClick={() => window.open("https://cal.com/ayush-yadav/15min?overlayCalendar=true", "_blank")}
            >
              Schedule a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-border/30">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl text-foreground hover:bg-secondary/50 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 px-4">
                  <Button 
                    className="w-full bg-gradient-primary animate-button-glow rounded-full transition-all"
                    onClick={() => window.open("https://cal.com/ayush-yadav/15min?overlayCalendar=true", "_blank")}
                  >
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
