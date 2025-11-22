import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, ArrowRight } from "lucide-react";

const faqCategories = [
  {
    category: "General Questions",
    questions: [
      {
        question: "Can you fix a cracked sink?",
        answer: "Yes, we specialize in repairing cracked sinks, basins, and counter-tops. Our expert repair service fixes chips, cracks, and holes in all types of sanitaryware including porcelain, enamel, acrylic, and ceramic sinks. The repair is durable, waterproof, and comes with a warranty. We can fix hairline cracks to large structural damage."
      },
      {
        question: "How much does bath re-enameling cost?",
        answer: "Bath re-enameling costs 50-70% less than replacement - typically saving you thousands of rands. The exact cost depends on the bath size, material, condition, and any repairs needed. Most standard baths cost between R2,500-R4,500 to resurface. Contact us for a free, no-obligation quote. We provide transparent pricing with no hidden fees."
      },
      {
        question: "Is bath resurfacing worth it?",
        answer: "Absolutely! Bath resurfacing is worth it because it costs 50-70% less than replacement, takes only 3-5 hours instead of days, avoids plumbing work and tile damage, and comes with a 5-year warranty. Your resurfaced bath will look brand new and last 10-15 years with proper care. It's the smart, cost-effective alternative to replacing a bath."
      },
      {
        question: "What materials can you resurface?",
        answer: "We can resurface and re-enamel acrylic, enamel, cast iron, fibreglass, porcelain, ceramic, and steel baths, sinks, tiles, and counter-tops. Our premium coating adheres to all sanitaryware materials and is available in multiple colors to match your bathroom or kitchen."
      },
      {
        question: "What areas do you serve?",
        answer: "We serve all of Cape Town and the entire Western Cape, including Southern and Northern Suburbs, Stellenbosch, and surrounding areas within a 50km+ radius from our Parow office. We provide on-site and off-site restoration services across the region."
      }
    ]
  },
  {
    category: "Bath Resurfacing & Re-enameling",
    questions: [
      {
        question: "How long does bath resurfacing last?",
        answer: "Bath resurfacing lasts 10-15 years or more with proper care. We provide a 5-year warranty on all bathtub reglazing work. The longevity depends on proper maintenance - use non-abrasive cleaners, avoid harsh chemicals, and wipe down after use. Many of our resurfaced baths from 15+ years ago still look great."
      },
      {
        question: "What is the best bath resurfacing company in Cape Town?",
        answer: "Renovo Cape is the best bath resurfacing company in Cape Town with over 60 years of combined experience. We offer a 5-year warranty on all work, use premium materials, serve the entire Western Cape, and have hundreds of satisfied customers. Our expert technicians deliver professional results that make old baths look new."
      },
      {
        question: "How long does the resurfacing process take?",
        answer: "Most bath resurfacing jobs take 3-5 hours to complete. The surface needs 24-48 hours of curing time before use. We work efficiently to minimize disruption to your home. For larger projects or multiple fixtures, we'll provide a detailed timeline."
      },
      {
        question: "Can I change the color of my bath?",
        answer: "Yes! Bath resurfacing is a great opportunity to change your bath color. We offer a range of standard colors including white, almond, bone, and more. You can update your bathroom's look without the expense of replacement."
      },
      {
        question: "Is bath resurfacing better than replacement?",
        answer: "Bath resurfacing is often the better choice because it's 50-70% cheaper, takes only hours instead of days, requires no plumbing work, avoids tile/wall damage, and is environmentally friendly. The result looks like a brand new bath at a fraction of the cost and hassle."
      },
      {
        question: "What's the difference between resurfacing, re-enameling, and refinishing?",
        answer: "These terms are often used interchangeably. They all refer to the process of applying a new coating to restore the surface of a bath, sink, or tile. At Renovo Cape, we use 're-enameling' and 'resurfacing' to describe our professional restoration process."
      }
    ]
  },
  {
    category: "Repairs & Restoration",
    questions: [
      {
        question: "How do you fix peeling bath coating?",
        answer: "To fix peeling bath coating, we completely remove the old failing coating, repair any underlying damage, thoroughly prepare the surface, and apply a new premium coating. This is more effective than patching and ensures a durable, long-lasting finish. The process takes 3-5 hours and comes with a 5-year warranty."
      },
      {
        question: "Can you repair cracked bath enamel?",
        answer: "Yes, we can repair cracked bath enamel using specialized techniques. We stabilize the crack to prevent spreading, fill with structural repair compound, sand smooth, and refinish to match the original enamel. The repair is waterproof, durable, and virtually invisible. We repair cracks in porcelain, enamel, acrylic, and cast iron baths."
      },
      {
        question: "How do you make an old bath look new?",
        answer: "We make old baths look new through professional bath resurfacing. The process includes: removing old coatings, repairing all chips and cracks, deep cleaning, surface preparation, applying premium enamel coating, and finishing with a smooth, glossy surface. The result looks and feels like a brand new bath at a fraction of replacement cost."
      },
      {
        question: "Do you repair chipped baths?",
        answer: "Yes, we specialize in repairing chipped baths, basins, and shower trays. We fix chips of all sizes, from small nicks to large damaged areas. The repair is color-matched and blends seamlessly with the original surface. All chip repairs are included in our resurfacing service or can be done as a standalone repair."
      },
      {
        question: "Can you fix holes in baths?",
        answer: "Yes, we can repair holes and deep damage in baths, sinks, and other sanitaryware. We use structural repair techniques that are stronger than the original material. The repair is then refinished to match the surrounding surface perfectly."
      },
      {
        question: "How do you repair cracks in sinks?",
        answer: "We repair cracks using a multi-step process: thoroughly clean the area, stabilize the crack to prevent spreading, fill with specialized repair compound, sand smooth, and refinish to match. The repair is waterproof, durable, and virtually invisible when complete."
      },
      {
        question: "Can cracked tiles be repaired?",
        answer: "Yes, we can repair cracked tiles or resurface the entire tile surface without removal. Tile resurfacing is faster and more cost-effective than retiling. We can also change the color and update the look of your bathroom or kitchen tiles."
      }
    ]
  },
  {
    category: "Process & Warranty",
    questions: [
      {
        question: "What is your warranty?",
        answer: "We provide a comprehensive 5-year warranty on all re-enameling work. This covers defects in materials and workmanship. The warranty requires proper care and maintenance - we'll provide detailed care instructions after completion."
      },
      {
        question: "Do you work on-site or off-site?",
        answer: "We offer both on-site and off-site restoration services. Most bath resurfacing is done on-site for convenience. Smaller items like basins or counter-tops can be taken to our workshop if preferred. We'll recommend the best approach for your specific project."
      },
      {
        question: "How do I care for my resurfaced bath?",
        answer: "Care is simple: use non-abrasive cleaners (avoid scouring powders), clean with soft cloths or sponges, avoid dropping heavy objects, don't use bath mats with suction cups for the first month, and wipe down after use. We provide detailed care instructions with every job."
      },
      {
        question: "When can I use my bath after resurfacing?",
        answer: "You can use your bath 24-48 hours after resurfacing, once the coating has fully cured. We'll give you specific timing based on temperature and humidity. It's important to wait the full curing time for the best long-term results."
      },
      {
        question: "Do you offer free quotes?",
        answer: "Yes, we provide free, no-obligation quotes for all our services. Contact us via WhatsApp, phone, or email, and we'll arrange to assess your needs and provide transparent pricing. There are no hidden fees or surprise charges."
      }
    ]
  },
  {
    category: "Other Services",
    questions: [
      {
        question: "Can you restore a rusted bath?",
        answer: "Yes, we can restore rusted baths, especially cast iron baths. We remove all rust, treat the metal to prevent future rusting, repair any damage, and apply a new enamel coating. The restored bath will look brand new and be protected from future rust. This is much cheaper than replacing a cast iron bath."
      },
      {
        question: "What are cheap bath repair options?",
        answer: "Bath resurfacing is the most cost-effective repair option, costing 50-70% less than replacement. For minor damage, we offer chip repair, crack repair, and polishing services. These targeted repairs are even more affordable. All our work comes with a warranty. Contact us for a free quote to see how affordable professional bath repair can be."
      },
      {
        question: "What is the alternative to replacing a bath?",
        answer: "Bath resurfacing (also called bathtub reglazing or re-enameling) is the best alternative to replacing a bath. It costs 50-70% less, takes only hours instead of days, avoids plumbing work, prevents tile damage, and delivers a like-new result with a 5-year warranty. It's the smart choice for landlords, homeowners, and renovators."
      },
      {
        question: "Do you offer bath resurfacing for rentals?",
        answer: "Yes, we offer excellent bath resurfacing services for rental properties. It's the perfect solution for landlords because it's affordable, fast (minimal tenant disruption), durable (5-year warranty), and makes old baths look new. We can resurface multiple units at discounted rates. Contact us for rental property pricing."
      },
      {
        question: "Can you resurface tiles without removing them?",
        answer: "Yes, we can resurface bathroom and kitchen tiles without removing them. This saves time, money, and the mess of retiling. We can change the color, repair damaged tiles, and create a smooth, durable new surface. It's a cost-effective way to update your space."
      },
      {
        question: "Do you respray kitchen cupboards?",
        answer: "Yes, we provide professional kitchen and bedroom cupboard respraying services. We can transform worn cupboards with modern, durable finishes in any color. It's a cost-effective alternative to replacing cupboards and can completely update your kitchen's look."
      },
      {
        question: "Can you restore counter-tops?",
        answer: "Yes, we resurface and restore kitchen counters, bathroom vanities, and sink counter-tops. We can repair damaged surfaces in marble, granite, laminate, and other materials. Counter-top restoration is much more affordable than replacement."
      },
      {
        question: "Do you polish old baths and sinks?",
        answer: "Yes, we offer professional polishing services for baths, sinks, basins, and toilets. Polishing can restore the shine to worn sanitaryware and is often combined with minor repairs. It's a great way to refresh fixtures that are in good condition but have lost their luster."
      }
    ]
  }
];

