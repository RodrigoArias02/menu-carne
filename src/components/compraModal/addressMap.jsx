import { useState, useEffect } from "react";
import { MapIcon, UbicationIcon, LocationIcon } from "../../utils/icons";
import MapComponent from "./mapComponent.jsx";
import "./addressMap.css";

function AddressMap() {
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState(-38.5550); // Default Necochea
  const [longitude, setLongitude] = useState(-58.7400);
  const [isSearching, setIsSearching] = useState(false);
 
  useEffect(() => {
    console.log("Datos de entrega:", {
      street,
      number,
      latitude,
      longitude,
    });
  }, [street, number, latitude, longitude]);

  // Función para buscar dirección con Photon
  const handleSearch = async () => {
    setError("");

    // 1. Validaciones iniciales
    if (!street.trim() || !number.trim()) {
      setError("Por favor, completa la calle y la altura.");
      return;
    }

    setIsSearching(true);

    try {
      // Detectamos si el usuario ya escribió "calle". Si no, se la sumamos al principio.
      const streetClean = street.trim();
      const hasCalle = streetClean.toLowerCase().includes("calle");
      const formattedStreet = hasCalle ? streetClean : `Calle ${streetClean}`;

      // 2. Concatenamos la dirección final para buscar en la API
      const fullAddress = `${formattedStreet} ${number.trim()}, Necochea`;
      const bbox = "-58.8100,-38.6000,-58.6400,-38.5100";

      const res = await fetch(
        `https://photon.komoot.io/api/?q=${encodeURIComponent(fullAddress)}&bbox=${bbox}`,
      );

      if (!res.ok) throw new Error("Error en la búsqueda");

      const data = await res.json();

      // 3. Si Photon encontró el lugar, actualizamos el mapa
      if (data.features && data.features.length > 0) {
        const [lon, lat] = data.features[0].geometry.coordinates;

        // Actualizamos las coordenadas del mapa
        setLatitude(lat);
        setLongitude(lon);
        setError("");
      } else {
        setError("No se encontró la ubicación exacta en Necochea/Quequén.");
      }
    } catch (err) {
      console.error("Hubo un problema:", err);
      setError("Error al conectar con el servidor de mapas.");
    } finally {
      setIsSearching(false);
    }
  };

  // Manejador de cambio de posición del marcador
  const handleMarkerDragEnd = (newLat, newLon) => {
  setLatitude(newLat);
  setLongitude(newLon);
};

  return (
    <section className="section-address-map">
      <div className="div-address">
        <h3>
          <span>
            <UbicationIcon />
          </span>
          Dirección de entrega
        </h3>

        <div className="address-search">
          <section className="address-section-inputs">
            <div className="div-input">
              <label>Calle</label>
              <div className="input">
                <input
                  type="text"
                  placeholder="Ej: Calle 74"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
            </div>
            <div className="div-input">
              <label>Altura</label>
              <div className="input">
                <input
                  type="text"
                  placeholder="Ej: 1234"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
          </section>

          <div className="address-buttons-group">
            <button
              type="button"
              onClick={handleSearch}
              disabled={!street.trim() || !number.trim() || isSearching}
              className="btn-search"

            >
              <span>
                <LocationIcon />
              </span>
              {isSearching ? "Buscando..." : "Cargar posicion en el mapa"}
            </button>

          </div>
        </div>

        {/* Muestra mensajes de error si la validación falla */}
        {error && (
          <p
            className="error-message"
            style={{ color: "red", fontSize: "14px", marginTop: "10px" }}
          >
            {error}
          </p>
        )}
      </div>

      <div className="div-map">
        <h3>
          <span>
            <MapIcon />
          </span>
          Ubicación en el mapa
        </h3>

        {/* Componente de mapa interactivo con Leaflet */}
        <MapComponent
       
          latitude={latitude}
          longitude={longitude}
          onMarkerDragEnd={handleMarkerDragEnd}
        />
      </div>
    </section>
  );
}

export default AddressMap;
