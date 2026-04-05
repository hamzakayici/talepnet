'use client';

import { useI18n } from '@/i18n/I18nProvider';
import ProductWorkflowPage from '@/components/product/ProductWorkflowPage';
import { CircleDot, FileSearch, History, Route, Settings2, ShieldCheck } from 'lucide-react';

const featureIcons = [Settings2, Route, FileSearch, CircleDot, History, ShieldCheck];

export default function ApprovalsPage() {
  const { messages } = useI18n();

  return <ProductWorkflowPage page={messages.product.approvals} featureIcons={featureIcons} />;
}
