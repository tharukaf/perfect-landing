import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Check } from "lucide-react"
import { LogoGlow } from "@/components/logo-glow"
import TechText from "@/components/tech-text"
import { ThreeDButton } from "@/components/evil-buttons/3d-button"

const TRUST_ITEMS = [
  "In business for over 30 years",
  "In-house design, print, and fulfillment",
  "Dedicated account support on every job",
]

/**
 * Tall scroll scene: the inner stage sticks to the viewport while ScrollFx
 * scrubs `#hero-card` from a tilted-in card to full-bleed and back (see
 * scroll-fx.tsx). Without motion it is a plain one-screen hero; the card's
 * resting state is set here in classes so it doesn't flash before JS.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      data-bg="hero"
      className="relative h-dvh min-h-[40rem] w-full motion-safe:h-[240vh]"
    >
      <div className="sticky top-0 h-dvh min-h-[40rem] w-full overflow-hidden">
        <div
          id="hero-card"
          className="hero-card absolute inset-0 origin-center overflow-hidden rounded-[56px] border border-white/10 bg-black shadow-2xl"
        >
          <div id="hero-card-inner" className="absolute inset-0">
            <LogoGlow>
              <TechText
                text="perfect"
                fontWeight={600}
                fontSize={520}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
              />
            </LogoGlow>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-start px-6 pt-28 md:items-center md:px-[6vw] md:pt-0">
          <div
            id="hero-copy"
            className="pointer-events-auto flex w-full flex-col md:w-[40%]"
          >
            <Badge variant="outline" className="w-fit bg-background/30 backdrop-blur">
              Since 1990
            </Badge>

            <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              We don&apos;t just print,
              <br className="hidden sm:block" /> we perfect.
            </h1>

            <p className="mt-5 text-lg text-muted-foreground">
              Digital printing, offset printing, and large format, plus direct
              mail, packaging, and custom marketing materials, so your message
              stands out every time.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" id="hero-cta" className="w-full sm:w-auto">
                <ThreeDButton className="w-full">
                  <span className="inline-flex items-center gap-1.5">
                    Request a Quote
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </ThreeDButton>
              </Link>
              <Button
                render={<Link href="/portfolio" />}
                nativeButton={false}
                variant="ghost"
                className="w-full sm:w-auto"
              >
                View Our Work
              </Button>
            </div>

            <div className="hidden md:block">
              <Separator className="my-8" />

              <ul className="flex flex-col gap-2.5">
                {TRUST_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check
                      className="size-4 shrink-0 text-foreground"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
