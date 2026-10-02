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
    <section id="portfolio" data-bg="work" className="flex w-full items-center justify-center px-6 py-20 sm:py-32 md:px-[4vw]">
      <div className="mx-auto w-full max-w-[1700px]">
        <div data-reveal="up" className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 tracking-widest uppercase">
              Portfolio
            </Badge>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl">
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

        <div data-stagger data-reveal="up" className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:min-h-[34rem] md:grid-cols-4 md:grid-rows-[repeat(2,minmax(0,1fr))]">
          <Card className="glass-card flex flex-col justify-end gap-3 rounded-3xl p-8 py-8 ring-0 sm:col-span-2 md:col-span-2 md:row-span-2 md:p-10">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              {featured.type}
            </span>
            <h3 className="font-heading text-3xl font-semibold tracking-tight">
              {featured.client}
            </h3>
            <p className="max-w-sm text-muted-foreground">
              {featured.description}
            </p>
          </Card>

          {rest.map((item) => (
            <Card
              key={item.client}
              className="glass-card flex flex-col justify-end gap-2 rounded-3xl p-6 ring-0"
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
