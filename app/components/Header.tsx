"use client";

import { useEffect, useState } from "react";
import { ADDRESS, DM, NAV } from "../site";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        scrolled && !open ? "border-b border-white/10 bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-[4.5rem] md:px-10">
        <a href="#top" aria-label="FFA — početak stranice" className="relative z-10" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Glavna navigacija" className="hidden items-center gap-9 lg:flex">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[0.8rem] font-medium tracking-wide text-bone/75 transition-colors hover:text-bone"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-red transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={DM}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 bg-red px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-ink sm:inline-flex"
          >
            Pošalji upit
            <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <button
            type="button"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="relative z-10 -mr-2 grid size-11 place-items-center lg:hidden"
          >
            <span
              className={`absolute h-[2px] w-6 bg-bone transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[5px]"}`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-bone transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[5px]"}`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 flex flex-col bg-ink px-5 pb-8 pt-24 transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobilna navigacija" className="flex flex-col">
          {NAV.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 55}ms` : "0ms" }}
              className={`flex items-baseline gap-4 border-b border-white/10 py-4 transition-[opacity,transform] duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className="w-6 text-xs font-semibold text-red">0{i + 1}</span>
              <span className="display text-[2.6rem]">{l.label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto space-y-5">
          <a
            href={DM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-red px-6 py-5 text-sm font-semibold uppercase tracking-[0.14em] text-white"
          >
            Pošalji poruku na Instagramu <Arrow />
          </a>
          <p className="text-sm text-ash">Endorfin Trening Centar · {ADDRESS}</p>
        </div>
      </div>
    </header>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
