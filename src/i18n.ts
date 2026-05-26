import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import type { AbstractIntlMessages } from 'next-intl';

const SUPPORTED_LOCALES = ['en', 'es'];

const messageModules: Record<string, () => Promise<{ default: AbstractIntlMessages }>> = {
  en: () => import('../messages/en.json') as unknown as Promise<{ default: AbstractIntlMessages }>,
  es: () => import('../messages/es.json') as unknown as Promise<{ default: AbstractIntlMessages }>,
};

export default getRequestConfig(async () => {
  const raw = cookies().get('NEXT_LOCALE')?.value ?? 'en';
  const locale = SUPPORTED_LOCALES.includes(raw) ? raw : 'en';
  const messages = (await messageModules[locale]()).default;
  return { locale, messages };
});
