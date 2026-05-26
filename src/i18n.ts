import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { readFileSync } from 'fs';
import { join } from 'path';
import yaml from 'js-yaml';
import type { AbstractIntlMessages } from 'next-intl';

const SUPPORTED_LOCALES = ['en', 'es'];

export default getRequestConfig(async () => {
  const raw = cookies().get('NEXT_LOCALE')?.value ?? 'en';
  const locale = SUPPORTED_LOCALES.includes(raw) ? raw : 'en';

  const messages = yaml.load(
    readFileSync(join(process.cwd(), `messages/${locale}.yml`), 'utf8')
  ) as AbstractIntlMessages;

  return { locale, messages };
});
