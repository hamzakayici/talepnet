'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { useLocale } from '@/i18n/I18nProvider';
import { localizeHref } from '@/i18n/pathnames';
import { useTranslations } from '@/i18n/useTranslations';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import mobileIcon from '@public/images/shared/talepnet-icon.png';
import mainLogo from '@public/images/shared/talepnet-logo-v2.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import EngageMenu from './EngageMenu';
import ExploreMenu from './ExploreMenu';
import InsightsMenu from './InsightsMenu';
import LocaleSwitcher from './LocaleSwitcher';
import MobileMenuButton from './MobileMenuButton';
import PricingMenu from './PricingMenu';

const Navbar = () => {
  const { isScrolled } = useNavbarScroll(150);
  const locale = useLocale();
  const t = useTranslations('navbar');

  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  const mobileMenuData = [
    {
      id: 'company',
      title: t('mobile.company'),
      submenu: [
        { id: 'about', label: t('explore.about'), href: localizeHref('/about', locale) },
        { id: 'solutions', label: t('explore.solutions'), href: localizeHref('/solutions', locale) },
        { id: 'industries', label: t('explore.industries'), href: localizeHref('/industries', locale) },
        { id: 'partnerships', label: t('explore.partnerships'), href: localizeHref('/partnerships', locale) },
        { id: 'contact-us', label: t('explore.contactUs'), href: localizeHref('/contact-us', locale) },
        { id: 'careers', label: t('explore.careers'), href: localizeHref('/career', locale) },
      ],
    },
    {
      id: 'product-overview',
      title: t('mobile.productOverview'),
      submenu: [
        { id: 'purchase-requests', label: t('explore.purchaseRequests'), href: localizeHref('/purchase-requests', locale) },
        { id: 'approvals', label: t('explore.approvals'), href: localizeHref('/approvals', locale) },
        { id: 'purchase-forms', label: t('explore.purchaseForms'), href: localizeHref('/purchase-forms', locale) },
        { id: 'purchase-orders', label: t('explore.purchaseOrders'), href: localizeHref('/purchase-orders', locale) },
        { id: 'contract-management', label: t('explore.contractManagement'), href: localizeHref('/contract-management', locale) },
        { id: 'supplier-management', label: t('explore.supplierManagement'), href: localizeHref('/supplier-management', locale) },
        { id: 'budget-management', label: t('explore.budgetManagement'), href: localizeHref('/budget-management', locale) },
      ],
    },
    {
      id: 'for-suppliers',
      title: t('mobile.forSuppliers'),
      submenu: [
        { id: 'supplier-portal', label: t('explore.supplierPortal'), href: localizeHref('/supplier-portal', locale) },
        { id: 'respond-to-rfqs', label: t('explore.respondToRfqs'), href: localizeHref('/respond-to-rfqs', locale) },
        { id: 'track-orders', label: t('explore.trackOrders'), href: localizeHref('/track-orders', locale) },
        { id: 'manage-agreements', label: t('explore.manageAgreements'), href: localizeHref('/manage-agreements', locale) },
        { id: 'create-catalogs', label: t('explore.createCatalogs'), href: localizeHref('/create-catalogs', locale) },
        { id: 'collaborate', label: t('explore.collaborate'), href: localizeHref('/collaborate', locale) },
      ],
    },
    {
      id: 'resources',
      title: t('mobile.resources'),
      submenu: [
        { id: 'support', label: t('resources.helpCenter'), href: localizeHref('/support', locale) },
        { id: 'faq', label: t('resources.faq'), href: localizeHref('/faq', locale) },
        { id: 'blog', label: t('resources.blog'), href: localizeHref('/blog', locale) },
        { id: 'tutorials', label: t('resources.tutorials'), href: localizeHref('/tutorial', locale) },
        { id: 'contact', label: t('resources.contactUs'), href: localizeHref('/contact-us', locale) },
      ],
    },
    {
      id: 'pricing',
      title: t('mobile.pricing'),
      submenu: [
        { id: 'view-plans', label: t('pricingMenu.viewPlans'), href: localizeHref('/pricing', locale) },
        { id: 'get-started-free', label: t('pricingMenu.getStartedFree'), href: 'https://app.talepnet.com/sign-up' },
      ],
    },
    {
      id: 'access',
      title: t('mobile.access'),
      submenu: [
        { id: 'login', label: t('explore.logIn'), href: 'https://app.talepnet.com/sign-in' },
        { id: 'sign-up', label: t('explore.signUp'), href: 'https://app.talepnet.com/sign-up' },
        { id: 'join-as-supplier', label: t('explore.joinAsSupplier'), href: 'https://portal.talepnet.com/sign-up' },
      ],
    },
  ];
  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'lp:!max-w-[1290px] bg-background-2 dark:bg-background-6 fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 rounded-full transition-all duration-500 ease-in-out min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          isScrolled && 'top-2',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div>
            <div className="flex items-center justify-between bg-background-2 dark:bg-background-6 rounded-full px-2.5 py-2.5 backdrop-blur-[25px] xl:py-0">
              <div>
                <Link href={localizeHref('/', locale)}>
                  <span className="sr-only">Home</span>
                  <figure className="hidden lg:block lg:max-w-[198px]">
                    <Image src={mainLogo} alt="TalepNET" className="h-[34px] w-auto" priority />
                  </figure>
                  <figure className="block max-w-[44px] lg:hidden">
                    <Image src={mobileIcon} alt="TalepNET" className="w-[34px] h-[34px]" priority />
                  </figure>
                </Link>
              </div>
              <nav className="hidden items-center xl:flex">
                <ul className="flex items-center">
                  <li
                    onMouseEnter={() => handleMenuHover('explore-mega-menu')}
                    data-menu="explore-mega-menu"
                    className="group/nav-item relative cursor-pointer py-2.5">
                    <Link
                      href="#"
                      onClick={(event) => event.preventDefault()}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                      <span className="uppercase tracking-wide text-xs font-medium">{t('topLevel.platform')}</span>
                      <span className="block origin-center translate-y-px transition-all duration-300 group-hover/nav-item:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </Link>
                    <ExploreMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                  </li>
                  <li
                    onMouseEnter={() => handleMenuHover('engage-mega-menu')}
                    data-menu="engage-mega-menu"
                    className="group/nav-item relative cursor-pointer py-2.5">
                    <Link
                      href="#"
                      onClick={(event) => event.preventDefault()}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                      <span className="uppercase tracking-wide text-xs font-medium">{t('topLevel.solutions')}</span>
                      <span className="block origin-center translate-y-px transition-all duration-300 group-hover/nav-item:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </Link>
                    <EngageMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                  </li>
                  <li
                    onMouseEnter={() => handleMenuHover('insights-mega-menu')}
                    data-menu="insights-mega-menu"
                    className="group/nav-item relative cursor-pointer py-2.5">
                    <Link
                      href="#"
                      onClick={(event) => event.preventDefault()}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                      <span className="uppercase tracking-wide text-xs font-medium">{t('topLevel.resources')}</span>
                      <span className="block origin-center translate-y-px transition-all duration-300 group-hover/nav-item:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </Link>
                    <InsightsMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                  </li>
                  <li
                    onMouseEnter={() => handleMenuHover('pricing-mega-menu')}
                    data-menu="pricing-mega-menu"
                    className="group/nav-item relative cursor-pointer py-2.5">
                    <Link
                      href="#"
                      onClick={(event) => event.preventDefault()}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                      <span className="uppercase tracking-wide text-xs font-medium">{t('topLevel.pricing')}</span>
                      <span className="block origin-center translate-y-px transition-all duration-300 group-hover/nav-item:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </Link>
                    <PricingMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                  </li>
                </ul>
              </nav>
              <div className="hidden items-center justify-center xl:flex">
                <div className="flex items-center gap-3">
                  <LocaleSwitcher />
                  <Link href="https://portal.talepnet.com/" className="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white">
                    <span>{t('topLevel.supplierPortal')}</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2 xl:hidden">
                <LocaleSwitcher />
                <MobileMenuButton />
              </div>
            </div>
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} menuLabel={t('mobile.menu')} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
