import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const images = [
  {
    src: "/renovo/bath-before-severe-damage.jpeg",
    alt: "Bath re-enameling Cape Town - severe damage before restoration",
    label: "Before",
    category: "Process"
  },
  {
    src: "/renovo/bath-mid-restoration.jpeg",
    alt: "Bath resurfacing process Cape Town - restoration in progress",
    label: "In Progress",
    category: "Process"
  },
  {
    src: "/renovo/bath-after-restored-1.jpeg",
    alt: "Bath re-enameling Cape Town - fully restored bath after resurfacing",
    label: "After",
    category: "Result"
  },
  {
    src: "/renovo/bath-before-chips-marked.jpeg",
    alt: "Bath restoration Cape Town - chips marked for repair assessment",
    label: "Assessment",
    category: "Process"
  },
  {
    src: "/renovo/bath-process-worker.jpeg",
    alt: "Professional bath re-enameling specialist Cape Town at work",
    label: "Expertise",
    category: "Team"
  },
  {
    src: "/renovo/bath-after-restored-2.jpeg",
    alt: "Bath resurfacing Cape Town - restored gleaming white bath",
    label: "After",
    category: "Result"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Bath Re-enameling Before & After Gallery</h2>
          <p className="text-lg text-muted-foreground">
            See our bath resurfacing and re-enameling transformations in Cape Town. Real projects showcasing our professional restoration work from severe damage to brand new.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button
                  className="group relative overflow-hidden rounded-xl bg-muted aspect-[4/3] w-full text-left"
                  aria-label={`View ${image.label} image: ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                  <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {image.label}
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

