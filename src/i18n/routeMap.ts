import type { Locale } from '@/i18n/config';

type PageModule = {
  default: (props?: { locale?: Locale; params?: unknown }) => Promise<React.ReactNode> | React.ReactNode;
};

type PageLoader = () => Promise<PageModule>;

export const staticRouteLoaders: Record<string, PageLoader> = {
  '': () => import('../app/page'),
  'about': () => import('../app/about/page'),
  'affiliate-policy': () => import('../app/affiliate-policy/page'),
  'approvals': () => import('../app/approvals/page'),
  'blog': () => import('../app/blog/page'),
  'budget-management': () => import('../app/budget-management/page'),
  'career': () => import('../app/career/page'),
  'changelog': () => import('../app/changelog/page'),
  'collaborate': () => import('../app/collaborate/page'),
  'contact-us': () => import('../app/contact-us/page'),
  'contract-management': () => import('../app/contract-management/page'),
  'cookies': () => import('../app/cookies/page'),
  'create-catalogs': () => import('../app/create-catalogs/page'),
  'faq': () => import('../app/faq/page'),
  'industries': () => import('../app/industries/page'),
  'industries/automotive': () => import('../app/industries/automotive/page'),
  'industries/construction': () => import('../app/industries/construction/page'),
  'industries/education': () => import('../app/industries/education/page'),
  'industries/healthcare': () => import('../app/industries/healthcare/page'),
  'industries/hospitality': () => import('../app/industries/hospitality/page'),
  'industries/non-profit': () => import('../app/industries/non-profit/page'),
  'industries/technology': () => import('../app/industries/technology/page'),
  'integration': () => import('../app/integration/page'),
  'legal': () => import('../app/legal/page'),
  'manage-agreements': () => import('../app/manage-agreements/page'),
  'partnerships': () => import('../app/partnerships/page'),
  'pricing': () => import('../app/pricing/page'),
  'privacy': () => import('../app/privacy/page'),
  'product-features': () => import('../app/product-features/page'),
  'purchase-forms': () => import('../app/purchase-forms/page'),
  'purchase-orders': () => import('../app/purchase-orders/page'),
  'purchase-requests': () => import('../app/purchase-requests/page'),
  'receiving': () => import('../app/receiving/page'),
  'refund-policy': () => import('../app/refund-policy/page'),
  'respond-to-rfqs': () => import('../app/respond-to-rfqs/page'),
  'security': () => import('../app/security/page'),
  'solutions': () => import('../app/solutions/page'),
  'solutions/accounts-payable': () => import('../app/solutions/accounts-payable/page'),
  'solutions/approval-workflow': () => import('../app/solutions/approval-workflow/page'),
  'solutions/budget-control': () => import('../app/solutions/budget-control/page'),
  'solutions/procure-to-pay': () => import('../app/solutions/procure-to-pay/page'),
  'solutions/request-to-receipt': () => import('../app/solutions/request-to-receipt/page'),
  'solutions/source-to-order': () => import('../app/solutions/source-to-order/page'),
  'solutions/spend-management': () => import('../app/solutions/spend-management/page'),
  'spend-insights': () => import('../app/spend-insights/page'),
  'supplier-contracts': () => import('../app/supplier-contracts/page'),
  'supplier-management': () => import('../app/supplier-management/page'),
  'supplier-portal': () => import('../app/supplier-portal/page'),
  'support': () => import('../app/support/page'),
  'terms': () => import('../app/terms/page'),
  'testimonial': () => import('../app/testimonial/page'),
  'track-orders': () => import('../app/track-orders/page'),
  'tutorial': () => import('../app/tutorial/page'),
  'vendor-management': () => import('../app/vendor-management/page'),
};

export const dynamicRouteLoaders = {
  blog: () => import('../app/blog/[slug]/page'),
  career: () => import('../app/career/[slug]/page'),
} as const;
