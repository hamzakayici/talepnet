'use client';

import { useI18n } from '@/i18n/I18nProvider';
import SupplierFeaturePage from '@/components/supplier/SupplierFeaturePage';
import {
  ClipboardList,
  FileClock,
  FileText,
  ListChecks,
  PackageSearch,
  Percent,
  ShieldCheck,
  Store,
  Tag,
} from 'lucide-react';

const featureIcons = [
  ClipboardList,
  ShieldCheck,
  FileClock,
  FileClock,
  PackageSearch,
  Tag,
  Percent,
  Store,
  ListChecks,
  FileText,
  ShieldCheck,
  FileClock,
];

export default function ManageAgreementsPage() {
  const { messages } = useI18n();

  return (
    <SupplierFeaturePage
      page={messages.supplier.manageAgreements}
      flowId="agreement-flow"
      placeholderLabel="Agreement workspace placeholder"
      featureIcons={featureIcons}
    />
  );
}
