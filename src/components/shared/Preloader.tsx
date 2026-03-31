'use client';

import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Scroll bar should be hidden when preloader is active, Optional but good for UX.
    document.body.style.overflow = 'hidden';

    // Start fading out after 2.5 seconds (gives time for video to play)
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2800);

    // Completely remove preloader from DOM after 3.3 seconds
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto'; // Restore scroll
    }, 3300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[999999] flex items-center justify-center bg-white dark:bg-background-6 transition-opacity duration-500 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <video
        autoPlay
        muted
        playsInline
        className="w-[250px] md:w-[350px]"
      >
        <source src="/images/Talep-Net-Logo-Animate.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Preloader;
