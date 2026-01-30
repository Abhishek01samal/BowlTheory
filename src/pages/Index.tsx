import { CTASection } from "@/components/ui/hero-dithering-card";
import { Navigation } from "@/components/Navigation";

import { IngredientsSection } from "@/components/IngredientsSection";
import { StorySection } from "@/components/StorySection";
import { BackgroundVideo } from "@/components/BackgroundVideo";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent text-foreground scroll-smooth relative">
      <BackgroundVideo />
      <Navigation />

      {/* Hero Section with Dithering */}
      <div id="home" className="pt-20">
        <CTASection />
      </div>

      {/* Features Section Removed */}

      {/* Ingredients Section */}
      <IngredientsSection />

      {/* Story Section */}
      <StorySection />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-transparent">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍜</span>
            <span className="font-serif text-lg font-bold text-foreground">Chow Mein</span>
          </div>
          <p className="text-muted-foreground text-sm">
            A celebration of noodles, spices, and global culinary fusion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

