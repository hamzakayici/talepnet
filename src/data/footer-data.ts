import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Firma',
    links: [
      { label: 'Hakkımızda', href: '/about' },
      { label: 'Kariyer', href: '/career' },
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
      { label: 'Hizmet Şartları', href: '/terms' },
      { label: 'Gizlilik Politikası', href: '/privacy' },
      { label: 'Çerez Politikası', href: '/cookies' },
      { label: 'KVKK Uyumu', href: '/cookies' },
    ],
  },
];
