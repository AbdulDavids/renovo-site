import { lazy, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Bath, CheckCircle2, ArrowRight } from "lucide-react";

const ServiceMapInteractive = lazy(() => import("@/components/ui/service-map-interactive"));

const benefits = [
  "Cost-effective - 50-70% cheaper than replacement",
  "Fast turnaround - completed in 3-5 hours",
  "5-year warranty on all work",
  "Works on acrylic, enamel, cast iron & fibreglass",
  "Choose from multiple colors",
  "Minimal disruption to your home",
];

const materials = [
  { name: "Acrylic Baths", description: "Lightweight modern baths commonly found in newer homes" },
  { name: "Enamel Baths", description: "Traditional steel or iron baths with enamel coating" },
  { name: "Cast Iron Baths", description: "Heavy-duty vintage and Victorian-style baths" },
  { name: "Fibreglass Baths", description: "Composite material baths and shower units" },
];

const BathResurfacing = () => {
  useDocumentMeta({
    title: "Renovo Cape | Bath Resurfacing Cape Town - Re-enameling & Refinishing",
    description: "Professional bath resurfacing and re-enameling in Cape Town. Restore acrylic, enamel, cast iron & fibreglass baths. 50-70% cheaper than replacement. 5-year warranty. Free quotes.",
    keywords: "bath resurfacing cape town, bath re-enameling, bath refinishing, resurface bath, bath restoration, acrylic bath repair, enamel bath resurfacing, cast iron bath restoration, fibreglass bath repair, bath resurfacing cost, bath resurfacing near me",
    ogTitle: "Renovo Cape | Bath Resurfacing Cape Town",
    ogDescription: "Professional bath resurfacing & re-enameling. 50-70% cheaper than replacement. 5-year warranty. Free quotes.",
    ogUrl: "https://renovo.co.za/services/bath-resurfacing",
    canonical: "https://renovo.co.za/services/bath-resurfacing"
  });

  // Add Service and Image structured data for rich results
  useEffect(() => {
    const serviceStructuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Bath Resurfacing & Re-enameling",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Renovo Cape",
        "url": "https://renovo.co.za",
        "telephone": "+27742025700",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Parow",
          "addressRegion": "Western Cape",
          "addressCountry": "ZA"
        }
      },
      "areaServed": {
        "@type": "State",
        "name": "Western Cape, South Africa"
      },
      "description": "Professional bath resurfacing and re-enameling services in Cape Town. We restore acrylic, enamel, cast iron, and fibreglass baths to look brand new at 50-70% less than replacement cost. 5-year warranty included.",
      "offers": {
        "@type": "Offer",
        "priceRange": "$$",
        "availability": "https://schema.org/InStock"
      },
      "image": {
        "@type": "ImageObject",
        "contentUrl": "https://renovo.co.za/renovo/bath-after-restored-1.jpeg",
        "url": "https://renovo.co.za/renovo/bath-after-restored-1.jpeg",
        "name": "Professional Bath Resurfacing Result - Cape Town",
        "description": "Fully restored bath with pristine white enamel finish showcasing flawless results after complete resurfacing and re-enameling by Renovo Cape",
        "creator": {
          "@type": "Organization",
          "name": "Renovo Cape"
        },
        "creditText": "Renovo Cape",
        "copyrightNotice": "© Renovo Cape. All rights reserved."
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(serviceStructuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans antialiased">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span>/</span>
                <span>Bath Resurfacing</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Bath Resurfacing & Re-enameling Cape Town
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your worn, chipped, or discolored bath with professional resurfacing. 
                We restore acrylic, enamel, cast iron, and fibreglass baths to look brand new - 
                at a fraction of the cost of replacement.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/27611990191?text=Hi%20Renovo%20Cape%2C%20I%27d%20like%20a%20free%20quote%20for%20bath%20resurfacing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+27742025700"
                  className="inline-flex items-center gap-2 bg-muted text-foreground hover:bg-muted/80 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Call: 074 202 5700
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What is Bath Resurfacing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">What is Bath Resurfacing?</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Bath resurfacing (also called bath re-enameling or bath refinishing) is the process 
                    of applying a new coating to your existing bath surface. This transforms worn, 
                    stained, chipped, or outdated baths into beautiful, like-new fixtures.
                  </p>
                  <p>
                    Our professional resurfacing process involves thorough cleaning, surface preparation, 
                    repair of any chips or cracks, and application of a high-quality, durable coating. 
                    The result is a smooth, glossy finish that looks and feels like a brand new bath.
                  </p>
                  <p>
                    Bath resurfacing is the smart alternative to expensive bath replacement. You save 
                    50-70% compared to the cost of removing and installing a new bath, plus you avoid 
                    the mess and disruption of major bathroom renovation work.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/renovo/bath-after-restored-1.jpeg"
                  alt="Professional bath resurfacing result in Cape Town"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Why Choose Bath Resurfacing?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-background p-6 rounded-lg border">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials We Work With */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Bath Materials We Resurface
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {materials.map((material, index) => (
                <div key={index} className="bg-card border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Bath className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-lg">{material.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{material.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Our Bath Resurfacing Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Inspection</h3>
                <p className="text-sm text-muted-foreground">
                  We assess your bath's condition and discuss color options
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Preparation</h3>
                <p className="text-sm text-muted-foreground">
                  Deep cleaning and repair of any chips or cracks
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Resurfacing</h3>
                <p className="text-sm text-muted-foreground">
                  Application of premium coating in your chosen color
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Curing</h3>
                <p className="text-sm text-muted-foreground">
                  24-48 hours curing time, then ready to use
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
              Bath Resurfacing Service Area
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              We provide professional bath resurfacing services throughout Cape Town and the Western Cape
            </p>
            <div className="max-w-4xl mx-auto">
              <Suspense fallback={
                <div className="w-full h-[450px] bg-muted rounded-xl flex items-center justify-center">
                  <p className="text-muted-foreground">Loading map...</p>
                </div>
              }>
                <ServiceMapInteractive />
              </Suspense>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Restore Your Bath?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get a free, no-obligation quote for bath resurfacing. Transform your bathroom 
              at a fraction of replacement cost.
            </p>
            <a
              href="https://wa.me/27611990191?text=Hi%20Renovo%20Cape%2C%20I%27d%20like%20a%20free%20quote%20for%20bath%20resurfacing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get Free Quote on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BathResurfacing;

