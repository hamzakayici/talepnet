import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Partnerships', href: '/partnerships' },
      { label: 'Careers', href: '/career' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'Industries', href: '/industries' },
      { label: 'Product Features', href: '/product-features' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Tutorials', href: '/tutorial' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
];
