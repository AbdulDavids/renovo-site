import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Wajeeha Jattiem",
    location: "Cape Town",
    rating: 5,
    text: "I can't believe how amazing my bath looks! It was badly scratched and stained, but Renovo Cape made it look brand new. The team was professional, kept everything spotless, and the 5-year warranty gives me real peace of mind. Well worth it.",
  },
  {
    name: "Michael van der Merwe",
    location: "Tokai",
    rating: 5,
    text: "I was about to rip out my entire bathroom until I found Renovo Cape. They saved me thousands with their re-enameling service. The results are incredible – you'd never know it wasn't a new installation. Highly recommend them.",
  },
  {
    name: "Elena Koumantarakis",
    location: "Sea Point",
    rating: 5,
    text: "Exceptional work from start to finish. They repaired a deep chip in my basin and resurfaced the shower tray. You honestly can't tell there was ever any damage. The quality and attention to detail are outstanding.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            Trusted by homeowners across the Western Cape for quality restoration work that lasts.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-muted bg-muted/20 flex flex-col">
                <CardHeader className="flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-lg font-medium leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                </CardHeader>
                <CardContent className="pt-0 mt-auto">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

