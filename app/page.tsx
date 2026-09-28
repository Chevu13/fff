import Image from "next/image";
import { Arrow, Header } from "./components/Header";
import { Compare } from "./components/Compare";
import { Logo } from "./components/Logo";
import { Reveal } from "./components/Reveal";
import { ADDRESS, DM, ENDORFIN, IG, MAPS, NAV } from "./site";

const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

const SERVICES = [
  {
    n: "01",
    title: "Lični trening",
    lead: "Trening uživo u Endorfin Trening Centru na Novom Beogradu. Trener je uz vas na svakom treningu.",
    get: ["Program prilagođen vašem cilju i nivou", "Korekcija tehnike u realnom vremenu", "Plan ishrane uz trening"],
    img: "/img/licni.jpg",
    alt: "Trener u Endorfin Trening Centru",
  },
  {
    n: "02",
    title: "Online trening",
    lead: "Isti FFA sistem, bez obzira gde trenirate. Plan, ishrana i kontrola napretka — na daljinu.",
    get: ["Plan treninga za teretanu ili kućne uslove", "Smernice za ishranu i dnevnik ishrane", "Redovno praćenje i korekcije plana"],
    img: "/img/online.jpg",
    alt: "Trener objašnjava praćenje napretka i dnevnik ishrane",
  },
  {
    n: "03",
    title: "FFA transformacija",
    lead: "Kompletan proces promene tela: od početnog stanja do rezultata koji se vidi na fotografiji.",
    get: ["Fotografije početnog stanja", "Trening, ishrana i praćenje pod jednim planom", "Jasan cilj i merljiv napredak"],
    img: "/img/transformacija.jpg",
    alt: "Klijent posle transformacije u Endorfin Trening Centru",
  },
];

const RESULTS = [
  { pre: "/img/t3-pre.jpg", posle: "/img/t3-posle.jpg" },
  { pre: "/img/t4-pre.jpg", posle: "/img/t4-posle.jpg" },
];

const WHY = [
  ["Sistem, ne improvizacija", "FFA je razrađen sistem za telesne transformacije. Principi su isti, plan je vaš."],
  ["Trening i ishrana zajedno", "Jedno bez drugog ne daje rezultat. Zato se planiraju zajedno, od prvog dana."],
  ["Napredak se prati", "Dnevnik ishrane i fotografije pokazuju gde ste — i šta treba korigovati."],
  ["Rezultati su javni", "Transformacije klijenata redovno se objavljuju. Pogledajte ih pre nego što se javite."],
];

const STEPS = [
  ["Pošaljite poruku", "Napišite svoj cilj i da li želite trening uživo ili online."],
  ["Početno stanje", "Dogovaramo cilj i beležimo polaznu tačku — fotografijama."],
  ["Plan po meri", "Dobijate plan treninga i ishrane prilagođen vama."],
  ["Praćenje i korekcije", "Pratimo napredak i menjamo plan dok cilj ne postane rezultat."],
];

const FEED = [
  { src: "/img/reel-1.jpg", reel: "DQeBQBtCAYZ", tag: "Put transformacije", title: "−40 kg", alt: "Klijent u Endorfin Trening Centru posle transformacije" },
  { src: "/img/reel-2.jpg", reel: "DTkc_ugCB-J", tag: "Put transformacije", title: "Vreme za promenu", alt: "Klijent priča o svojoj transformaciji" },
  { src: "/img/reel-3.jpg", reel: "DTU3AisCIxB", tag: "Iz ugla trenera", title: "11 godina trenerskog posla", alt: "Trener u Endorfin Trening Centru" },
  { src: "/img/reel-4.jpg", reel: "DTcvZdviGat", tag: "Put transformacije", title: "−9 kg", alt: "Klijentkinja u Endorfin Trening Centru" },
];

