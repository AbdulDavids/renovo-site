import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/renovo/logo-background-removed.png" 
                alt="Renovo Cape Logo" 
                className="h-8 w-auto grayscale opacity-70"
              />
              <span className="text-lg font-bold text-foreground">Renovo Cape</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Professional restoration and re-enameling services in Cape Town. Over 60 years of combined experience delivering quality resurfacing and restoration across the Western Cape.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/renovo.cape/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted-foreground/10 hover:bg-primary/10 hover:text-primary p-3 rounded-full transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/RevonoCape" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted-foreground/10 hover:bg-primary/10 hover:text-primary p-3 rounded-full transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@renovo.cape/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-muted-foreground/10 hover:bg-primary/10 hover:text-primary p-3 rounded-full transition-colors"
                aria-label="Follow us on TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>M Thiart: 074 202 5700</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Dean: 062 063 0066</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:renovocape@gmail.com" className="hover:text-primary">renovocape@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Parow, Western Cape</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Renovo Cape. All rights reserved. Crafted with ☕️ by <a href="https://abduldavids.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Abdul Davids</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

