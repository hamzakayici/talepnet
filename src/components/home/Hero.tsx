'use client';
import heroBg from '@public/images/ns-img-150.png';
import heroImage from '@public/images/ns-img-151.png';
import heroBgDark from '@public/images/ns-img-dark-104.png';
import heroImageDark from '@public/images/ns-img-dark-105.png';
import { Play } from 'lucide-react';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { useModal } from '@/hooks/useModal';

const Hero = () => {
  const { isOpen, openModal, closeModal, modalRef, contentRef } = useModal();

  return (
    <section className="relative flex h-screen min-h-[700px] flex-col overflow-hidden">
      <RevealAnimation delay={0.3}>
        <div className="absolute top-20 left-1/2 -translate-x-1/2">
          <Image src={heroBg} alt="Hero background pattern" className="block object-cover dark:hidden" />
          <Image src={heroBgDark} alt="Hero background pattern" className="hidden object-cover dark:block" />
        </div>
      </RevealAnimation>
      <div className="main-container relative z-10 flex flex-1 flex-col pt-[120px] md:pt-[140px] lg:pt-[140px] xl:pt-[140px] 2xl:pt-[200px]">
        {/* Metin ve Butonlar */}
        <div className="relative z-20 flex shrink-0 flex-col items-center justify-center">
          <div className="mx-auto mb-6 w-full max-w-[1075px] space-y-4 text-center md:mb-10 lg:mb-14">
            <RevealAnimation delay={0.2}>
              <h1>
                Akıllı otomasyon ve izlenebilirlikle <span className="text-primary-500 font-extrabold">satın alma süreçlerinizi</span> dönüştürün
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[650px]">
                TalepNET, her ölçekteki işletmenin satın alma süreçlerini yapay zeka destekli iş akışları,
                izlenebilirlik ve tedarikçi ağı ile otomatikleştirmesini sağlar.
              </p>
            </RevealAnimation>
          </div>
          <ul className="mb-8 flex w-[90%] flex-col gap-4 text-center max-md:items-center max-md:justify-center md:mb-10 lg:mb-14 md:w-auto md:flex-row">
            <RevealAnimation delay={0.4}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="https://app.talepnet.com/"
                  className="btn btn-xl btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark w-[90%] md:w-auto"
                  aria-label="Ücretsiz başlayın">
                  Ücretsiz Başlayın
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <li className="w-full sm:w-auto">
                <button
                  onClick={openModal}
                  type="button"
                  className="btn btn-xl dark:btn-white-dark hover:btn-secondary btn-white dark:hover:btn-accent w-[90%] md:w-auto flex items-center justify-center gap-3 group"
                  aria-label="Videoyu izleyin">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] border-current transition-transform duration-300 group-hover:scale-110">
                    <Play className="size-[14px] fill-current ml-[2px]" />
                  </div>
                  <span>Videoyu İzleyin</span>
                </button>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        {/* Dashboard Görseli — kalan alanı doldurarak viewport'un dibine oturur */}
        <div className="relative mt-auto flex-1">
          <RevealAnimation delay={0.6}>
            <figure className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-none scale-[1.2] origin-bottom sm:scale-[1.25] md:scale-[1.3] lg:scale-[1.3] xl:scale-[1.35] 2xl:scale-[2.2]">
              <Image
                src={heroImage}
                alt="TalepNET Dashboard"
                className="size-full object-cover object-top dark:hidden"
              />
              <Image
                src={heroImageDark}
                alt="TalepNET Dashboard"
                className="hidden size-full object-cover object-top dark:block"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>

      <dialog 
        ref={modalRef} 
        className="modal-close fixed inset-0 z-[9999] flex h-full w-full max-w-none items-center justify-center bg-black/50 p-4 backdrop-blur-md md:p-8"
        onClick={(e) => {
          if (e.target === modalRef.current) {
            closeModal();
          }
        }}
      >
        <div ref={contentRef} className="relative aspect-video w-[95vw] overflow-hidden rounded-[20px] bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 md:w-[90vw] lg:w-[85vw] xl:w-[80vw] 2xl:max-w-[1600px]">
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
              className="size-full"
              src="https://www.youtube.com/embed/bypL2ka9mEw?autoplay=1"
              title="TalepNET Tanıtım Videosu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </dialog>
    </section>
  );
};

export default Hero;
