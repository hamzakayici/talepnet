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
        <p className="text-xl font-normal text-white">Thank you! We will be in touch shortly.</p>
        <p className="text-sm text-white/55">Our team typically responds within one business day.</p>
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
      <p className="text-sm font-medium text-white/80 mb-1">Book your personalized demo</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="First Name*"
          required
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-primary-400 focus:bg-primary-500/5"
        />
        <input
          type="text"
          placeholder="Last Name*"
          required
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-primary-400 focus:bg-primary-500/5"
        />
      </div>
      <input
        type="email"
        placeholder="Work Email*"
        required
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-primary-400 focus:bg-primary-500/5"
      />
      <input
        type="text"
        placeholder="Company Name*"
        required
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-primary-400 focus:bg-primary-500/5"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-primary-400 focus:bg-primary-500/5"
      />
      <select
        required
        defaultValue=""
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/75 outline-none transition-colors focus:border-primary-400 focus:bg-primary-500/5"
        style={{ colorScheme: 'dark' }}
      >
        <option value="" disabled>Company Size*</option>
        <option value="1-50">1–50 employees</option>
        <option value="51-200">51–200 employees</option>
        <option value="201-500">201–500 employees</option>
        <option value="501-1000">501–1,000 employees</option>
        <option value="1000+">1,000+ employees</option>
      </select>
      <button
        type="submit"
        className="btn btn-xl btn-secondary w-full text-center"
      >
        <span>Book a demo</span>
      </button>
      <p className="text-xs text-center text-white/35">
        By submitting, you agree to our{' '}
        <a href="/terms" className="underline hover:text-white/60">Terms of Service</a>
        {' '}and{' '}
        <a href="/privacy" className="underline hover:text-white/60">Privacy Policy</a>.
      </p>
    </form>
  );
}
