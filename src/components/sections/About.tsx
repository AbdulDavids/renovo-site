import { CheckCircle2, ShieldCheck, MapPin, Wrench } from "lucide-react";
import { lazy, Suspense } from "react";

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

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Cape Town's Re-enameling Experts</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Renovo Cape is Cape Town's trusted restoration and re-enameling specialist. With over 60 years of combined experience, we deliver quality resurfacing, restoration, and re-enameling services across the Western Cape.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              {/* Coverage Map */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Coverage</h4>
                <Suspense fallback={
                  <div className="w-full h-[450px] bg-muted rounded-xl flex items-center justify-center">
                    <p className="text-muted-foreground">Loading map...</p>
                  </div>
                }>
                  <ServiceMapInteractive />
                </Suspense>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Based in Parow • Serving a 50km+ radius across the Western Cape
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/renovo/bath-process-worker.jpeg"
                alt="Professional re-enameling and restoration specialist at work in Cape Town"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-xl border max-w-xs">
              <p className="font-bold text-2xl text-primary mb-1">60+</p>
              <p className="text-muted-foreground">Years Combined Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

