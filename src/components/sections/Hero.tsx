import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

const Hero = () => {
  const whatsAppUrl = "https://wa.me/27611990191?text=Hi%20Renovo%20Cape%2C%20I%27d%20like%20a%20free%20quote%20for%20restoration%20work.";

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary w-fit mx-auto lg:mx-0 mb-4">
              Over 60 Years Experience
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="whitespace-nowrap">Restoration{" "}</span>
              <br className="hidden sm:inline" />
              <ContainerTextFlip 
                words={["made easy", "done right", "at its best!"]} 
                className="text-primary whitespace-nowrap"
              />
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground lg:mx-0 mb-8">
              Expert restoration and re-enameling services across the Western Cape. We specialize in resurfacing, restoration, and respraying for bathrooms, kitchens, and more. Transform your home without replacing it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
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
              <Button size="lg" variant="outline" className="text-lg h-12 px-8" asChild>
                <a href="#services">
                  View Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              * 5-Year Warranty on all re-enameling
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[500px] lg:max-w-none"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-muted">
               <img 
                src="/renovo/bath-hero.jpeg" 
                alt="Professional re-enameling and restoration - beautifully restored fixtures" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-xl border max-w-[200px] hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm">Quality Guaranteed</p>
                  <p className="text-xs text-muted-foreground">Professional Finish</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
