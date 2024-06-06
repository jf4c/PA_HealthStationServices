import React, { use, useCallback, useEffect, useRef, useState } from 'react'
import { LoadScript, GoogleMap, Marker, StandaloneSearchBox, Autocomplete, InfoWindow } from '@react-google-maps/api';
import { useRouter } from 'next/navigation';
import { MapsContainer } from './style';

const apiKey = 'AIzaSyD98J7b5A7CPLyhknpxOyBd4ymFJSC52hY';
const libraries: ('places')[] = ['places'];
const mapContainerStyle = {
  height: "500px",
  width: "100%"
};
const center = {
  lat: 40.749933,
  lng: -73.98633
};

interface MapsProps {
  healthStation?: any;
}

export default function Maps(props: MapsProps) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [markerPosition, setMarkerPosition] = useState<google.maps.LatLng | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const infoWindowRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  }, []);

  const onAutocompleteLoad = (autocompleteInstance: google.maps.places.Autocomplete) => {
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) {
        alert("No details available for input: '" + place.name + "'");
        return;
      }

      setSelectedPlace(place);
      setMarkerPosition(place.geometry.location);

      if (place.geometry.viewport) {
        map?.fitBounds(place.geometry.viewport);
      } else {
        map?.setCenter(place.geometry.location);
        map?.setZoom(17);
      }
    }
  };
  
  return (
    <MapsContainer>
      <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
        <div>
          <Autocomplete onLoad={onAutocompleteLoad} onPlaceChanged={onPlaceChanged}>
            <input 
              id="pac-input" 
              type="text" 
              placeholder="Enter a location" 
              ref={inputRef} 
              value={`${props.healthStation?.address?.logradouro} ${props.healthStation?.address?.city} ${props.healthStation?.address?.state}, Brasil`} />
          </Autocomplete>
        </div>
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={13}
          onLoad={onLoad}
        >
        
        {markerPosition && (
          <Marker position={markerPosition}>
            <InfoWindow position={markerPosition}>
              <div id="infowindow-content" ref={infoWindowRef}>
                <span id="place-name" className="title">{selectedPlace?.name}</span><br />
                <span id="place-address">{selectedPlace?.formatted_address}</span>
              </div>
            </InfoWindow>
          </Marker>
        )}
        </GoogleMap>
      </LoadScript>
    </MapsContainer>
    
);
};
