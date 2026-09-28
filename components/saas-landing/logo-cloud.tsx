import Image from "next/image"
import { customers } from "@/lib/customers"

export default function LogoCloud() {
  return (
    <section className="flex w-full flex-col items-center px-6 py-14 sm:py-16">
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

      <div className="mx-auto w-full max-w-6xl text-center">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          We&apos;ve served customers dependably for more than 30 years
        </p>

        <div className="logo-cloud-mask relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="logo-cloud-track flex w-max items-center">
            {[...customers, ...customers].map(({ name, src }, index) => (
              <div
                key={`${name}-${index}`}
                className="flex shrink-0 items-center px-8 grayscale transition-all duration-200 hover:grayscale-0"
                aria-hidden={index >= customers.length ? "true" : undefined}
              >
                <Image
                  src={src}
                  alt={name}
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
