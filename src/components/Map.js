import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "../data/skateboard-parks.json";

export default function Map(){
    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        width: "100vw",
        height: "100vh",
        zoom: 17
      });
      const [selectedPark, setSelectedPark] = useState(null);
    
      useEffect(() => {
        const listener = e => {
          if (e.key === "Escape") {
            setSelectedPark(null);
          }
        };
        window.addEventListener("keydown", listener);
    
        return () => {
          window.removeEventListener("keydown", listener);
        };
      }, []);
    
      return (
        <div>
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken= "pk.eyJ1Ijoic2F1bXBpaSIsImEiOiJja3RsNW5lb3IwZGpoMnVtajdiY3ZjZnR4In0.-MHBQ-V7AIhrCSWCU2cXrA"
            mapStyle="mapbox://styles/saumpii/cktq62amn2w9617n2hctpi61t"
            onViewportChange={viewport => {
              setViewport(viewport);
            }}
          >
            {parkDate.features.map(park => (
              <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={e => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  <img src="/skateboarding.svg" alt="Skate Park Icon" />
                </button>
              </Marker>
            ))}
    
            {selectedPark ? (
              <Popup
                latitude={selectedPark.geometry.coordinates[1]}
                longitude={selectedPark.geometry.coordinates[0]}
                onClose={() => {
                  setSelectedPark(null);
                }}
              >
                <div>
                  <h2>{selectedPark.properties.NAME}</h2>
                  <p>{selectedPark.properties.DESCRIPTIO}</p>
                </div>
              </Popup>
            ) : null}
          </ReactMapGL>
        </div>
      );
}