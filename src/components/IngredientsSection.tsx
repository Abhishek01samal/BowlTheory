
import { RevealImageList } from "@/components/ui/reveal-images";

export const IngredientsSection = () => {
    return (
        <section id="ingredients" className="py-20 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
                {/* Interactive Reveal List */}
                <div className="mb-20">
                    <RevealImageList />
                </div>
            </div>
        </section>
    );
};
