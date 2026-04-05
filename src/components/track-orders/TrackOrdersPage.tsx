'use client';

import { useI18n } from '@/i18n/I18nProvider';
import SupplierFeaturePage from '@/components/supplier/SupplierFeaturePage';
import {
  Check,
  ClipboardList,
  FileCheck2,
  FileClock,
  ListOrdered,
  Mail,
  MapPinned,
  MessageSquareText,
  PackageCheck,
  Send,
  ShieldCheck,
  Truck,
  XCircle,
} from 'lucide-react';

const featureIcons = [
  ClipboardList,
  FileClock,
  ListOrdered,
  ShieldCheck,
  Check,
  XCircle,
  PackageCheck,
  MapPinned,
  MessageSquareText,
  Mail,
  FileCheck2,
  Send,
  ShieldCheck,
  Truck,
];

export default function TrackOrdersPage() {
  const { messages } = useI18n();

  return (
    <SupplierFeaturePage
      page={messages.supplier.trackOrders}
      flowId="order-flow"
      placeholderLabel="Order tracking workspace placeholder"
      featureIcons={featureIcons}
    />
  );
}
