'use client';
import 'leaflet/dist/leaflet.css';
import { TileLayer } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';

const position: [number, number] = [39.9334, 32.8597]; // Ankara, Türkiye

const Map = () => {
  return (
    <MapContainer className="h-full w-full" center={position} zoom={6}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default Map;
