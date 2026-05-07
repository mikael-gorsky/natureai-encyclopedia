import { useEffect, useRef, useState } from 'react';
import { localesMeta, type Locale } from '../i18n/config';

interface Props {
  currentLang: Locale;
}

export default function LanguageSwitcher({ currentLang }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = localesMeta.find((l) => l.code === currentLang);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const switchTo = (target: Locale) => {
    if (target === currentLang) {
      setOpen(false);
      return;
    }
    const path = window.location.pathname;
    // Replace /{lang}/ prefix with /{target}/
    const newPath = path.replace(/^\/[a-z]{2}(\/|$)/, `/${target}$1`);
    window.location.assign(newPath || `/${target}/`);
  };

  return (
    <div ref={ref} className="lang-switcher">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="lang-switcher-button"
      >
        <span>{current?.label}</span>
        <span className="lang-switcher-chev" aria-hidden>▾</span>
      </button>
      {open && (
        <ul role="listbox" className="lang-switcher-menu">
          {localesMeta.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === currentLang}>
              <button
                type="button"
                onClick={() => switchTo(l.code)}
                lang={l.html}
                dir={l.dir}
                className={`lang-switcher-item ${l.code === currentLang ? 'is-current' : ''}`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
      <style>{`
        .lang-switcher { position: relative; }
        .lang-switcher-button {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: transparent; border: 1px solid rgb(var(--rule));
          padding: 0.4rem 0.75rem; font-size: 0.8125rem;
          font-family: var(--font-body); color: rgb(var(--ink));
          cursor: pointer; transition: border-color 200ms ease;
        }
        .lang-switcher-button:hover { border-color: rgb(var(--ink)); }
        .lang-switcher-chev { font-size: 0.6em; color: rgb(var(--ink-muted)); }
        .lang-switcher-menu {
          position: absolute; inset-inline-end: 0; inset-block-start: calc(100% + 0.25rem);
          list-style: none; margin: 0; padding: 0.25rem 0;
          background: rgb(var(--surface)); border: 1px solid rgb(var(--rule));
          min-inline-size: 10rem; box-shadow: 0 4px 16px rgb(var(--ink) / 0.08);
          z-index: 60;
        }
        .lang-switcher-item {
          display: block; inline-size: 100%; text-align: start;
          background: transparent; border: 0;
          padding: 0.5rem 0.75rem; font-size: 0.875rem;
          font-family: var(--font-body); color: rgb(var(--ink)); cursor: pointer;
        }
        .lang-switcher-item:hover { background: rgb(var(--highlight)); }
        .lang-switcher-item.is-current { color: rgb(var(--accent)); }
      `}</style>
    </div>
  );
}
