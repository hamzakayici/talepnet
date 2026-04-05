import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Şirket',
    links: [
      { label: 'Hakkımızda', href: '/about' },
      { label: 'İş Ortaklıkları', href: '/partnerships' },
      { label: 'Kariyer', href: '/career' },
      { label: 'Bize Ulaşın', href: '/contact-us' },
    ],
  },
  {
    title: 'Keşfet',
    links: [
      { label: 'Çözümler', href: '/solutions' },
      { label: 'Sektörler', href: '/industries' },
      { label: 'Ürün Özellikleri', href: '/product-features' },
      { label: 'Fiyatlandırma', href: '/pricing' },
    ],
  },
  {
    title: 'Kaynaklar',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'SSS', href: '/faq' },
      { label: 'Eğitimler', href: '/tutorial' },
    ],
  },
  {
    title: 'Yasal',
    links: [
      { label: 'Hizmet Şartları', href: '/terms' },
      { label: 'Gizlilik Politikası', href: '/privacy' },
      { label: 'Çerez Politikası', href: '/cookies' },
    ],
  },
];
