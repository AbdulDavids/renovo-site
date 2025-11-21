import {
  Map,
  MapCircle,
  MapMarker,
  MapPopup,
  MapTileLayer,
  MapZoomControl,
  MapLocateControl,
} from "@/components/ui/map";
import { MapPin } from "lucide-react";

const ServiceCoverageMapInteractive = () => {
  // Parow (office location)
  const parrowPosition: [number, number] = [-33.8906, 18.5936];
  
  // Coverage radius in meters (50km)
  const coverageRadius = 50000;

  return (
    <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg border">
      <Map
        center={parrowPosition}
        zoom={9}
        className="h-full w-full"
      >
        <MapTileLayer name="Light" />
        <MapZoomControl />
        <MapLocateControl />
        
        {/* Coverage Area Circle */}
        <MapCircle
          center={parrowPosition}
          radius={coverageRadius}
          className="fill-primary/20 stroke-primary stroke-[2]"
        >
          <MapPopup>
            <div className="p-2">
              <p className="font-semibold text-sm mb-1">Western Cape Coverage Area</p>
              <p className="text-xs text-muted-foreground">
                Professional restoration and re-enameling services across Cape Town and surrounding areas
              </p>
            </div>
          </MapPopup>
        </MapCircle>

        {/* Office Location Marker */}
        <MapCircle
          center={parrowPosition}
          radius={500}
          className="fill-destructive/40 stroke-destructive stroke-[2]"
        />

        <MapMarker
          position={parrowPosition}
          icon={<MapPin className="size-6 text-destructive" />}
          alt="Renovo Cape Office Location"
        >
          <MapPopup>
            <div className="p-2">
              <p className="font-semibold text-sm mb-1">Renovo Cape Office</p>
              <p className="text-xs text-muted-foreground">
                Parow, Western Cape
              </p>
            </div>
          </MapPopup>
        </MapMarker>
      </Map>
    </div>
  );
};

export default ServiceCoverageMapInteractive;

