import { defineCollection, z, type CollectionEntry } from 'astro:content';
import { locales, sectionOrder } from '../i18n/config';

const langSchema = z.enum(locales);
const sectionSchema = z.enum(sectionOrder);
const plateSchema = z.string().regex(/^[A-F]\.\d{2}$/, 'Plate must match {SectionLetter}.{Order:02} e.g., B.07');
const slugSchema = z.string().regex(/^[a-z0-9-]+$/, 'Slug must be lowercase ASCII letters/digits/hyphens (transliterate non-Latin titles)');
const translationStatusSchema = z.enum(['complete', 'in-progress', 'machine-only-pending-review']);

// NOTE: Astro reserves `slug` as an entry-level field auto-derived from filename
// (overridable via top-level frontmatter `slug:`). It must NOT appear in the schema.
// Reference it as `entry.slug`, not `entry.data.slug`.

const articleSchema = z.object({
  lang: langSchema,
  translationKey: plateSchema,
  title: z.string().min(1),
  section: sectionSchema,
  plate: plateSchema,
  order: z.number().int().min(1).max(99),
  summary: z.string().min(20).max(300),
  keyTerms: z.array(z.string()).default([]),
  seeAlso: z.array(slugSchema).default([]),
  paperSections: z.array(z.string()).default([]),
  citations: z
    .array(z.object({ id: z.number().int().min(1), text: z.string() }))
    .default([]),
  hero: z
    .object({
      src: z.string(),
      alt: z.string(),
      prompt: z.string().optional(),
      credit: z.string().optional(),
    })
    .optional(),
  readingTime: z.number().int().min(1).optional(),
  sourceLang: langSchema.default('en'),
  translationStatus: translationStatusSchema.default('complete'),
  draft: z.boolean().default(false),
  lastUpdated: z.coerce.date(),
});

const glossarySchema = z.object({
  lang: langSchema,
  translationKey: z.string().min(1),
  term: z.string().min(1),
  aliases: z.array(z.string()).default([]),
  appearsIn: z.array(slugSchema).default([]),
  lastUpdated: z.coerce.date(),
});

const pathSchema = z.object({
  lang: langSchema,
  translationKey: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(20).max(300),
  articles: z.array(slugSchema).min(2),
  lastUpdated: z.coerce.date(),
});

export const collections = {
  articles: defineCollection({ type: 'content', schema: articleSchema }),
  glossary: defineCollection({ type: 'content', schema: glossarySchema }),
  paths: defineCollection({ type: 'content', schema: pathSchema }),
};

export type ArticleEntry = CollectionEntry<'articles'>;
export type GlossaryEntry = CollectionEntry<'glossary'>;
export type PathEntry = CollectionEntry<'paths'>;
