import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bath, Eraser, Hammer, PaintBucket, Sparkles, Grid } from "lucide-react";

const services = [
  {
    title: "Bath Re-enameling Cape Town",
    description: "Professional bath resurfacing and re-enameling. Restore your bath, jacuzzi, or shower tray to look brand new. 5-year warranty on all work.",
    icon: Bath,
  },
  {
    title: "Bath Restoration & Chip Repairs",
    description: "Expert repair of chips, cracks, and holes in baths and basins. Fast, affordable restoration services across the Greater Cape Town Area.",
    icon: Hammer,
  },
  {
    title: "Cupboard Respraying",
    description: "Transform your kitchen and bedroom cupboards with professional respraying. Modern finishes that breathe new life into your home.",
    icon: PaintBucket,
  },
  {
    title: "Counter-Top Restoration",
    description: "Resurface and restore kitchen and bathroom counters. Durable, cost-effective alternative to replacement.",
    icon: Eraser,
  },
  {
    title: "Tile Resurfacing",
    description: "Professional tile resurfacing without removal. Update old bathroom and kitchen tiles across the Western Cape.",
    icon: Grid,
  },
  {
    title: "Bath & Sink Polishing",
    description: "Restore the shine to your bathroom fixtures. Professional polishing services that bring back the original luster.",
    icon: Sparkles,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Bath Re-enameling & Restoration Services</h2>
          <p className="text-lg text-muted-foreground">
            Professional bath resurfacing, re-enameling, and restoration services across the Western Cape. All our re-enameling work comes with a 5-year warranty.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-lg border-primary/10 hover:border-primary/30">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