const FAQ = () => {
  useDocumentMeta({
    title: "FAQ - Frequently Asked Questions | Bath Resurfacing & Sink Repair | Renovo Cape",
    description: "Answers to common questions about bath resurfacing, sink repair, re-enameling, and restoration services in Cape Town. Learn about costs, process, warranty, and materials.",
    keywords: "bath resurfacing faq, sink repair questions, re-enameling cost, how long does bath resurfacing last, can you fix cracked sink, bath restoration questions, tile resurfacing faq, counter top restoration",
    ogTitle: "FAQ - Bath Resurfacing & Restoration Questions | Renovo Cape",
    ogDescription: "Get answers about bath resurfacing, sink repair, costs, warranty, and our restoration process in Cape Town.",
    ogUrl: "https://renovo.co.za/faq",
    canonical: "https://renovo.co.za/faq"
  });

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans antialiased">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 justify-center">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span>/</span>
                <span>FAQ</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get answers to common questions about bath resurfacing, sink repair, re-enameling, 
                and restoration services in Cape Town.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold tracking-tight mb-6 text-primary">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full bg-card rounded-lg border p-4">
                    {category.questions.map((faq, questionIndex) => (
                      <AccordionItem key={questionIndex} value={`item-${categoryIndex}-${questionIndex}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
                Learn More About Our Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  to="/services/bath-resurfacing"
                  className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    Bath Resurfacing
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about our professional bath resurfacing and re-enameling services.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link 
                  to="/services/cracked-sink-repair"
                  className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    Cracked Sink Repair
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find out how we fix cracked sinks, chipped baths, and damaged basins.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link 
                  to="/about-us"
                  className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    About Us
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about our 60+ years of experience and 5-year warranty.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <a 
                  href="/#contact"
                  className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    Contact Us
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get in touch for a free quote or to ask more questions.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Contact us
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Can't find the answer you're looking for? Get in touch with our team and 
                we'll be happy to help.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/27611990191?text=Hi%20Renovo%20Cape%2C%20I%20have%20a%20question%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
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
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;

