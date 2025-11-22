import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bath, Eraser, Hammer, PaintBucket, Sparkles, Grid, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Bath & Sink Re-enameling",
    description: "Professional bath resurfacing and sink re-enameling for acrylic, enamel, cast iron, and fibreglass. Restore baths, basins, jacuzzis, shower trays, and toilets to look brand new. 5-year warranty on all work.",
    icon: Bath,
    keywords: "bath resurfacing, sink re-enameling, bath refinishing, basin restoration",
    link: "/services/bath-resurfacing",
  },
  {
    title: "Fix Cracked Sinks & Baths",
    description: "Expert repair of cracked sinks, chipped baths, and damaged basins. We fix chips, cracks, and holes in all sanitaryware including counter-tops, shower trays, and toilets. Fast, affordable restoration.",
    icon: Hammer,
    keywords: "fix cracked sink, repair chipped bath, crack repair, chip repair",
    link: "/services/cracked-sink-repair",
  },
  {
    title: "Kitchen & Bedroom Cupboard Respraying",
    description: "Transform worn kitchen and bedroom cupboards with professional respraying. Modern, durable finishes in any color. Cost-effective alternative to replacement.",
    icon: PaintBucket,
    keywords: "cupboard respraying, kitchen cupboard restoration, bedroom cupboard refinishing",
    link: null,
  },
  {
    title: "Counter-Top & Vanity Restoration",
    description: "Resurface and restore kitchen counters, bathroom vanities, and sink counter-tops. Repair damaged surfaces in marble, granite, laminate, and more. Durable, long-lasting results.",
    icon: Eraser,
    keywords: "counter top restoration, vanity resurfacing, sink counter repair",
    link: null,
  },
  {
    title: "Tile & Shower Tray Resurfacing",
    description: "Professional tile resurfacing and shower tray restoration without removal. Update old bathroom and kitchen tiles, repair grout, and restore shower bases across the Western Cape.",
    icon: Grid,
    keywords: "tile resurfacing, shower tray restoration, bathroom tile repair",
    link: null,
  },
  {
    title: "Sanitaryware Polishing & Restoration",
    description: "Restore the shine to worn baths, sinks, basins, and toilets. Professional polishing and restoration services for all sanitaryware materials including porcelain, enamel, and acrylic.",
    icon: Sparkles,
    keywords: "bath polishing, sink restoration, sanitaryware repair, fixture polishing",
    link: null,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Bath Resurfacing, Sink Repair & Re-enameling Services</h2>
          <p className="text-lg text-muted-foreground">
            Fix cracked sinks, chipped baths, and damaged tiles with professional resurfacing and re-enameling. We restore acrylic, enamel, cast iron, and fibreglass sanitaryware across the Western Cape. 5-year warranty on all work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-lg border-primary/10 hover:border-primary/30 flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-base mb-4 flex-1">
                  {service.description}
                </CardDescription>
                {service.link && (
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline mt-auto"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

