import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { portfolioItems } from "@/lib/portfolio-data";
import FlexCarousel from "@/components/FlexCarousel";

export const metadata: Metadata = {
  title: "Portfolio | Perfect Communications",
  description:
    "A selection of print, packaging, and direct mail work from Perfect Communications.",
};

const carouselItems = [
  {
    src: "/portfolio/tdc-instore.jpg",
    alt: "A circular in-store navigation display reading Insight, Inspire, Instore",
    title: "TDC Instore",
    subtitle: "Interactive Display",
  },
  {
    src: "/portfolio/oppenheimerfunds-golf.jpg",
    alt: "A golf ball gift box and tournament welcome booklet for OppenheimerFunds",
    title: "OppenheimerFunds",
    subtitle: "Golf Tournament Kit",
  },
  {
    src: "/portfolio/textbook-publishing.jpg",
    alt: "A stack of printed textbooks and a course book cover",
    title: "Higher Education Publishing",
    subtitle: "Textbook Printing",
  },
  {
    src: "/portfolio/rutgers-camden-wall.jpg",
    alt: "A digital-style wayfinding wall graphic for Rutgers University-Camden",
    title: "Rutgers University–Camden",
    subtitle: "Campus Wayfinding",
  },
  {
    src: "/portfolio/rutgers-camden-viewbook.jpg",
    alt: "An open red admissions viewbook spread for Rutgers University-Camden",
    title: "Rutgers University–Camden",
    subtitle: "Admissions Viewbook",
  },
  {
    src: "/portfolio/franklin-institute.jpg",
    alt: "A dark branded folder and mini brochure for The Franklin Institute",
    title: "The Franklin Institute",
    subtitle: "Branded Folder",
  },
  {
    src: "/portfolio/sp2-penn-top10.jpg",
    alt: "A red report cover titled SP2 Penn Top 10",
    title: "Penn SP2",
    subtitle: "Policy Report",
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-full px-6 pt-32 sm:pt-36">
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
        </div>
      </div>

      {/* Full-bleed: spans the app shell's full width, ignoring the page's
          usual px-6/max-w-6xl column. */}
      <div className="my-12 h-[560px] w-full">
        <FlexCarousel
          items={carouselItems}
          preset="liquid"
          intro="rise"
          cardHeight={0.5}
          gap={12}
          squeeze={0.2}
          focusOnClick
          captions
        />
      </div>

      <div className="w-full px-6 pb-16 sm:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
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
    </div>
  );
}
