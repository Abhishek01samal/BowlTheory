import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { path: "#", label: "Home" },
  { path: "#ingredients", label: "Ingredients" },
  { path: "#story", label: "Our Story" },
];

export function Navigation() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Basic scroll spy logic could go here, or just simple state update on click
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl">🍜</span>
          <span className="font-serif text-xl font-bold text-foreground">Chow Mein</span>
        </a>

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                "text-muted-foreground hover:text-foreground hover:bg-muted"
                // activeHash === item.path && "bg-primary text-primary-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

