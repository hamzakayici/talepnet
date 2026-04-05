'use client';

import { useI18n } from '@/i18n/I18nProvider';
import ProductExecutionPage from '@/components/product/ProductExecutionPage';
import {
  FileCheck2,
  FileOutput,
  Files,
  Globe2,
  Mail,
  MapPinned,
  MessageCircleMore,
  PackageCheck,
  PackageOpen,
  RotateCcw,
  Send,
  Truck,
  UserRound,
  XCircle,
} from 'lucide-react';

const featureIcons = [
  PackageOpen,
  FileOutput,
  MapPinned,
  UserRound,
  Mail,
  MessageCircleMore,
  Globe2,
  Send,
  Truck,
  PackageCheck,
  FileCheck2,
  RotateCcw,
  XCircle,
  Files,
];

export default function PurchaseOrdersPage() {
  const { messages } = useI18n();

  return (
    <ProductExecutionPage
      page={messages.product.purchaseOrders}
      flowId="order-workflow"
      featureIcons={featureIcons}
      theme="blue"
    />
  );
}
