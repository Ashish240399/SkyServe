import React from "react";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import icon from "./image/cursor.jpeg";
import L from "leaflet";
import { useState } from "react";
import mapPolygon from "./data/polygon.json";
const Map = () => {
  //   const [location, setLocation] = useState({
  //     lon: "",
  //     lat: "",
  //   });
  const markerIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });
  const position = [17.3517, 78.4458];
  console.log(mapPolygon);
  return (
    <div>
      <MapContainer
        className="map-container"
        center={[17.3517, 78.4458]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=SqX9fvSXvC4TWEdPVOfI"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <GeoJSON data={mapPolygon.features} />
      </MapContainer>
    </div>
  );
};

export default Map;
