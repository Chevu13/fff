"use client";

import Image from "next/image";
import { useRef } from "react";

type Props = { before: string; after: string; alt: string; className?: string; sizes: string };

export function Compare({ before, after, alt, className = "", sizes }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={`compare relative select-none overflow-hidden bg-coal ${className}`}>
      <Image src={after} alt={`${alt} — posle`} fill sizes={sizes} className="object-cover" />
      <div className="before absolute inset-0">
        <Image src={before} alt={`${alt} — pre`} fill sizes={sizes} className="object-cover" />
      </div>
      <span className="eyebrow pointer-events-none absolute left-3 top-3 bg-ink/80 px-2.5 py-1.5 text-bone">Pre</span>
      <span className="eyebrow pointer-events-none absolute right-3 top-3 bg-red px-2.5 py-1.5 text-white">Posle</span>
      <input
        type="range"
        min={0}
        max={100}
        defaultValue={50}
        aria-label="Uporedi pre i posle"
        onInput={(e) => ref.current?.style.setProperty("--p", `${e.currentTarget.value}%`)}
        className="absolute inset-0 z-10 h-full w-full opacity-0"
      />
      <div className="handle pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-white">
        <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-lg">
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden>
            <path d="M5 1 1 5l4 4M13 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
      </div>
    </div>
  );
}
