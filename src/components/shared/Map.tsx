'use client';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Marker, TileLayer, useMap } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import { useEffect } from 'react';

const position: [number, number] = [38.5, 33.0]; // Türkiye Merkezi ayarlaması

const locations = [
  {
    name: 'İstanbul',
    coordinates: [41.0082, 28.9784] as [number, number],
  },
  {
    name: 'Antalya',
    coordinates: [36.8969, 30.7133] as [number, number],
  },
];

const createCustomIcon = (name: string) => {
  return L.divIcon({
    className: 'custom-pulsing-marker bg-transparent border-none', // Leaflet default stillerini sıfırla
    html: `
      <div class="relative flex items-center justify-center z-50">
        <!-- Pulse/Glow animasyonu (Dış çember) -->
        <div class="absolute inline-flex h-12 w-12 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full border border-primary-500/60"></div>
        <!-- Işıklı iç halka -->
        <div class="absolute inline-flex h-6 w-6 rounded-full border-2 border-primary-500/80 bg-primary-100/40 backdrop-blur-sm"></div>
        <!-- Tam merkez (Nokta) -->
        <div class="relative inline-flex h-2 w-2 rounded-full bg-primary-600 shadow-[0_0_10px_rgba(20,184,166,0.5)] dark:bg-primary-500"></div>
        
        <!-- Yandan Sağlıklı Duran Tooltip/Label -->
        <div class="absolute left-6 ml-2 whitespace-nowrap rounded-full border border-stroke-3 bg-white/90 px-4 py-2 text-[13px] tracking-wide font-medium text-secondary shadow-xl backdrop-blur-md transition-all dark:bg-background-5/90 dark:border-stroke-7 dark:text-accent">
          <span class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            ${name} Ofisi
          </span>
        </div>
      </div>
    `,
    iconSize: [0, 0], // Marker merkezini div'deki relative flex container tam ortası kabul et
    iconAnchor: [0, 0],
  });
};

const MapController = () => {
  const map = useMap();
  
  useEffect(() => {
    let currentIndex = 0;
    
    // Sinematik otonom tur rotası: İstanbul'a yaklaş -> Uzaklaş -> Antalya'ya yaklaş -> Uzaklaş
    const targets = [
       { coords: locations[0].coordinates, zoom: 8 }, // İstanbul'a odaklan
       { coords: position, zoom: 5.5 },               // Tüm Türkiye'yi göster (geri çekil)
       { coords: locations[1].coordinates, zoom: 8 }, // Antalya'ya odaklan
       { coords: position, zoom: 5.5 },               // Tüm Türkiye'yi göster (geri çekil)
    ];

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % targets.length;
      const target = targets[currentIndex];
      // Haritayı yumuşak bir şekilde hedefe doğru pan & zoom yaparak süzdür
      map.flyTo(target.coords, target.zoom, { animate: true, duration: 2.5, easeLinearity: 0.25 });
    }, 6000); // Her 6 saniyede bir sonraki hedefe geç (2.5sn uçuş + 3.5sn okuma/bekleme süresi)

    return () => clearInterval(interval);
  }, [map]);

  return null;
};

const Map = () => {
  return (
    <MapContainer 
      className="h-full w-full" 
      center={position} 
      zoom={5.5} 
      zoomControl={false}
      scrollWheelZoom={false}
      dragging={false}
      touchZoom={false}
      doubleClickZoom={false}
      boxZoom={false}
      keyboard={false}
      attributionControl={false}
    >
      <TileLayer 
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      
      {/* Otonom sinematik kontrolcü */}
      <MapController />

      {locations.map((location) => (
        <Marker 
          key={location.name} 
          position={location.coordinates} 
          icon={createCustomIcon(location.name)}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
