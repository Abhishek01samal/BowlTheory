import { Navigation } from "@/components/Navigation";
import { RevealImageList } from "@/components/ui/reveal-images";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

const Ingredients = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              The Essentials
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-medium text-foreground mb-6">
              What Makes It <span className="text-gradient-flame">Legendary</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every great chow mein starts with quality ingredients — from the perfect noodle to the freshest vegetables and the most aromatic spices.
            </p>
          </div>

          {/* Interactive Reveal List */}
          <div className="mb-20">
            <RevealImageList />
          </div>

          {/* Ingredient Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-card border border-border">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                🍝 The Noodles
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Traditional chow mein uses egg noodles made from wheat flour, eggs, and water. The perfect noodle should be slightly chewy with a golden color.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Hong Kong style: Thin and crispy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Cantonese: Soft and stir-fried
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Indian Hakka: Thick and spicy
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                🌶️ The Spices
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The flavor profile varies by region. Chinese versions use soy sauce and sesame, while Indian versions add garam masala and green chilies.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-turmeric"></span>
                  Soy sauce & oyster sauce (Chinese)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-turmeric"></span>
                  Schezwan sauce (Indo-Chinese)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-turmeric"></span>
                  Turmeric & garam masala (Indian)
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-background border border-border text-foreground font-medium transition-all duration-300 hover:bg-muted hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Back Home
            </Link>
            <Link
              to="/story"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105"
            >
              Read the Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
