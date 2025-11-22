import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { CheckCircle2, Hammer, AlertCircle, ArrowRight } from "lucide-react";

const commonProblems = [
  { problem: "Cracked sink basin", solution: "Structural crack repair with seamless finish" },
  { problem: "Chipped bath edge", solution: "Chip filling and color-matched refinishing" },
  { problem: "Damaged counter-top", solution: "Surface repair and resurfacing" },
  { problem: "Broken shower tray", solution: "Crack repair and re-enameling" },
  { problem: "Chipped toilet", solution: "Porcelain chip repair and polishing" },
  { problem: "Cracked vanity basin", solution: "Structural repair with warranty" },
];

const repairTypes = [
  {
    title: "Crack Repairs",
    description: "Fix structural cracks in sinks, baths, and basins. We repair hairline cracks to large splits, restoring strength and appearance.",
  },
  {
    title: "Chip Repairs",
    description: "Repair chips and gouges in porcelain, enamel, acrylic, and ceramic surfaces. Color-matched to blend seamlessly.",
  },
  {
    title: "Hole Repairs",
    description: "Fill and repair holes and deep damage in sanitaryware. Structural repair that's stronger than the original.",
  },
];

const CrackedSinkRepair = () => {
  useDocumentMeta({
    title: "Fix Cracked Sink Cape Town | Sink Repair & Basin Crack Repair | Renovo Cape",
    description: "Expert cracked sink repair in Cape Town. Fix cracked sinks, chipped baths, damaged basins & broken toilets. Fast, affordable repairs with warranty. Porcelain, enamel, acrylic & ceramic repair specialists.",
    keywords: "fix cracked sink, cracked sink repair, sink crack repair, chipped sink repair, basin crack repair, broken sink repair, porcelain sink repair, ceramic sink repair, enamel sink repair, acrylic sink repair, bathroom sink repair cape town, kitchen sink repair, vanity sink repair, fix chipped bath, repair cracked basin",
    ogTitle: "Fix Cracked Sink Cape Town | Renovo Cape",
    ogDescription: "Expert cracked sink repair. Fix cracks, chips & damage in sinks, baths & basins. Fast, affordable with warranty.",
    ogUrl: "https://renovo.co.za/services/cracked-sink-repair",
    canonical: "https://renovo.co.za/services/cracked-sink-repair"
  });

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
                <span>Cracked Sink Repair</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Fix Cracked Sink & Basin Repair Cape Town
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Don't replace - repair! We fix cracked sinks, chipped baths, damaged basins, and 
                broken toilets. Expert repair of porcelain, enamel, acrylic, and ceramic sanitaryware 
                at a fraction of replacement cost.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/27611990191?text=Hi%20Renovo%20Cape%2C%20I%20need%20to%20fix%20a%20cracked%20sink."
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

        {/* Can We Fix It? */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Can You Fix a Cracked Sink?</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Yes! We specialize in repairing cracked sinks, chipped baths, and damaged basins. 
                    Most people don't realize that cracks, chips, and holes in sanitaryware can be 
                    professionally repaired - saving you hundreds or thousands compared to replacement.
                  </p>
                  <p>
                    Our expert repair process fixes the structural damage, then refinishes the surface 
                    so the repair is virtually invisible. We work with all materials including porcelain, 
                    enamel, acrylic, ceramic, and fibreglass.
                  </p>
                  <p>
                    Whether it's a hairline crack in your bathroom sink, a large chip in your bath, 
                    or a broken corner on your vanity basin, we can fix it. The repair is durable, 
                    waterproof, and comes with our warranty.
                  </p>
                </div>
                <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-900 dark:text-amber-100 mb-1">
                        Don't Wait - Cracks Get Worse
                      </p>
                      <p className="text-sm text-amber-800 dark:text-amber-200">
                        A small crack can quickly spread and cause water damage. Get it repaired 
                        early to avoid more expensive problems later.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/renovo/bath-before-damage-closeup.jpeg"
                  alt="Cracked sink before repair - Cape Town"
                  className="rounded-2xl shadow-xl mb-4"
                />
                <img
                  src="/renovo/bath-after-restored-2.jpeg"
                  alt="Repaired sink after restoration - Cape Town"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems We Fix */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Common Problems We Fix
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {commonProblems.map((item, index) => (
                <div key={index} className="bg-background p-6 rounded-lg border">
                  <div className="flex items-start gap-3 mb-3">
                    <Hammer className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <h3 className="font-semibold">{item.problem}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Repairs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Types of Sanitaryware Repairs
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {repairTypes.map((type, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <Hammer className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials We Repair */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Materials We Repair
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {["Porcelain Sinks", "Enamel Baths", "Acrylic Basins", "Ceramic Tiles", "Fibreglass Showers", "Cast Iron Baths", "Steel Sinks", "Composite Counter-tops"].map((material, index) => (
                <div key={index} className="bg-background p-4 rounded-lg border text-center">
                  <CheckCircle2 className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-medium">{material}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Repair vs Replace */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
                Why Repair Instead of Replace?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 text-green-600 dark:text-green-500">
                    ✓ Repair Benefits
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>70-80% cheaper than replacement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Completed in hours, not days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No plumbing work required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Minimal disruption to your home</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Environmentally friendly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Warranty included</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4 text-red-600 dark:text-red-500">
                    ✗ Replacement Costs
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-500 mt-0.5">•</span>
                      <span>Expensive new sink/bath purchase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-500 mt-0.5">•</span>
                      <span>Plumber fees for removal & installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-500 mt-0.5">•</span>
                      <span>Potential tile/wall damage during removal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-500 mt-0.5">•</span>
                      <span>Days without bathroom access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-500 mt-0.5">•</span>
                      <span>Waste disposal costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-500 mt-0.5">•</span>
                      <span>Major disruption and mess</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Need to Fix a Cracked Sink or Chipped Bath?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get expert repair at a fraction of replacement cost. Free quotes, fast service, 
              and warranty included.
            </p>
            <a
              href="https://wa.me/27611990191?text=Hi%20Renovo%20Cape%2C%20I%20need%20to%20fix%20a%20cracked%20sink."
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

export default CrackedSinkRepair;

