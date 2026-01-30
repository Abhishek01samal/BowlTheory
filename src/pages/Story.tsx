import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";

const Story = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Full Screen Hero */}
      <HeroSection />

      {/* Story Content */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-12 text-center">
            A Dish That Traveled the <span className="text-gradient-flame">World</span>
          </h2>

          <div className="space-y-12">
            {/* Origin */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Canton, China — The Origin
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  "Chāu-mèing" (炒麵) means "stir-fried noodles" in Taishanese. Born in the Cantonese kitchens of Southern China, this humble dish was created by street vendors who needed to serve quick, satisfying meals to workers and travelers.
                </p>
              </div>
            </div>

            {/* India */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-turmeric/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-turmeric" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Kolkata, India — The Fusion
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chinese immigrants in Kolkata created the Indo-Chinese fusion we know today. They added local spices — garam masala, green chilies, and turmeric — transforming the dish into something entirely new. The Tangra neighborhood remains the heart of this culinary innovation.
                </p>
              </div>
            </div>

            {/* Global */}
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-scallion/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-scallion" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Around the World — The Variations
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Today, you'll find unique interpretations everywhere — from American-Chinese crispy noodles to Japanese Yakisoba, Filipino Pancit Canton to Indonesian Mie Goreng. Each culture has embraced and reinvented this versatile dish.
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="my-16 p-8 rounded-3xl bg-secondary/30 border-l-4 border-primary">
            <p className="font-serif text-2xl text-foreground italic mb-4">
              "The dish has truly traveled the world, with each culture adapting it to local tastes, available ingredients, and culinary traditions."
            </p>
            <cite className="text-muted-foreground">— The Art of Chow Mein</cite>
          </blockquote>

          {/* Navigation */}
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-secondary/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">🍜</span>
            <span className="font-serif text-xl font-bold text-foreground">Chow Mein</span>
          </div>
          <p className="text-muted-foreground text-sm">
            A celebration of noodles, spices, and the beautiful fusion of cultures.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Story;
