import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThreeDButton } from "@/components/evil-buttons/3d-button"
import { ArrowRight } from "lucide-react"

export default function Cta() {
  return (
    <section
      data-bg="cta"
      className="flex min-h-[80dvh] w-full items-center justify-center px-6 py-24 sm:py-32"
    >
      <div
        data-reveal="scale"
        data-no-out
        className="mx-auto w-full max-w-5xl text-center"
      >
        <Badge
          variant="outline"
          className="mb-6 bg-background/30 tracking-widest uppercase backdrop-blur"
        >
          Get Started
        </Badge>
        <h2 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Let&apos;s take the stress out of your next print job.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Our mission is to give print buyers a more positive and efficient
          buying experience, from first quote to final delivery.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="w-full sm:w-auto">
            <ThreeDButton className="w-full">
              <span className="inline-flex items-center gap-1.5">
                Request a Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </ThreeDButton>
          </Link>
          <Button
            variant="secondary"
            render={<Link href="/portfolio" />}
            nativeButton={false}
            className="w-full sm:w-auto"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  )
}
