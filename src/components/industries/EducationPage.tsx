'use client';

import { useI18n } from '@/i18n/I18nProvider';
import IndustryDetailPage from './IndustryDetailPage';

export default function EducationPage() {
  const { messages } = useI18n();
  return <IndustryDetailPage page={messages.industryDetails.education} flowId="education-flow" />;
}
