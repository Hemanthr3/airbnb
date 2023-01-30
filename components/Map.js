import React, { useCallback, useRef, useState } from "react";
import Map ,{Marker,Popup} from "react-map-gl";
import { getCenter } from "geolib";
import EmojiPicker from 'emoji-picker-react';


const MapComponent = ({ searchResult }) => {

  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  const initialViewState = {
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  };

  return (
    <Map
      mapStyle="mapbox://styles/hemanthr3/cldj4n9y7003o01s06vrhidj3"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={initialViewState}
    >
      {searchResult.map((result)=>(
        <div key={result.long}>
          <Marker
          longitude={result.long}
          latitude={result.lat}
          anchor="bottom"
          >
          <p className="cursor-pointer text-2xl animate-bounce bg-red-700">📌</p>
          </Marker>
        </div>
      ))}
    </Map>
  );
};

export default MapComponent;
