import { CheckCircle2, ShieldCheck, MapPin, Wrench, Award, Users } from "lucide-react";
import { lazy, Suspense, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const ServiceMapInteractive = lazy(() => import("@/components/ui/service-map-interactive"));

const features = [
  {
    icon: Wrench,
    title: "Expert Craftsmanship",
    description: "With over 60 years of combined experience, our highly qualified team delivers expert advice and premium results for all your home renovation needs."
  },
  {
    icon: ShieldCheck,
    title: "5-Year Warranty",
    description: "We stand by our work. Enjoy peace of mind with a comprehensive 5-year warranty on all re-enameling services."
  },
  {
    icon: CheckCircle2,
    title: "Quality Assured",
    description: "We use only quality products and proven techniques to ensure a durable, long-lasting finish."
  },
  {
    icon: MapPin,
    title: "Serving All of Cape Town",
    description: "We cover Cape Town, Southern and Northern Suburbs, Stellenbosch, and the entire Western Cape, bringing professional house renovation services to your doorstep."
  }
];

const AboutUs = () => {
  useDocumentMeta({
    title: "About Us | Renovo Cape - 60+ Years Restoration Experience",
    description: "Renovo Cape is Cape Town's premier restoration and re-enameling specialist. Over 60 years of combined experience, 5-year warranty on all re-enameling work, serving the entire Western Cape.",
    keywords: "about renovo cape, restoration company cape town, re-enameling experts, bath restoration western cape, professional restoration services",
    ogTitle: "About Renovo Cape | Cape Town's Re-enameling Experts",
    ogDescription: "Over 60 years of combined experience in restoration and re-enameling. 5-year warranty on all work. Serving all of Cape Town and Western Cape.",
    ogUrl: "https://renovo.co.za/about-us",
    canonical: "https://renovo.co.za/about-us"
  });

  // Add structured data for better Google understanding
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "LocalBusiness",
        "@id": "https://renovo.co.za/#organization",
        "name": "Renovo Cape",
        "description": "Renovo Cape is Cape Town's premier restoration and re-enameling specialist, serving homeowners and businesses across the Western Cape. We deliver quality products and service for restoration work, with our highly qualified team bringing over 60 years of combined experience to every project. We provide expert advice and premium results for bath, basin and toilet re-enameling, counter-top restoration, shower tray and tile resurfacing, kitchen and bedroom cupboard respraying, and epoxy coating. All our re-enameling work comes with a comprehensive 5-year warranty.",
        "url": "https://renovo.co.za",
        "telephone": "+27742025700",
        "email": "renovocape@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Parow",
          "addressRegion": "Western Cape",
          "addressCountry": "ZA"
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": -33.9249,
            "longitude": 18.4241
          },
          "geoRadius": "50000"
        },
        "slogan": "Restoration at its best!",
        "foundingDate": "2015",
        "priceRange": "$$",
        "paymentAccepted": "Cash, Bank Transfer",
        "openingHours": "Mo-Fr 08:00-17:00",
        "image": "https://renovo.co.za/renovo/logo-square.jpeg"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans antialiased">
      <Header />
      <main className="flex-1">
        {/* Hero Section with About Us Header */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8 text-center">About Us</h1>
              
              {/* Company Description - Optimized for Google's "In their own words" */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed text-foreground">
                  Renovo Cape is Cape Town's premier restoration and re-enameling specialist, 
                  serving homeowners and businesses across the Western Cape. We deliver quality 
                  products and service for restoration work, with our highly qualified team bringing 
                  over 60 years of combined experience to every project. We provide expert advice 
                  and premium results for bath, basin and toilet re-enameling, counter-top restoration, 
                  shower tray and tile resurfacing, kitchen and bedroom cupboard respraying, and 
                  epoxy coating. All our re-enameling work comes with a comprehensive 5-year warranty. 
                  We offer free no-obligation quotes and perform restoration works both on-site and 
                  off-site across the entire Western Cape region. Our vision is simple: Quality Advice, 
                  Quality Products, and Quality Service.
                </p>
              </div>
              
              <p className="text-xl text-muted-foreground text-center">
                Cape Town's trusted restoration and re-enameling specialists. 
                We bring decades of experience and unwavering commitment to quality to every project.
              </p>
            </div>
          </div>
        </section>

        {/* Main About Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Why Choose Renovo Cape
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Our name "Renovo" means "to renew" or "to restore" in Latin, which perfectly 
                    captures our mission: bringing new life to your bathrooms, kitchens, and living 
                    spaces. We don't just repair surfaces – we transform them, delivering results 
                    that look and feel brand new while being far more cost-effective than replacement.
                  </p>
                  <p>
                    With over 60 years of combined experience, our highly qualified team has mastered 
                    the art and science of restoration. We use only quality products and proven 
                    techniques to ensure a durable, long-lasting finish that you can trust.
                  </p>
                  <p>
                    We serve all of Cape Town, including the Southern and Northern 
                    Suburbs, Stellenbosch, and the entire Western Cape region. Whether you need a 
                    single bath re-enameled or a complete home restoration project, we bring the 
                    same level of expertise and attention to detail to every job.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/renovo/bath-process-worker.jpeg"
                    alt="Professional re-enameling and restoration specialist at work in Cape Town"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="600"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-xl border max-w-xs">
                  <p className="font-bold text-2xl text-primary mb-1">60+</p>
                  <p className="text-muted-foreground">Years Combined Experience</p>
                </div>
              </div>
            </div>

            {/* Our Vision */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Vision</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Quality Advice</h3>
                  <p className="text-muted-foreground">
                    Expert guidance from our experienced team to help you make the best decisions 
                    for your restoration needs.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Quality Products</h3>
                  <p className="text-muted-foreground">
                    We use only premium materials and proven products to ensure lasting, 
                    beautiful results.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Quality Service</h3>
                  <p className="text-muted-foreground">
                    Professional, reliable service from start to finish, with a 5-year warranty 
                    on all re-enameling work.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-12">What Sets Us Apart</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Offer */}
            <div className="mb-20 bg-muted/30 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-8">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Free No Obligation Quote</h3>
                    <p className="text-sm text-muted-foreground">
                      Get a detailed quote with no strings attached. We'll assess your needs and 
                      provide transparent pricing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">On-Site & Off-Site Work</h3>
                    <p className="text-sm text-muted-foreground">
                      We can restore items at your location or in our workshop, depending on what 
                      works best for your project.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">5-Year Warranty</h3>
                    <p className="text-sm text-muted-foreground">
                      All re-enameling work comes with a comprehensive 5-year warranty. We stand 
                      behind our craftsmanship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Western Cape Coverage</h3>
                    <p className="text-sm text-muted-foreground">
                      We serve all of Cape Town and the entire Western Cape region, bringing 
                      professional restoration to your doorstep.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Process */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Contact Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Reach out via WhatsApp, phone, or email for a free consultation.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Assessment</h3>
                  <p className="text-sm text-muted-foreground">
                    We assess your restoration needs and provide expert recommendations.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Restoration</h3>
                  <p className="text-sm text-muted-foreground">
                    Our skilled team performs the work with precision and care.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Enjoy</h3>
                  <p className="text-sm text-muted-foreground">
                    Enjoy your beautifully restored surfaces with a 5-year warranty.
                  </p>
                </div>
              </div>
            </div>

            {/* Coverage Map */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Our Service Area</h2>
              <div className="max-w-4xl mx-auto">
                <Suspense fallback={
                  <div className="w-full h-[450px] bg-muted rounded-xl flex items-center justify-center">
                    <p className="text-muted-foreground">Loading map...</p>
                  </div>
                }>
                  <ServiceMapInteractive />
                </Suspense>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Based in Parow • Serving a 50km+ radius across the Western Cape
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get your free, no-obligation quote today. Let's discuss how we can restore your 
              home to its former glory.
            </p>
            <a
              href="https://wa.me/27611990191?text=Hi%20Renovo%20Cape%2C%20I%27d%20like%20a%20free%20quote%20for%20restoration%20work."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;

