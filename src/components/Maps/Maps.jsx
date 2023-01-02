import React, { useState } from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
  useLoadScript,
} from "@react-google-maps/api";
import { Container } from "./stylesMaps";
import { useMemo } from "react";
import { useCallback } from "react";

const Maps = () => {
  const [searchBoxA, setSearchBoxA] = useState();
  const [searchBoxB, setSearchBoxB] = useState();
  //const [searchBox, setSearchBox] = useState();
  const [map, setMap] = useState();
  //const [markers, setMarkers] = useState([]);

  const [pointA, setPointA] = useState();
  const [pointB, setPointB] = useState();

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const [response, setResponse] = useState();

  const [libraries] = useState(["places"]);

  // const { isLoaded, loadError } = useLoadScript({
  //  id: "google-map-script",
  //  googleMapsApiKey: "AIzaSyCz9MPCxoqyJGDc77kXJAnL2MaFvKy8aVQ",
  // libraries,
  //});

  const position = useMemo(() => ({ lat: -29.911603, lng: -51.185246 }), []);

  const onMapLoad = (map) => {
    setMap(map);
  };

  const onLoadA = (ref) => {
    setSearchBoxA(ref);
  };

  const onLoadB = (ref) => {
    setSearchBoxB(ref);
  };

  const onPlacesChangedA = () => {
    const places = searchBoxA.getPlaces();
    console.log(places);
    const place = places[0];
    const location = {
      lat: place.geometry.location.lat() || 0,
      lng: place.geometry.location.lng() || 0,
    };
    setPointA(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map.panTo(location);
  };

  const onPlacesChangedB = () => {
    const places = searchBoxB.getPlaces();
    console.log(places);
    const place = places[0];
    const location = {
      lat: place.geometry.location.lat() || 0,
      lng: place.geometry.location.lng() || 0,
    };
    setPointB(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map.panTo(location);
  };

  const traceRoute = () => {
    if (pointA && pointB) {
      setOrigin(pointA);
      setDestination(pointB);
    }
  };

  const directionServiceOptions = useMemo(() => {
    return {
      origin,
      destination,
      travelMode: "DRIVING",
    };
  }, [origin, destination]);

  const directionsCallBack = useCallback((res) => {
    if (res !== null && res.status === "OK") {
      setResponse(res);
    } else {
      console.log(res);
    }
  }, []);

  const directionsRendererOptions = useMemo(() => {
    return {
      directions: response,
    };
  }, [response]);

  return (
    <Container>
      <LoadScript
        id="scrip-loader"
        googleMapsApiKey="AIzaSyCz9MPCxoqyJGDc77kXJAnL2MaFvKy8aVQ"
        libraries={libraries}
      >
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={12}
        >
          <div className="address">
            <StandaloneSearchBox
              onLoad={onLoadA}
              onPlacesChanged={onPlacesChangedA}
            >
              <input
                className="addressField"
                placeholder="Digite o endereço inicial"
              />
            </StandaloneSearchBox>
            <StandaloneSearchBox
              onLoad={onLoadB}
              onPlacesChanged={onPlacesChangedB}
            >
              <input
                className="addressField "
                placeholder="Digite o endereço final"
              />
            </StandaloneSearchBox>
            <button onClick={traceRoute}>Traçar rota</button>
          </div>
          {!response && pointA && <Marker position={pointA} />}
          {!response && pointB && <Marker position={pointB} />}

          {origin && destination && (
            <DirectionsService
              options={directionServiceOptions}
              callback={directionsCallBack}
            />
          )}

          {response && directionsRendererOptions && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
        </GoogleMap>
      </LoadScript>
    </Container>
  );
};

export default Maps;
