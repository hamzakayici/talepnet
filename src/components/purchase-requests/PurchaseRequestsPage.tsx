'use client';

import { useI18n } from '@/i18n/I18nProvider';
import ProductWorkflowPage from '@/components/product/ProductWorkflowPage';
import { Check, CircleDot, FileCheck2, FileText, Route, ShieldCheck } from 'lucide-react';

const featureIcons = [FileText, Route, CircleDot, FileCheck2, ShieldCheck, Check];

export default function PurchaseRequestsPage() {
  const { messages } = useI18n();

  const customPageData = {
    ...messages.product.purchaseRequests,
    heroImage: '/images/req-intro-hero.png',
    introImage: '/images/req-intro-custom.jpg',
    testimonialImage: '/images/req-test-custom.jpg',
  };

  return <ProductWorkflowPage page={customPageData} featureIcons={featureIcons} />;
}
