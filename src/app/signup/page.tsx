import SignupHero from '@/components/authentication/SignupHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Kayıt Ol | TalepNET',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <SignupHero />
    </main>
  );
};
export default page;
