'use client';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../shared/Map'), { ssr: false });

const AboutMap = () => {
  return (
    <div className="relative h-[300px] w-full lg:h-[566px]">
      
      {/* Harita Katmanı (Vignette Effect) - Sadece Harita Maskeleniyor */}
      <div 
        className="absolute inset-0 pointer-events-auto"
        style={{
          maskImage: 'radial-gradient(50% 50% at 50% 50%, black 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(50% 50% at 50% 50%, black 50%, transparent 100%)'
        }}
      >
        <Map />
      </div>
      
      {/* Dashed Grid Overlay (Maske dışında / Daha belirgin / Köşelerde solmuyor) */}
      <div className="absolute inset-0 pointer-events-none z-[1000]">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dashed-grid" width="48" height="48" patternUnits="userSpaceOnUse" patternTransform="translate(24, 24)">
              <path 
                d="M 48 0 L 0 0 0 48" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
                className="text-secondary/25 dark:text-white/20" 
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dashed-grid)" />
        </svg>
      </div>

    </div>
  );
};

AboutMap.displayName = 'AboutMap';
export default AboutMap;
