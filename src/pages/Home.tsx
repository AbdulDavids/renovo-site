import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const Home = () => {
  useDocumentMeta({
    title: "Renovo Cape | Bath Resurfacing Cape Town | Bathtub Reglazing & Re-enameling",
    description: "Best bath resurfacing company in Cape Town. Expert bathtub reglazing, bath re-enameling & bathroom restoration. Fix peeling bath coating, cracked enamel & make old baths look new. Acrylic, cast iron & enamel bath repair. 60+ years experience. 5-year warranty. Alternative to replacing a bath.",
    keywords: "bath resurfacing cape town, bathtub resurfacing, bath re enameling, bath reglazing, bathtub reglazing, bathroom resurfacing, enamel bath repair, bath restoration, bathtub repair services, bath coatings, cast iron bath repair, acrylic bath repair, resurfacing contractors, bath re enameling cape town, bathtub repair cape town, bath restoration western cape, bath enamel repair near me, southern suburbs bath repair, cape town bathroom restoration, fix peeling bath coating, repair cracked bath enamel, make old bath look new, restore rusted bath, cheap bath repair options, alternative to replacing a bath, best bath resurfacing company cape town",
    ogTitle: "Renovo Cape | Bath Resurfacing & Bathtub Reglazing Cape Town",
    ogDescription: "Best bath resurfacing company in Cape Town. Make your old bath look new. Expert bathtub reglazing & re-enameling. 60+ years experience. 5-year warranty.",
    ogUrl: "https://renovo.co.za/",
    canonical: "https://renovo.co.za/"
  });

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans antialiased">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

