'use client';

import { useI18n } from '@/i18n/I18nProvider';
import SupplierCollaboratePage from '@/components/supplier/SupplierCollaboratePage';
import {
  BellRing,
  Check,
  FileCheck2,
  FileText,
  LayoutDashboard,
  ListChecks,
  Mail,
  MessageSquareText,
  PackageCheck,
  Quote,
  Send,
  ShieldCheck,
  Store,
  UserRoundCog,
} from 'lucide-react';

const featureIcons = [
  Quote,
  Send,
  FileText,
  Mail,
  LayoutDashboard,
  PackageCheck,
  FileCheck2,
  ShieldCheck,
  FileCheck2,
  Store,
  UserRoundCog,
  UserRoundCog,
  Check,
  ListChecks,
  MessageSquareText,
  BellRing,
  ListChecks,
  PackageCheck,
];

export default function CollaboratePage() {
  const { messages } = useI18n();

  return <SupplierCollaboratePage page={messages.supplier.collaborate} featureIcons={featureIcons} />;
}
