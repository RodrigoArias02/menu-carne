import { useEffect, useRef, forwardRef } from "react";
import { MapContainer, TileLayer, Marker, useMap, Polygon } from "react-leaflet";
import { zonaGratis, zonaIntermedia, zonaQuequen } from "../../utils/shipping.js";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Corregir iconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapUpdater = ({ latitude, longitude }) => {
  const map = useMap();

  useEffect(() => {
    if (latitude && longitude) {
      map.setView([latitude, longitude], map.getZoom());
    }
  }, [latitude, longitude, map]);

  return null;
};


const MapComponent = forwardRef(({ latitude, longitude, onMarkerDragEnd }, ref) => {
    const markerRef = useRef(null);

    useEffect(() => {
      if (markerRef.current) {
        markerRef.current.setLatLng([latitude, longitude]);
      }
    }, [latitude, longitude]);

    const handleMarkerDragEnd = (event) => {
      const { lat, lng } = event.target.getLatLng();
      if (onMarkerDragEnd) {
        onMarkerDragEnd(lat, lng);
      }
    };

    return (
      <MapContainer
        ref={ref}
        center={[latitude || 0, longitude || 0]}
        zoom={13}
        style={{ height: "150px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          ref={markerRef}
          position={[latitude || 0, longitude || 0]}
          draggable={true}
          eventHandlers={{
            dragend: handleMarkerDragEnd,
          }}
        />
        <Polygon
          positions={zonaGratis}
          pathOptions={{
              color: "green",
              fillOpacity: 0.2,
          }}
      />

        <Polygon
          positions={zonaIntermedia}
          pathOptions={{
              color: "orange",
              fillOpacity: 0.2,
          }}
      />
              <Polygon
          positions={zonaQuequen}
          pathOptions={{
              color: "red",
              fillOpacity: 0.2,
          }}
      />


        <MapUpdater latitude={latitude} longitude={longitude} />
      </MapContainer>
    );
  }
);

MapComponent.displayName = "MapComponent";

export default MapComponent;
