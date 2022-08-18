import React from "react";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import icon from "./image/pointer.png";
import L from "leaflet";
import { useState } from "react";
import mapPolygon from "./data/polygon.json";
import { useEffect } from "react";
import Button from "@mui/material/Button";
const Map = () => {
  const [activeArea, setActiveArea] = useState(false);
  const position = [17.3517, 78.4458];
  console.log(mapPolygon);
  const placeStyle = {
    fillColor: "red",
    color: "green",
  };
  const markerIcon = new L.icon({
    iconUrl: icon,
    iconSize: [35, 45],
    iconAnchor: [17, 45],
  });
  const interactionOption = {
    zoomControl: false,
    doubleClickZoom: false,
    dragging: false,
    zoomSnap: false,
    zoomDelta: false,
    trackResize: false,
    touchZoom: false,
    scrollWheelZoom: false,
  };
  return (
    <div className="main-div">
      <div className="default-map">
        <MapContainer
          className="map-container"
          center={position}
          zoom={3}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=SqX9fvSXvC4TWEdPVOfI"
          />
          {activeArea && (
            <div>
              <Marker position={position} icon={markerIcon}></Marker>
              <GeoJSON style={placeStyle} data={mapPolygon.features} />
            </div>
          )}
        </MapContainer>
      </div>
      <div className="image-div">
        <div style={{ marginBottom: "10px" }}>
          <Button
            onClick={() => {
              setActiveArea(!activeArea);
            }}
            variant="contained"
          >
            {activeArea == false ? "See Desired Area" : "Default Map"}
          </Button>
        </div>
        {activeArea ? (
          <div className="photo">
            <MapContainer
              className="map-photo"
              center={position}
              zoom={14}
              scrollWheelZoom={true}
              {...interactionOption}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=SqX9fvSXvC4TWEdPVOfI"
              />
              {/* {activeArea && (
              <div>
                <Marker position={position} icon={markerIcon}></Marker>
              </div>
            )} */}
              <GeoJSON style={placeStyle} data={mapPolygon.features} />
            </MapContainer>
          </div>
        ) : (
          <h2>Select Area to See</h2>
        )}
      </div>
    </div>
  );
};

export default Map;
