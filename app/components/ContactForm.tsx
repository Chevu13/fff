"use client";

import { EMAIL } from "../site";
import { Arrow } from "./Header";

const field =
  "w-full border border-white/15 bg-white/[0.04] px-4 py-3.5 text-base text-bone placeholder:text-white/35 transition-colors focus:border-red focus:outline-none";
const label = "eyebrow mb-2 block !text-[0.62rem] text-white/60";

const GOALS = ["Mršavljenje", "Oblikovanje tela", "Snaga i kondicija", "Nešto drugo"];

// ponytail: mailto opens the visitor's mail app; swap for a server action + mail API (e.g. Resend) when the site goes live.
export function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const body = [
      `Ime: ${get("ime")}`,
      get("telefon") && `Telefon: ${get("telefon")}`,
      `Cilj: ${get("cilj")}`,
      `Format: ${get("format")}`,
      get("poruka") && `\n${get("poruka")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Upit sa sajta — ${get("ime")}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid w-full gap-5 text-left sm:grid-cols-2">
      <div>
        <label htmlFor="ime" className={label}>
          Ime i prezime *
        </label>
        <input id="ime" name="ime" required autoComplete="name" className={field} placeholder="Vaše ime" />
      </div>
      <div>
        <label htmlFor="telefon" className={label}>
          Telefon
        </label>
        <input id="telefon" name="telefon" type="tel" autoComplete="tel" className={field} placeholder="06x xxx xxxx" />
      </div>
      <div>
        <label htmlFor="cilj" className={label}>
          Vaš cilj *
        </label>
        <select id="cilj" name="cilj" required defaultValue="" className={`${field} appearance-none`}>
          <option value="" disabled>
            Izaberite
          </option>
          {GOALS.map((g) => (
            <option key={g} className="bg-ink">
              {g}
            </option>
          ))}
        </select>
      </div>
      <fieldset>
        <legend className={label}>Format *</legend>
        <div className="grid grid-cols-2 gap-2">
          {["Uživo", "Online"].map((v, i) => (
            <label key={v} className="cursor-pointer">
              <input type="radio" name="format" value={v} required defaultChecked={i === 0} className="peer sr-only" />
              <span className="block border border-white/15 px-4 py-3.5 text-center text-base transition-colors peer-checked:border-red peer-checked:bg-red peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-red">
                {v}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="sm:col-span-2">
        <label htmlFor="poruka" className={label}>
          Poruka
        </label>
        <textarea id="poruka" name="poruka" rows={4} className={`${field} resize-y`} placeholder="Nekoliko reči o sebi, iskustvu sa treningom, terminu koji vam odgovara…" />
      </div>
      <button
        type="submit"
        className="group inline-flex min-h-13 items-center justify-center gap-3 bg-red px-7 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-bone hover:text-ink active:scale-[0.98] sm:col-span-2"
      >
        Pošalji upit
        <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
