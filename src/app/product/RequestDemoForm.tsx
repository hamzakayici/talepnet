'use client';

import { useState } from 'react';

export default function RequestDemoForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-[28px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-500/20">
          <svg className="h-7 w-7 text-primary-300" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-xl font-normal text-white">Teşekkürler! Kısa süre içinde sizinle iletişime geçeceğiz.</p>
        <p className="text-sm text-white/55">Ekibimiz genellikle bir iş günü içinde dönüş yapar.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
    >
      <p className="mb-1 text-sm font-medium text-white/80">Size özel demonuzu planlayın</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Ad*"
          required
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-primary-400 focus:bg-primary-500/5"
        />
        <input
          type="text"
          placeholder="Soyad*"
          required
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-primary-400 focus:bg-primary-500/5"
        />
      </div>
      <input
        type="email"
        placeholder="İş E-postası*"
        required
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-primary-400 focus:bg-primary-500/5"
      />
      <input
        type="text"
        placeholder="Şirket Adı*"
        required
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-primary-400 focus:bg-primary-500/5"
      />
      <input
        type="tel"
        placeholder="Telefon Numarası"
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-primary-400 focus:bg-primary-500/5"
      />
      <select
        required
        defaultValue=""
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/75 outline-none transition-colors focus:border-primary-400 focus:bg-primary-500/5"
        style={{ colorScheme: 'dark' }}
      >
        <option value="" disabled>Şirket Büyüklüğü*</option>
        <option value="1-50">1-50 çalışan</option>
        <option value="51-200">51-200 çalışan</option>
        <option value="201-500">201-500 çalışan</option>
        <option value="501-1000">501-1.000 çalışan</option>
        <option value="1000+">1.000+ çalışan</option>
      </select>
      <button
        type="submit"
        className="btn btn-xl btn-secondary w-full text-center"
      >
        <span>Demo Planlayın</span>
      </button>
      <p className="text-xs text-center text-white/35">
        Göndererek{' '}
        <a href="/terms" className="underline hover:text-white/60">Hizmet Şartlarımızı</a>
        {' '}ve{' '}
        <a href="/privacy" className="underline hover:text-white/60">Gizlilik Politikamızı</a>{' '}kabul etmiş olursunuz.
      </p>
    </form>
  );
}
