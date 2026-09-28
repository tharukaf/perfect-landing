import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { portfolioItems } from "@/lib/portfolio-data"

const featured = portfolioItems[0]
const rest = portfolioItems.slice(1, 5)

export default function Bento() {
  return (
    <section id="portfolio" className="flex w-full items-center justify-center px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 tracking-widest uppercase">
              Portfolio
            </Badge>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Work we&apos;re proud to have printed
            </h2>
            <p className="mt-4 text-muted-foreground">
              A sample of the packaging, direct mail, and marketing projects
              we&apos;ve produced for our clients.
            </p>
          </div>
          <Button
            render={<Link href="/portfolio" />}
            nativeButton={false}
            variant="outline"
          >
            View Full Portfolio
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-[repeat(2,minmax(0,1fr))]">
          <Card className="flex flex-col justify-end gap-3 rounded-lg border-border p-8 sm:col-span-2 md:col-span-2 md:row-span-2">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              {featured.type}
            </span>
            <h3 className="font-heading text-2xl font-semibold tracking-tight">
              {featured.client}
            </h3>
            <p className="max-w-sm text-muted-foreground">
              {featured.description}
            </p>
          </Card>

          {rest.map((item) => (
            <Card
              key={item.client}
              className="flex flex-col justify-end gap-2 rounded-lg border-border p-6"
            >
              <span className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
                {item.type}
              </span>
              <h3 className="font-heading font-semibold tracking-tight">
                {item.client}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
