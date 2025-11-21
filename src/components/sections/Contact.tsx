import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  const whatsAppUrl = "https://wa.me/27611990191?text=Hi%20Renovo%20Cape%2C%20I%27d%20like%20a%20free%20quote%20for%20restoration%20work.";

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Get Your Free Bath Re-enameling Quote</h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-md">
              Contact Renovo Cape for a free, no-obligation quote for bath resurfacing, re-enameling, and restoration services in Cape Town and the Western Cape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                aria-label="Chat on WhatsApp" 
                href={whatsAppUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <img 
                  alt="Chat on WhatsApp" 
                  src="/renovo/ChatOnWhatsAppButton/WhatsAppButtonGreenLarge.svg" 
                  className="h-12 w-auto"
                />
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground h-12 px-8"
                asChild
              >
                <a href="mailto:renovocape@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Us
                  </h3>
                  <div className="space-y-1 text-primary-foreground/80">
                    <p>M Thiart: <a href="tel:0742025700" className="hover:underline">074 202 5700</a></p>
                    <p>Dean: <a href="tel:0620630066" className="hover:underline">062 063 0066</a></p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Office
                  </h3>
                  <p className="text-primary-foreground/80">
                    Parow, Western Cape<br />
                    South Africa
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email
                  </h3>
                  <p className="text-primary-foreground/80 break-all">
                    <a href="mailto:renovocape@gmail.com" className="hover:underline">
                      renovocape@gmail.com
                    </a>
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    WhatsApp
                  </h3>
                  <p className="text-primary-foreground/80">
                     <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      061 199 0191
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

