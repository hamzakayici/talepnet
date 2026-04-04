'use client';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';

const position: [number, number] = [39.2, 31.8];

const locations = [
  {
    name: 'Istanbul',
    description: 'Talepnet presence in Istanbul',
    coordinates: [41.0082, 28.9784] as [number, number],
  },
  {
    name: 'Antalya',
    description: 'Talepnet presence in Antalya',
    coordinates: [36.8969, 30.7133] as [number, number],
  },
];

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = () => {
  return (
    <MapContainer className="h-full w-full" center={position} zoom={5} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((location) => (
        <Marker key={location.name} position={location.coordinates} icon={markerIcon}>
          <Popup>
            <strong>{location.name}</strong>
            <br />
            {location.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
