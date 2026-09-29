import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { portfolioItems } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Portfolio | Perfect Communications",
  description:
    "A selection of print, packaging, and direct mail work from Perfect Communications.",
};

export default function PortfolioPage() {
  return (
    <div className="flex w-full flex-col items-center px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <Badge variant="outline" className="mb-4 tracking-widest uppercase">
            Portfolio
          </Badge>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Work we&apos;re proud to have printed
          </h1>
          <p className="mt-4 text-muted-foreground">
            A sample of the packaging, direct mail, and marketing projects
            we&apos;ve produced for our clients over the years.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {portfolioItems.map((item) => (
            <Card
              key={item.client}
              className="flex flex-col gap-2 rounded-lg border-border p-6"
            >
              <span className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
                {item.type}
              </span>
              <h2 className="font-heading font-semibold tracking-tight">
                {item.client}
              </h2>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
