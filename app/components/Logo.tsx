export function Logo({ tagline = false }: { tagline?: boolean }) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span className="display flex items-center gap-[0.12em] text-[1.9rem] italic [transform:skewX(-8deg)]">
        FF<span className="text-red">A</span>
      </span>
      {tagline && (
        <span className="mt-2 text-[0.62rem] font-semibold italic tracking-[0.18em] text-ash">
          be wise and stay strong
        </span>
      )}
    </span>
  );
}
