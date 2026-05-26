import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
const SUPPORTED_LOCALES = ['en', 'es'];

const messageModules: Record<string, () => Promise<{ default: Record<string, unknown> }>> = {
  en: () => import('../messages/en.json'),
  es: () => import('../messages/es.json'),
};

export default getRequestConfig(async () => {
  const raw = cookies().get('NEXT_LOCALE')?.value ?? 'en';
  const locale = SUPPORTED_LOCALES.includes(raw) ? raw : 'en';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages = (await messageModules[locale]()).default as any;
  return { locale, messages };
});
