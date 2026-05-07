import en from './messages/en.json';
import ru from './messages/ru.json';
import he from './messages/he.json';
import am from './messages/am.json';
import type { Locale } from './config';

const messages: Record<Locale, Record<string, string>> = { en, ru, he, am };

export function t(locale: Locale, key: string, vars?: Record<string, string | number>): string {
  const raw = messages[locale]?.[key] ?? messages.en[key] ?? key;
  if (!vars) return raw;
  return Object.entries(vars).reduce(
    (acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)),
    raw,
  );
}

export { messages };
