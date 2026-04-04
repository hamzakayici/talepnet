import ContactInfo from '@/components/contact-page/ContactInfo';
import LocationsSection from '@/components/shared/LocationsSection';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us | TalepNET',
};

const ContactUs = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ContactInfo />
      <LocationsSection
        className="bg-white dark:bg-background-6"
        eyebrow="Our Locations"
        title="Where TalepNET operates"
        description="You can use this page for general inquiries, product conversations, and business contact. Our locations are included here for a clearer company presence."
      />
    </main>
  );
};

export default ContactUs;
