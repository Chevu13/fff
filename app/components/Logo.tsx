import Image from "next/image";

export function Logo({ className = "h-12 w-auto", preload = false }: { className?: string; preload?: boolean }) {
  return (
    <Image
      src="/logo-endorfin.png"
      alt="Endorfin Trening Centar"
      width={858}
      height={760}
      sizes="160px"
      preload={preload}
      className={className}
    />
  );
}
