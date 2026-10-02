import Image from "next/image";
import { customers } from "@/lib/customers";

export default function LogoCloud() {
  return (
    <section data-bg="work" className="flex w-full flex-col items-center py-20 sm:py-28">
      <style>{`
        @keyframes logo-cloud-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .logo-cloud-track {
          animation: logo-cloud-marquee 32s linear infinite;
        }
        .logo-cloud-mask:hover .logo-cloud-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-cloud-track {
            animation: none;
          }
        }
      `}</style>

      <div data-reveal="up" className="mx-auto w-full text-center">
        <p className="px-6 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          We&apos;ve served customers dependably for more than 30 years
        </p>

        <div className="logo-cloud-mask relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="logo-cloud-track flex w-max items-center">
            {[...customers, ...customers].map(({ name, src }, index) => (
              <div
                key={`${name}-${index}`}
                className="group mx-5 flex size-40 shrink-0 items-center justify-center overflow-hidden rounded-none border border-border bg-[#070b16] p-2"
                aria-hidden={index >= customers.length ? "true" : undefined}
              >
                <Image
                  src={src}
                  alt={name}
                  width={160}
                  height={64}
                  className="size-full scale-[1.15] object-contain brightness-0 invert opacity-70 transition-opacity duration-200 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
