import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-muted-foreground font-medium flex items-center justify-center gap-2">
          © {new Date().getFullYear()} Brand: <span className="text-primary font-bold">OBATECH</span>
        </p>
        <p className="text-sm text-muted-foreground/60 mt-2 flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by Obatech
        </p>
      </div>
    </footer>
  );
}
