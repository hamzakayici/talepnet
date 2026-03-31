import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Firma',
    links: [
      { label: 'Hakkımızda', href: '/about' },
      { label: 'Kariyer', href: '/career' },
      { label: 'Başarı Hikayeleri', href: '/case-study' },
      { label: 'İletişim', href: '/contact-us' },
    ],
  },
  {
    title: 'Destek',
    links: [
      { label: 'SSS', href: '/faq' },
      { label: 'Dokümantasyon', href: '/documentation' },
      { label: 'Eğitimler', href: '/tutorial' },
      { label: 'Tedarikçi Portalı', href: 'https://portal.talepnet.com' },
    ],
  },
  {
    title: 'Yasal Politikalar',
    links: [
      { label: 'Hizmet Şartları', href: '/terms-conditions' },
      { label: 'Gizlilik Politikası', href: '/privacy-policy' },
      { label: 'Çerez Politikası', href: '/gdpr' },
      { label: 'KVKK Uyumu', href: '/gdpr' },
    ],
  },
];
