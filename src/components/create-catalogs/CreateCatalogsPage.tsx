'use client';

import { useI18n } from '@/i18n/I18nProvider';
import SupplierFeaturePage from '@/components/supplier/SupplierFeaturePage';
import {
  Blend,
  Check,
  FileText,
  ListChecks,
  Send,
  Sparkles,
  Store,
  Tag,
} from 'lucide-react';

const featureIcons = [Store, FileText, Sparkles, Blend, Tag, Tag, Check, ListChecks, Store, Send];

export default function CreateCatalogsPage() {
  const { messages } = useI18n();

  return (
    <SupplierFeaturePage
      page={messages.supplier.createCatalogs}
      flowId="catalog-flow"
      placeholderLabel="Catalog creation workspace placeholder"
      featureIcons={featureIcons}
    />
  );
}
