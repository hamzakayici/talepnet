import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'company',
    title: 'Şirket',
    submenu: [
      { id: 'about-us', label: 'Hakkımızda', href: './about' },
      { id: 'industries', label: 'Sektörler', href: './industries' },
      { id: 'partnerships', label: 'İş Ortaklıkları', href: './partnerships' },
      { id: 'contact-us', label: 'Bize Ulaşın', href: './contact-us' },
      { id: 'career', label: 'Kariyer', href: './career' },
    ],
  },

  {
    id: 'platform',
    title: 'Yapı',
    submenu: [
      { id: 'procurement', label: 'Satın Alma', href: './purchase-forms' },
      { id: 'integrations', label: 'Entegrasyonlar', href: './integration' },
      { id: 'process', label: 'Süreç', href: './approvals' },
      { id: 'security', label: 'Güvenlik', href: './security' },
    ],
  },

  {
    id: 'resources',
    title: 'Kaynaklar',
    submenu: [
      { id: 'blog', label: 'Blog', href: './blog' },
      { id: 'tutorial', label: 'Eğitimler', href: './tutorial' },
      { id: 'faq', label: 'SSS', href: './faq' },
    ],
  },

  {
    id: 'access',
    title: 'Erişim',
    submenu: [
      { id: 'login', label: 'Giriş Yap', href: 'https://app.talepnet.com/sign-in' },
      { id: 'create-account', label: 'Kayıt Ol', href: 'https://app.talepnet.com/sign-up' },
      { id: 'supplier-portal', label: 'Tedarikçi Olarak Katılın', href: 'https://portal.talepnet.com/sign-up' },
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
