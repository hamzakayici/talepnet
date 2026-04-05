import { isLocale } from '@/i18n/config';
import { dynamicRouteLoaders, staticRouteLoaders } from '@/i18n/routeMap';
import { localizeMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Params = Promise<{
  locale: string;
  slug?: string[];
}>;

type PageModule = {
  default: (props?: unknown) => Promise<React.ReactNode> | React.ReactNode;
  metadata?: Metadata;
};



export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug = [] } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const path = slug.join('/');
  const pathname = path ? `/${path}` : '/';

  const staticLoader = staticRouteLoaders[path];
  if (staticLoader) {
    const module = (await staticLoader()) as PageModule;
    return localizeMetadata(module.metadata, pathname, locale);
  }

  if (slug.length === 2) {
    const [section] = slug;
    const dynamicLoader = dynamicRouteLoaders[section as keyof typeof dynamicRouteLoaders];

    if (dynamicLoader) {
      const module = (await dynamicLoader()) as PageModule;
      return localizeMetadata(module.metadata, pathname, locale);
    }
  }

  return localizeMetadata(undefined, pathname, locale);
}

const LocalizedPage = async ({ params }: { params: Params }) => {
  const { locale, slug = [] } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const path = slug.join('/');

  const staticLoader = staticRouteLoaders[path];
  if (staticLoader) {
    const module = await staticLoader();
    const Page = module.default;
    return <>{await Page({ locale })}</>;
  }

  if (slug.length === 2) {
    const [section, dynamicSlug] = slug;
    const dynamicLoader = dynamicRouteLoaders[section as keyof typeof dynamicRouteLoaders];

    if (dynamicLoader) {
      const module = await dynamicLoader();
      const Page = module.default;
      return <>{await Page({ params: Promise.resolve({ slug: dynamicSlug, locale }) })}</>;
    }
  }

  if (path === '') {
    const module = await staticRouteLoaders['']();
    const Page = module.default;
    return <>{await Page({ locale })}</>;
  }

  notFound();
};

export default LocalizedPage;
