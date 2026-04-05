'use client';

import { useI18n } from '@/i18n/I18nProvider';
import ProductManagementPage from '@/components/product/ProductManagementPage';
import {
  Building2,
  Check,
  CircleGauge,
  ClipboardCheck,
  FileSpreadsheet,
  LayoutGrid,
  Mail,
  MessageSquareShare,
  PackageCheck,
  PackageSearch,
  RadioTower,
  Search,
  ShieldCheck,
  ShoppingCart,
  UserRound,
  Users,
} from 'lucide-react';

const featureIcons = [
  Building2,
  ShieldCheck,
  UserRound,
  FileSpreadsheet,
  ShoppingCart,
  Mail,
  RadioTower,
  ClipboardCheck,
  Users,
  PackageSearch,
  PackageCheck,
  MessageSquareShare,
  Check,
  Search,
  CircleGauge,
  LayoutGrid,
];

export default function SupplierManagementPage() {
  const { messages } = useI18n();

  return (
    <ProductManagementPage
      page={messages.product.supplierManagement}
      flowId="supplier-workflows"
      featureIcons={featureIcons}
      theme="teal"
    />
  );
}
