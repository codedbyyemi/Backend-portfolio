import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-muted-foreground font-medium flex items-center justify-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          {new Date().getFullYear()} <span className="text-primary font-bold">Adefisan Babatunde</span>
        </p>
        <p className="text-sm text-muted-foreground/60 mt-2">
          Backend Developer | Building Secure & Scalable Systems
        </p>
      </div>
    </footer>
  );
}
