import AccountsPayablePage from '@/components/accounts-payable/AccountsPayablePage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Accounts Payable Automation | TalepNET',
  'Accounts payable automation built on procurement control, approvals, purchase orders, receiving data, supplier visibility, and spend context.',
  'https://www.talepnet.com/solutions/accounts-payable',
);

const page = () => <AccountsPayablePage />;

export default page;
