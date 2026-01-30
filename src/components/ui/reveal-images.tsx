import { cn } from "@/lib/utils";

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative h-fit w-fit overflow-visible py-8">
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground transition-all duration-500 group-hover:opacity-40 group-hover:text-primary">
        {text}
      </h1>
      <div className={container}>
        <div className={effect}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12"
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "Crispy Noodles",
      images: [
        {
          src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&auto=format&fit=crop&q=60",
          alt: "Crispy fried noodles",
        },
        {
          src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200&auto=format&fit=crop&q=60",
          alt: "Noodles in wok",
        },
      ],
    },
    {
      text: "Spicy Sauces",
      images: [
        {
          src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=200&auto=format&fit=crop&q=60",
          alt: "Chili sauce",
        },
        {
          src: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=200&auto=format&fit=crop&q=60",
          alt: "Spices and peppers",
        },
      ],
    },
    {
      text: "Fresh Vegetables",
      images: [
        {
          src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&auto=format&fit=crop&q=60",
          alt: "Fresh vegetables",
        },
        {
          src: "https://images.unsplash.com/photo-1557844352-761f2565b576?w=200&auto=format&fit=crop&q=60",
          alt: "Colorful peppers",
        },
      ],
    },
    {
      text: "Wok Magic",
      images: [
        {
          src: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200&auto=format&fit=crop&q=60",
          alt: "Wok cooking",
        },
        {
          src: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=200&auto=format&fit=crop&q=60",
          alt: "Stir fry flames",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-1 rounded-sm bg-white/10 backdrop-blur-md px-8 py-4">
      <h3 className="text-sm font-bold uppercase text-primary tracking-widest mb-4">
        The Art of Chow Mein
      </h3>
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}

export { RevealImageList, RevealImageListItem };
