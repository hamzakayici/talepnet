'use client';

import { useI18n } from '@/i18n/I18nProvider';
import ProductExecutionPage from '@/components/product/ProductExecutionPage';
import {
  BadgePercent,
  CircleDollarSign,
  ClipboardList,
  Eye,
  FileText,
  LayoutGrid,
  ScanSearch,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  TriangleAlert,
  Waypoints,
} from 'lucide-react';

const featureIcons = [
  FileText,
  Waypoints,
  ShieldCheck,
  ClipboardList,
  BadgePercent,
  LayoutGrid,
  Eye,
  ShoppingCart,
  ScanSearch,
  TriangleAlert,
  TrendingUp,
  CircleDollarSign,
];

export default function ContractManagementPage() {
  const { messages } = useI18n();

  return (
    <ProductExecutionPage
      page={messages.product.contractManagement}
      flowId="contract-management-flow"
      featureIcons={featureIcons}
      theme="blue"
    />
  );
}
