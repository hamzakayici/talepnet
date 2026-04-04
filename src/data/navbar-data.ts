import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About', href: './about' },
      { id: 'industries', label: 'Industries', href: './industries' },
      { id: 'partnerships', label: 'Partnerships', href: './partnerships' },
      { id: 'contact-us', label: 'Contact Us', href: './contact-us' },
      { id: 'career', label: 'Careers', href: './career' },
    ],
  },

  {
    id: 'platform',
    title: 'Platform',
    submenu: [
      { id: 'procurement', label: 'Procurement', href: './purchase-forms' },
      { id: 'integrations', label: 'Entegrasyonlar', href: './integration' },
      { id: 'process', label: 'Süreç', href: './approvals' },
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
    id: 'access',
    title: 'Access',
    submenu: [
      { id: 'login', label: 'Log In', href: 'https://app.talepnet.com/sign-in' },
      { id: 'create-account', label: 'Sign Up', href: 'https://app.talepnet.com/sign-up' },
      { id: 'supplier-portal', label: 'Join as Supplier', href: 'https://portal.talepnet.com/sign-up' },
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
    ],
  },
];
