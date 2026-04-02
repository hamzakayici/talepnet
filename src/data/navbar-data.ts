import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: './about' },
      { id: 'career', label: 'Careers', href: './career' },
      { id: 'terms-conditions', label: 'Terms of Service', href: './terms' },
      { id: 'privacy-policy', label: 'Privacy Policy', href: './privacy' },
      { id: 'cookie-policy', label: 'Cookie Policy', href: './cookies' },
    ],
  },

  {
    id: 'platform',
    title: 'Platform',
    submenu: [
      { id: 'procurement', label: 'Procurement', href: './procurement-software' },
      { id: 'features', label: 'Özellikler', href: './features' },
      { id: 'integrations', label: 'Entegrasyonlar', href: './integration' },
      { id: 'process', label: 'Süreç', href: './process' },
      { id: 'analytics', label: 'Analizler', href: './analytics' },
      { id: 'security', label: 'Güvenlik', href: './security' },
      { id: 'whitepaper', label: 'Teknik Doküman', href: './whitepaper' },
      { id: 'build-overview', label: 'Genel Bakış', href: './signup' },
      { id: 'brandkit', label: 'Marka Kiti', href: './brandkit' },
      { id: 'download', label: 'İndirin', href: './download' },
    ],
  },

  {
    id: 'resources',
    title: 'Kaynaklar',
    submenu: [
      { id: 'blog', label: 'Blog', href: './blog' },
      { id: 'tutorial', label: 'Eğitimler', href: './tutorial' },
      { id: 'faq', label: 'SSS', href: './faq' },
      { id: 'glossary', label: 'Sözlük', href: './glossary' },
    ],
  },

  {
    id: 'plans-support',
    title: 'Planlar & Destek',
    submenu: [
      { id: 'pricing', label: 'Fiyatlandırma', href: './pricing' },
      { id: 'login', label: 'Giriş Yap', href: './login' },
      { id: 'create-account', label: 'Hesap Oluştur', href: './signup' },
      { id: 'referral-program', label: 'Referans Programı', href: './referral-program' },
      { id: 'affiliate', label: 'İş Ortaklığı', href: './affiliates' },
      { id: 'affiliate-policy', label: 'İş Ortaklığı Politikası', href: './affiliate-policy' },
      { id: 'terms-conditions', label: 'Hizmet Şartları', href: './terms' },
      { id: 'privacy-policy', label: 'Gizlilik Politikası', href: './privacy' },
      { id: 'refund-policy', label: 'İade Politikası', href: './refund-policy' },
      { id: 'gdpr', label: 'KVKK', href: './cookies' },
      { id: 'legal', label: 'Yasal', href: './legal' },
    ],
  },
];

export const footerData: FooterOneData[] = [
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
