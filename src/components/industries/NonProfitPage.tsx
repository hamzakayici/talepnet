'use client';

import { useI18n } from '@/i18n/I18nProvider';
import IndustryDetailPage from './IndustryDetailPage';

export default function NonProfitPage() {
  const { messages } = useI18n();
  return <IndustryDetailPage page={messages.industryDetails.nonProfit} flowId="nonprofit-flow" />;
}