function Cta({ href, children, variant = "red", external = true }: { href: string; children: React.ReactNode; variant?: "red" | "ghost"; external?: boolean }) {
  const styles = {
    red: "bg-red text-white hover:bg-bone hover:text-ink",
    ghost: "border border-current/30 hover:border-current",
  }[variant];
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`group inline-flex min-h-13 items-center justify-center gap-3 px-7 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 active:scale-[0.98] ${styles}`}
    >
      {children}
      <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function Pair({ pre, posle, sizes }: { pre: string; posle: string; sizes: string }) {
  return (
    <div className="group grid grid-cols-2 gap-1">
      {[
        [pre, "Pre"],
        [posle, "Posle"],
      ].map(([src, label]) => (
        <figure key={label} className="relative aspect-[1/2] overflow-hidden bg-coal">
          <Image
            src={src}
            alt={`Transformacija klijenta — ${label.toLowerCase()}`}
            fill
            sizes={sizes}
            className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${label === "Pre" ? "grayscale" : ""}`}
          />
          <figcaption
            className={`eyebrow absolute bottom-2 left-2 px-2 py-1 !text-[0.6rem] ${label === "Pre" ? "bg-ink/80 text-bone" : "bg-red text-white"}`}
          >
            {label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Reveal />
      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden pt-16 md:pt-[4.5rem]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[10%] top-0 h-full w-[60%] bg-[radial-gradient(closest-side,rgba(222,44,44,0.18),transparent)]"
          />
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-12 pt-8 md:px-10 md:pb-20 md:pt-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7 lg:pt-10">
              <p data-reveal className="eyebrow flex items-center gap-3 !tracking-[0.16em] text-ash sm:!tracking-[0.22em]">
                <span className="hidden h-px w-8 bg-red sm:block" /> Lični i online trening · Novi Beograd
              </p>
              <h1 data-reveal style={d(0.08)} className="display mt-6 text-[clamp(3.3rem,14vw,8.4rem)]">
                Telo se menja
                <br />
                <span className="text-red">sistemom.</span>
              </h1>
              <p data-reveal style={d(0.16)} className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-bone/75 md:text-lg">
                FFA je sistem za telesne transformacije — trening, ishrana i praćenje napretka pod jednim planom. Uživo u
                Endorfin Trening Centru ili online.
              </p>
              <div data-reveal style={d(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Cta href={DM}>Započni transformaciju</Cta>
                <Cta href="#rezultati" variant="ghost" external={false}>
                  Pogledaj rezultate
                </Cta>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="grid grid-cols-2 items-end gap-2 sm:gap-3 lg:block lg:h-[640px]">
                <figure data-reveal="img" style={d(0.2)} className="relative aspect-[3/4] overflow-hidden bg-coal lg:absolute lg:bottom-0 lg:left-0 lg:aspect-[1/2] lg:w-[46%]">
                  <Image src="/img/t1-pre.jpg" alt="Klijentkinja FFA — pre transformacije" fill preload sizes="(min-width:1024px) 260px, 50vw" className="object-cover object-top grayscale" />
                  <figcaption className="eyebrow absolute bottom-3 left-3 bg-ink/80 px-2.5 py-1.5">Pre</figcaption>
                </figure>
                <figure data-reveal="img" style={d(0.35)} className="relative aspect-[3/4] overflow-hidden bg-coal lg:absolute lg:right-0 lg:top-0 lg:aspect-[1/2] lg:w-[54%]">
                  <Image src="/img/t1-posle.jpg" alt="Klijentkinja FFA — posle transformacije" fill preload sizes="(min-width:1024px) 300px, 50vw" className="object-cover object-top" />
                  <figcaption className="eyebrow absolute bottom-3 left-3 bg-red px-2.5 py-1.5 text-white">Posle</figcaption>
                </figure>
              </div>
              <p className="mt-3 text-right text-xs text-ash lg:absolute lg:-bottom-8 lg:left-0 lg:text-left">
                Stvarna transformacija klijentkinje · @f_.f_.a._
              </p>
            </div>
          </div>

          {/* Slogan band */}
          <div className="overflow-hidden border-y border-white/10 py-4" aria-hidden>
            <div className="marquee flex w-max">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="display flex items-center gap-8 pr-8 text-2xl italic text-bone/85 md:text-3xl">
                  Be wise and stay strong <span className="size-2 rotate-45 bg-red" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SISTEM / INTRO */}
        <section id="sistem" className="border-y border-white/5 bg-coal text-bone">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:px-10 md:py-32 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p data-reveal className="eyebrow flex items-center gap-3 text-bone/60">
                <span className="h-px w-8 bg-red" /> O FFA sistemu
              </p>
              <figure data-reveal="img" className="relative mt-8 hidden aspect-[4/5] overflow-hidden lg:block">
                <Image src="/img/trening-uzivo.jpg" alt="Trener sa klijentkinjom na treningu, Endorfin Trening Centar" fill sizes="30vw" className="object-cover" />
              </figure>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <blockquote data-reveal className="display text-[clamp(2.1rem,5.6vw,4.4rem)] leading-[0.98]">
                „Adekvatan trening i ishrana deo su lične higijene. <span className="text-red">Estetska transformacija</span> je
                odraz unutrašnjeg sklada organizma.“
              </blockquote>
              <div data-reveal style={d(0.1)} className="mt-10 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2">
                <p className="leading-relaxed text-bone/75">
                  FFA ne prodaje trening po satu. Prodaje promenu — kroz sistem u kome trening, ishrana i praćenje rade zajedno.
                </p>
                <dl className="space-y-4 text-sm">
                  {[
                    ["Gde", "Endorfin Trening Centar, NBG"],
                    ["Kako", "Uživo ili online"],
                    ["Fokus", "Trening · ishrana · praćenje"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3">
                      <dt className="text-bone/50">{k}</dt>
                      <dd className="text-right font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <figure data-reveal="img" className="relative mt-10 aspect-[4/5] overflow-hidden lg:hidden">
                <Image src="/img/trening-uzivo.jpg" alt="Trener sa klijentkinjom na treningu, Endorfin Trening Centar" fill sizes="100vw" className="object-cover" />
              </figure>
            </div>
          </div>
        </section>

        {/* PONUDA */}
        <section id="ponuda" className="border-y border-white/5 bg-coal text-bone">
          <div className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10 md:pb-32">
            <div className="flex flex-wrap items-end justify-between gap-6 border-b border-bone/80 pb-6">
              <h2 data-reveal className="display text-[clamp(3rem,9vw,7rem)]">Ponuda</h2>
              <p data-reveal style={d(0.1)} className="max-w-xs text-sm text-bone/60">
                Tri načina da uđete u FFA sistem. Isti principi — različit format.
              </p>
            </div>

            {SERVICES.map((s, i) => (
              <article key={s.n} className="grid gap-8 border-b border-white/15 py-12 md:grid-cols-12 md:gap-8 md:py-16">
                <div data-reveal className="md:col-span-1">
                  <span className="display text-2xl text-red">{s.n}</span>
                </div>
                <div className={`md:col-span-6 ${i % 2 ? "md:order-3 md:col-span-5 md:col-start-8" : ""}`}>
                  <h3 data-reveal className="display text-[clamp(2.4rem,5vw,3.8rem)]">{s.title}</h3>
                  <p data-reveal style={d(0.08)} className="mt-4 max-w-md text-lg leading-relaxed text-bone/75">
                    {s.lead}
                  </p>
                  <p data-reveal style={d(0.12)} className="eyebrow mt-8 text-bone/50">
                    Šta dobijate
                  </p>
                  <ul data-reveal style={d(0.16)} className="mt-3 space-y-2.5">
                    {s.get.map((g) => (
                      <li key={g} className="flex gap-3 text-[0.95rem]">
                        <span className="mt-[0.6em] h-0.5 w-3.5 shrink-0 bg-red" /> {g}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={DM}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-reveal
                    style={d(0.2)}
                    className="group mt-8 inline-flex items-center gap-2 border-b border-bone/80 pb-1 text-sm font-semibold uppercase tracking-[0.12em] transition-colors hover:border-red hover:text-red"
                  >
                    Pitaj za {s.title.toLowerCase()} <Arrow className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                <div className={`md:col-span-5 ${i % 2 ? "md:order-2 md:col-span-5 md:col-start-2" : ""}`}>
                  <figure
                    data-reveal="img"
                    className="relative mx-auto aspect-[4/5] max-w-[380px] overflow-hidden bg-coal"
                  >
                    <Image src={s.img} alt={s.alt} fill sizes="(min-width:768px) 380px, 100vw" className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]" />
                  </figure>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* REZULTATI */}
        <section id="rezultati" className="py-20 md:py-32">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <p data-reveal className="eyebrow flex items-center gap-3 text-ash">
                  <span className="h-px w-8 bg-red" /> Rezultati
                </p>
                <h2 data-reveal style={d(0.08)} className="display mt-6 text-[clamp(3rem,8vw,6.4rem)]">
                  Razlika se
                  <br />
                  <span className="text-red">vidi.</span>
                </h2>
                <p data-reveal style={d(0.14)} className="mt-6 max-w-sm leading-relaxed text-bone/70">
                  Stvarni klijenti, iste poze, isti ugao. Pomerite klizač i uporedite početno stanje sa rezultatom.
                </p>
                <div data-reveal style={d(0.2)} className="mt-8 hidden lg:block">
                  <Cta href={IG}>Sve transformacije na Instagramu</Cta>
                </div>
              </div>
              <div data-reveal="img" className="lg:col-span-6 lg:col-start-7">
                <Compare
                  before="/img/t2-pre.jpg"
                  after="/img/t2-posle.jpg"
                  alt="Transformacija klijentkinje"
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="mx-auto aspect-[4/5] max-w-lg"
                />
              </div>
            </div>

            <div className="-mx-5 mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
              {RESULTS.map((r, i) => (
                <div key={r.pre} data-reveal style={d(i * 0.08)} className="w-[78%] shrink-0 snap-start md:w-auto">
                  <Pair pre={r.pre} posle={r.posle} sizes="(min-width:768px) 16vw, 40vw" />
                </div>
              ))}
              <a
                href={IG}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                style={d(0.16)}
                className="group flex aspect-square w-[78%] shrink-0 snap-start flex-col justify-between bg-red p-6 text-white md:aspect-auto md:w-auto"
              >
                <span className="eyebrow">@f_.f_.a._</span>
                <span className="display text-[2.6rem] md:text-[clamp(2.2rem,3.4vw,3.2rem)]">
                  Još transformacija na Instagramu
                </span>
                <Arrow className="size-6 transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </div>
            <p className="mt-4 text-xs text-ash md:hidden">Prevucite za još →</p>
            <div className="mt-10 lg:hidden">
              <Cta href={IG}>Sve transformacije na Instagramu</Cta>
            </div>
          </div>
        </section>

        {/* ZAŠTO FFA */}
        <section className="border-y border-white/5 bg-coal text-bone">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:px-10 md:py-32 lg:grid-cols-12 lg:gap-8">
            <h2 data-reveal className="display text-[clamp(3rem,8vw,6.4rem)] lg:col-span-4">
              Zašto
              <br />
              FF<span className="text-red">A</span>
            </h2>
            <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
              {WHY.map(([t, p], i) => (
                <li key={t} data-reveal style={d((i % 2) * 0.08)} className="border-t border-white/20 py-7">
                  <span className="text-xs font-semibold text-red">0{i + 1}</span>
                  <h3 className="display mt-3 text-[1.9rem]">{t}</h3>
                  <p className="mt-2 leading-relaxed text-bone/70">{p}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PROCES */}
        <section id="proces" className="py-20 md:py-32">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <p data-reveal className="eyebrow flex items-center gap-3 text-ash">
              <span className="h-px w-8 bg-red" /> Kako počinje
            </p>
            <h2 data-reveal style={d(0.08)} className="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,5.6rem)]">
              Četiri koraka do <span className="text-red">nove forme.</span>
            </h2>
            <ol className="mt-14 grid md:mt-20 md:grid-cols-4">
              {STEPS.map(([t, p], i) => (
                <li
                  key={t}
                  data-reveal
                  style={d(i * 0.1)}
                  className="relative border-l border-white/15 pb-10 pl-6 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pr-8 md:pt-8"
                >
                  <span className="absolute -left-[5px] top-0 size-[9px] rotate-45 bg-red md:-top-[5px] md:left-0" />
                  <span className="display text-5xl text-bone/20 md:text-6xl">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold">{t}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-bone/65">{p}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* INSTAGRAM */}
        <section className="border-t border-white/10 py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p data-reveal className="eyebrow flex items-center gap-3 text-ash">
                  <span className="h-px w-8 bg-red" /> Instagram
                </p>
                <a
                  href={IG}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-reveal
                  style={d(0.08)}
                  className="display mt-5 block text-[clamp(2.4rem,7vw,5.2rem)] normal-case transition-colors hover:text-red"
                >
                  @f_.f_.a._
                </a>
              </div>
              <p data-reveal style={d(0.12)} className="max-w-sm leading-relaxed text-bone/65">
                Serijal „Put transformacije“, saveti o treningu i ishrani i nove transformacije — sve prvo izlazi na Instagramu.
              </p>
            </div>
            <ul className="-mx-5 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
              {FEED.map((f, i) => (
                <li key={f.src} data-reveal style={d(i * 0.06)} className="w-[62%] shrink-0 snap-start md:w-auto">
                  <a
                    href={`https://www.instagram.com/reel/${f.reel}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${f.tag}: ${f.title} — pogledaj reel na Instagramu`}
                    className="group relative block aspect-[9/16] overflow-hidden bg-coal"
                  >
                    <Image src={f.src} alt={f.alt} fill sizes="(min-width:768px) 25vw, 62vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
                    <span className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-ink/50 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-red">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M7 4v16l13-8z" />
                      </svg>
                    </span>
                    <span className="absolute inset-x-4 bottom-4">
                      <span className="eyebrow block !text-[0.6rem] text-red">{f.tag}</span>
                      <span className="display mt-1.5 block text-[1.7rem] text-white">{f.title}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Cta href={IG} variant="ghost">
                Pratite FFA na Instagramu
              </Cta>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="kontakt" className="relative overflow-hidden border-t-4 border-red bg-ink text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[15%] top-1/2 h-[140%] w-[70%] -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(222,44,44,0.28),transparent)]"
          />
          <div data-reveal className="absolute right-10 top-1/2 hidden w-[min(34vw,460px)] -translate-y-1/2 lg:block">
            <Logo className="h-auto w-full" />
          </div>
          <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
            <div data-reveal className="mb-10 w-32 lg:hidden">
              <Logo className="h-auto w-full" />
            </div>
            <p data-reveal className="eyebrow flex items-center gap-3 text-white/70">
              <span className="h-px w-8 bg-red" /> Kontakt
            </p>
            <h2 data-reveal style={d(0.08)} className="display mt-6 max-w-3xl text-[clamp(3rem,8vw,7rem)]">
              Prvi korak je jedna poruka.
            </h2>
            <p data-reveal style={d(0.14)} className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
              Napišite nam na Instagramu svoj cilj i da li želite trening uživo ili online. Ostalo dogovaramo zajedno.
            </p>
            <div data-reveal style={d(0.2)} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Cta href={DM}>
                Pošalji poruku
              </Cta>
              <Cta href={MAPS} variant="ghost">
                Endorfin T.C. na mapi
              </Cta>
            </div>
            <p data-reveal style={d(0.26)} className="mt-10 text-sm text-white/60">
              Endorfin Trening Centar · {ADDRESS}
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-12 md:px-10 md:py-16">
          <div className="md:col-span-4">
            <Logo className="h-24 w-auto" />
            <p className="mt-4 text-[0.62rem] font-semibold italic tracking-[0.18em] text-ash">be wise and stay strong</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ash">Sistem za telesne transformacije. Lični i online trening.</p>
          </div>
          <nav aria-label="Navigacija u podnožju" className="md:col-span-3">
            <p className="eyebrow text-ash">Stranica</p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-bone/80 transition-colors hover:text-red">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-5">
            <p className="eyebrow text-ash">Kontakt</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={IG} target="_blank" rel="noopener noreferrer" className="text-bone/80 transition-colors hover:text-red">
                  Instagram · @f_.f_.a._
                </a>
              </li>
              <li>
                <a href={ENDORFIN} target="_blank" rel="noopener noreferrer" className="text-bone/80 transition-colors hover:text-red">
                  Endorfin Trening Centar · @endorfin_trening_centar
                </a>
              </li>
              <li>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-bone/80 transition-colors hover:text-red">
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1400px] justify-between border-t border-white/10 px-5 py-6 text-xs text-ash md:px-10">
          <span>© {new Date().getFullYear()} FFA</span>
          <a href="#top" className="transition-colors hover:text-bone">
            Nazad na vrh ↑
          </a>
        </div>
      </footer>
    </>
  );
}
