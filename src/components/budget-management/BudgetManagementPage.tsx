'use client';

import { useI18n } from '@/i18n/I18nProvider';
import ProductManagementPage from '@/components/product/ProductManagementPage';
import {
  BarChart3,
  Building2,
  CalendarClock,
  Check,
  CircleDollarSign,
  ClipboardList,
  GitBranchPlus,
  Lock,
  Network,
  PieChart,
  ShieldCheck,
  Users,
  Wallet,
} from 'lucide-react';

const featureIcons = [
  Building2,
  Network,
  Wallet,
  Users,
  CalendarClock,
  Lock,
  ShieldCheck,
  ClipboardList,
  GitBranchPlus,
  CircleDollarSign,
  ShieldCheck,
  GitBranchPlus,
  Check,
  PieChart,
  BarChart3,
  BarChart3,
];

export default function BudgetManagementPage() {
  const { messages } = useI18n();

  return (
    <ProductManagementPage
      page={messages.product.budgetManagement}
      flowId="budget-workflow"
      featureIcons={featureIcons}
      theme="green"
    />
  );
}
