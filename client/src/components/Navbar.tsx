import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Code2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                OBATECH
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div 
                  className={`
                    cursor-pointer font-medium text-sm transition-all duration-200 relative py-1
                    ${location === item.href 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {item.name}
                  {location === item.href && (
                    <motion.div 
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </div>
              </Link>
            ))}
            <div className="pl-4 border-l border-border">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className={`
                      block px-4 py-3 rounded-xl text-base font-medium cursor-pointer transition-colors
                      ${location === item.href 
                        ? "bg-primary/10 text-primary" 
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }
                    `}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
