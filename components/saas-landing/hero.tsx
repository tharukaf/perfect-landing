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

export default function Hero() {
  return (
    <section className="flex w-full items-center justify-center px-6 py-16 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-start md:gap-16">
        <div className="flex flex-col">
          <Badge variant="outline" className="w-fit">
            Since 1990
          </Badge>

          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
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

          <Separator className="my-8" />

          <ul className="flex flex-col gap-2.5">
            {TRUST_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Check className="size-4 shrink-0 text-foreground" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border">
            <LogoGlow>
              <TechText
                text="perfect"
                fontWeight={600}
                fontSize={175}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
              />
            </LogoGlow>
          </div>

          <div
            className="absolute -right-3 -bottom-3 -z-10 size-full rounded-xl border border-border bg-muted"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
