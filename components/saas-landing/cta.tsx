import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThreeDButton } from "@/components/evil-buttons/3d-button"
import { ArrowRight } from "lucide-react"

export default function Cta() {
  return (
    <section className="flex w-full items-center justify-center px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl rounded-xl border border-border bg-muted/30 px-6 py-14 text-center sm:px-12 sm:py-20">
        <Badge variant="outline" className="mb-4 tracking-widest uppercase">
          Get Started
        </Badge>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Let&apos;s take the stress out of your next print job.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          Our mission is to give print buyers a more positive and efficient
          buying experience, from first quote to final delivery.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
