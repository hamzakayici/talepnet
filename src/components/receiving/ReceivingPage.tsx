'use client';

import { useI18n } from '@/i18n/I18nProvider';
import ProductExecutionPage from '@/components/product/ProductExecutionPage';
import {
  Check,
  ClipboardCheck,
  FileDigit,
  FileText,
  History,
  PackageCheck,
  PackageOpen,
  Scale,
  ShieldCheck,
  Truck,
  Warehouse,
} from 'lucide-react';

const featureIcons = [
  PackageOpen,
  ClipboardCheck,
  Truck,
  Check,
  Scale,
  FileDigit,
  FileText,
  ShieldCheck,
  Warehouse,
  History,
  History,
  PackageCheck,
];

export default function ReceivingPage() {
  const { messages } = useI18n();

  return (
    <ProductExecutionPage
      page={messages.product.receiving}
      flowId="receiving-flow"
      featureIcons={featureIcons}
      theme="blue"
    />
  );
}
