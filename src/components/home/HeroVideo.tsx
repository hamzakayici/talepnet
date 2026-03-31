'use client';

import heroImageLight from '@public/images/ns-img-285.jpg';
import heroImageDark from '@public/images/ns-img-dark-194.jpg';
import Image from 'next/image';
import { useModal } from '@/hooks/useModal';

export default function HeroVideo() {
  const { isOpen, openModal, closeModal, modalRef, contentRef } = useModal();

  return (
    <>
      <figure 
        onClick={openModal}
        className="group relative mx-auto w-full cursor-pointer overflow-hidden rounded-t-2xl md:max-w-[640px] lg:max-w-[1240px]"
      >
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 transition-colors duration-500 group-hover:bg-black/30">
          <button 
            type="button" 
            className="relative flex size-20 items-center justify-center rounded-full border border-white/20 bg-primary/90 text-white shadow-[0_0_40px_rgba(134,79,254,0.4)] transition-transform duration-500 group-hover:scale-110 md:size-24"
            aria-label="Videoyu Oynat"
          >
            <span className="absolute inset-0 block animate-ping rounded-full bg-primary/40"></span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 size-8 md:size-10">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        <Image
          src={heroImageLight}
          alt="TalepNET Satın Alma Yönetim Paneli"
          className="w-full dark:hidden"
        />
        <Image
          src={heroImageDark}
          alt="TalepNET Satın Alma Yönetim Paneli"
          className="hidden w-full dark:block"
        />
      </figure>

      <dialog 
        ref={modalRef} 
        className="modal-close fixed inset-0 z-[9999] m-auto w-full max-w-5xl bg-transparent p-4 backdrop:bg-black/90 md:p-8"
        onClick={(e) => {
          if (e.target === modalRef.current) {
            closeModal();
          }
        }}
      >
        <div ref={contentRef} className="relative w-full aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
          <button 
            onClick={closeModal} 
            className="absolute top-4 right-4 z-50 rounded-full bg-black/40 p-2 text-white/70 transition-colors hover:bg-black/60 hover:text-white md:top-6 md:right-6"
            aria-label="Kapat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6 md:size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {isOpen && (
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
              title="TalepNET Tanıtım Videosu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </dialog>
    </>
  );
}
