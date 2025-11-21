import { MapPin, CheckCircle } from "lucide-react";

const ServiceCoverageMap = () => {
  const areas = [
    "Cape Town CBD",
    "Parow",
    "Stellenbosch",
    "Somerset West",
    "Paarl",
    "Bellville",
    "Durbanville",
    "Constantia",
    "Sea Point",
    "Camps Bay",
    "Claremont",
    "Rondebosch",
  ];

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-lg border bg-gradient-to-br from-primary/5 via-background to-primary/10 p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-primary/10 p-3 rounded-full">
          <MapPin className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-xl mb-2">Western Cape Service Coverage</h4>
          <p className="text-muted-foreground">
            Professional restoration and re-enameling services across Cape Town and surrounding areas
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {areas.map((area, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-primary/10 hover:border-primary/30 transition-colors"
          >
            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm font-medium">{area}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-primary/10">
        <p className="text-sm text-muted-foreground text-center">
          <span className="font-semibold text-foreground">Based in Parow</span> • Serving a 50km+ radius across the Western Cape
        </p>
      </div>
    </div>
  );
};

export default ServiceCoverageMap;

