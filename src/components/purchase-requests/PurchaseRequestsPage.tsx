'use client';

import { useI18n } from '@/i18n/I18nProvider';
import ProductWorkflowPage from '@/components/product/ProductWorkflowPage';
import { Check, CircleDot, FileCheck2, FileText, Route, ShieldCheck } from 'lucide-react';

const featureIcons = [FileText, Route, CircleDot, FileCheck2, ShieldCheck, Check];

export default function PurchaseRequestsPage() {
  const { messages } = useI18n();

  return <ProductWorkflowPage page={messages.product.purchaseRequests} featureIcons={featureIcons} />;
}
