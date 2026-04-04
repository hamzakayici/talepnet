import ApprovalsPage from '@/components/approvals/ApprovalsPage';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Approval Workflow | TalepNET',
  'Manage approval workflows with structured routing, full visibility, and complete decision history in TalepNET.',
  'https://www.talepnet.com/solutions/approval-workflow',
);

const page = () => <ApprovalsPage />;

export default page;
