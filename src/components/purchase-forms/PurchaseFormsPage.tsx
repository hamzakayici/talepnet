'use client';

import { useI18n } from '@/i18n/I18nProvider';
import ProductExecutionPage from '@/components/product/ProductExecutionPage';
import {
  Check,
  ClipboardCheck,
  FileInput,
  GitCompareArrows,
  History,
  Mail,
  NotebookPen,
  PackageSearch,
  Route,
  ScanSearch,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

const featureIcons = [
  FileInput,
  GitCompareArrows,
  ClipboardCheck,
  Mail,
  ScanSearch,
  ShieldCheck,
  History,
  Check,
  TrendingUp,
  PackageSearch,
  NotebookPen,
  Route,
];

export default function PurchaseFormsPage() {
  const { messages } = useI18n();

  return (
    <ProductExecutionPage
      page={messages.product.purchaseForms}
      flowId="purchasing-flow"
      featureIcons={featureIcons}
      theme="green"
    />
  );
}
