import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect } from "react";

const images = [
  {
    src: "/renovo/bath-before-severe-damage.jpeg",
    alt: "Severely damaged bath with extensive chipping and wear showing the condition before professional re-enameling restoration by Renovo Cape",
    label: "Before - Severe Damage",
    category: "Process"
  },
  {
    src: "/renovo/bath-mid-restoration.jpeg",
    alt: "Restoration in progress showing professional grinding and surface preparation during the re-enameling process in Cape Town",
    label: "Restoration in Progress",
    category: "Process"
  },
  {
    src: "/renovo/bath-after-restored-1.jpeg",
    alt: "Fully restored bath with pristine white enamel finish showcasing flawless results after complete resurfacing and re-enameling",
    label: "After - Fully Restored",
    category: "Result"
  },
  {
    src: "/renovo/bath-before-chips-marked.jpeg",
    alt: "Professional damage assessment with chips and imperfections carefully marked before restoration begins",
    label: "Before - Assessment",
    category: "Process"
  },
  {
    src: "/renovo/bath-process-worker.jpeg",
    alt: "Experienced Renovo Cape technician in full safety gear performing professional re-enameling with specialized equipment",
    label: "Expert at Work",
    category: "Team"
  },
  {
    src: "/renovo/bath-after-restored-2.jpeg",
    alt: "Beautifully restored bath gleaming with new white enamel finish demonstrating premium quality restoration craftsmanship",
    label: "After - Perfect Finish",
    category: "Result"
  },
  {
    src: "/renovo/bath-re-enameling.jpg",
    alt: "Elegant freestanding bath with flawless white re-enameling in modern bathroom showcasing professional restoration excellence",
    label: "Freestanding Bath Restored",
    category: "Result"
  },
  {
    src: "/renovo/sink-counter-re-enameling.jpg",
    alt: "Dual basin counter-top with marble-effect finish expertly resurfaced and restored to pristine condition with matching mirror cabinets",
    label: "Counter-Top & Basin After",
    category: "Result"
  },
  {
    src: "/renovo/bath-before-damage-closeup.jpeg",
    alt: "Close-up detail of fixture damage including chips, cracks and surface wear requiring professional re-enameling restoration",
    label: "Before - Damage Detail",
    category: "Process"
  }
];

const Gallery = () => {
  // Add ImageObject structured data for all gallery images
  useEffect(() => {
    const imageStructuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": images.map((image, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "ImageObject",
          "contentUrl": `https://renovo.co.za${image.src}`,
          "url": `https://renovo.co.za${image.src}`,
          "name": image.label,
          "description": image.alt,
          "creator": {
            "@type": "Organization",
            "name": "Renovo Cape"
          },
          "creditText": "Renovo Cape",
          "copyrightNotice": "© Renovo Cape. All rights reserved.",
          "acquireLicensePage": "https://renovo.co.za/#contact",
          "license": "https://renovo.co.za/#contact",
          "isPartOf": {
            "@type": "WebPage",
            "name": "Renovo Cape Gallery - Bath Resurfacing Before & After",
            "url": "https://renovo.co.za/#gallery"
          }
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(imageStructuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Gallery</h2>
          <p className="text-lg text-muted-foreground">
            See our resurfacing and re-enameling transformations in Cape Town. Real projects showcasing our professional restoration work from severe damage to brand new.
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
                    loading="lazy"
                    decoding="async"
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
                  loading="lazy"
                  decoding="async"
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

