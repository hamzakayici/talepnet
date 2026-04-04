import BudgetManagementPage from '@/components/budget-management/BudgetManagementPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Budget Management | TalepNET',
  'Connect cost centers, fiscal years, approvals, and spend visibility to build budget-aware procurement in TalepNET.',
  'https://www.talepnet.com/budget-management',
);

const page = () => {
  return <BudgetManagementPage />;
};

export default page;
