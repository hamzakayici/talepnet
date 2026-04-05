'use client';

import { useI18n } from '@/i18n/I18nProvider';
import IndustryDetailPage from './IndustryDetailPage';

export default function HospitalityPage() {
  const { messages } = useI18n();
  return <IndustryDetailPage page={messages.industryDetails.hospitality} flowId="hospitality-flow" />;
}
