export const locales = ['en', 'ru', 'he', 'am'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const direction: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ru: 'ltr',
  he: 'rtl',
  am: 'ltr',
};

export const htmlLang: Record<Locale, string> = {
  en: 'en',
  ru: 'ru',
  he: 'he',
  am: 'am',
};

export const localeLabel: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  he: 'עברית',
  am: 'አማርኛ',
};

export const sectionOrder = [
  'foundations',
  'cognition',
  'standardization',
  'manipulation',
  'consciousness',
  'power',
] as const;
export type SectionId = typeof sectionOrder[number];

export const sectionLetter: Record<SectionId, string> = {
  foundations: 'A',
  cognition: 'B',
  standardization: 'C',
  manipulation: 'D',
  consciousness: 'E',
  power: 'F',
};

export const sectionTitles: Record<Locale, Record<SectionId, string>> = {
  en: {
    foundations: 'Foundations',
    cognition: 'Cognition & Offloading',
    standardization: 'Standardization',
    manipulation: 'Manipulation',
    consciousness: 'Consciousness',
    power: 'Power & Governance',
  },
  ru: {
    foundations: 'Основания',
    cognition: 'Познание и разгрузка',
    standardization: 'Стандартизация',
    manipulation: 'Манипуляция',
    consciousness: 'Сознание',
    power: 'Власть и регулирование',
  },
  he: {
    foundations: 'יסודות',
    cognition: 'קוגניציה והעברת עומס',
    standardization: 'תקינה',
    manipulation: 'מניפולציה',
    consciousness: 'תודעה',
    power: 'כוח וממשל',
  },
  am: {
    foundations: 'መሠረቶች',
    cognition: 'አስተሳሰብ እና ጭነት ማስተላለፍ',
    standardization: 'መደበኛነት',
    manipulation: 'ማታለል',
    consciousness: 'ንቃተ-ህሊና',
    power: 'ስልጣን እና አስተዳደር',
  },
};

export interface LocaleMeta {
  code: Locale;
  label: string;
  dir: 'ltr' | 'rtl';
  html: string;
}

export const localesMeta: LocaleMeta[] = locales.map((code) => ({
  code,
  label: localeLabel[code],
  dir: direction[code],
  html: htmlLang[code],
}));
