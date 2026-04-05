'use client';

import { useI18n } from '@/i18n/I18nProvider';
import RevealAnimation from '../animation/RevealAnimation';

const ContactInfo = () => {
  const { messages } = useI18n();
  const contact = messages.contact;

  return (
    <section
      className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-20 xl:pt-[180px] xl:pb-[100px]"
      aria-label="Contact Information and Form">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading  */}
          <div className="mx-auto max-w-[680px] space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2>{contact.hero.title}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>{contact.hero.description}</p>
            </RevealAnimation>
          </div>
          <div className="flex items-center justify-center">
            {/* contact form  */}
            <RevealAnimation
              delay={0.3}
              className="dark:bg-background-6 mx-auto w-full max-w-[847px] rounded-4xl bg-white p-6 md:p-8 lg:p-11">
              <form action="#" method="POST" className="space-y-8">
                {/* name and phone number  */}
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                  {/*  name */}
                  <div className="w-full space-y-2 lg:max-w-[364px]">
                    <label
                      htmlFor="fullname"
                      className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                      {contact.form.fullName}
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder={contact.form.fullNamePlaceholder}
                      required={true}
                      autoComplete="name"
                      className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                    />
                  </div>
                  {/* number */}
                  <div className="w-full max-w-[364px] space-y-2">
                    <label
                      htmlFor="number"
                      className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                      {contact.form.phoneNumber}
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      placeholder={contact.form.phoneNumberPlaceholder}
                      required={true}
                      autoComplete="tel"
                      className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                    />
                  </div>
                </div>
                {/* email  */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                    {contact.form.emailAddress}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={contact.form.emailAddressPlaceholder}
                    required={true}
                    autoComplete="email"
                    className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                  />
                </div>
                {/* subject  */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                    {contact.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder={contact.form.subjectPlaceholder}
                    required={true}
                    className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]"
                  />
                </div>
                {/* message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                    {contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder={contact.form.messagePlaceholder}
                    required={true}
                    className="dark:bg-background-6 dark:border-stroke-7 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary dark:focus-visible:border-stroke-4/20 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent w-full rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none"
                    defaultValue={''}
                  />
                </div>
                {/* submit button */}
                <button
                  type="submit"
                  className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent w-full first-letter:uppercase before:content-none">
                  {contact.form.submit}
                </button>
              </form>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
