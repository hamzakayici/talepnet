import RefundPolicyContent from '@/components/refund-policy/RefundPolicyContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Refund Policy | TalepNET',
};

const RefundPolicy = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <RefundPolicyContent />
    </main>
  );
};

export default RefundPolicy;
