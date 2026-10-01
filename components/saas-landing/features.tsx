import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Printer, Truck, Database, Check } from "lucide-react";
import Cubes from "@/components/Cubes";
import PrinterShowcase from "@/components/saas-landing/printer-showcase";

/** Props a call site may pass through to an icon. */
type IconProps = { className?: string; size?: number | string };

type Row = {
  eyebrow: string;
  Icon: (p: IconProps) => ReactNode;
  title: string;
  body: string;
  bullets: string[];
  /** Overrides the default icon-chip visual when set. */
  visual?: ReactNode;
};

const rows: Row[] = [
  {
    eyebrow: "Direct Mail & Fulfillment",
    Icon: (p: IconProps) => <Truck {...p} />,
    title: "Direct mail, warehousing, and fulfillment",
    body: "We handle the full lifecycle of a mailing or fulfillment program, not just the print run.",
    bullets: [
      "Direct mail campaigns",
      "Warehousing & fulfillment",
      "Bindery & finishing",
    ],
  },
  {
    eyebrow: "Digital & Data Services",
    Icon: (p: IconProps) => <Database {...p} />,
    title: "Variable data, portals, and data management",
    body: "Tools that connect your data to your print, so every piece that goes out is personalized and accounted for.",
    bullets: [
      "Variable data programming",
      "Custom portals & flipbooks",
      "Online print management portals",
    ],
    visual: (
      <Cubes
        gridSize={7}
        cubeSize={45}
        maxAngle={60}
        radius={4}
        borderStyle="2px dotted #ffffff"
        faceColor="#0a1220"
        rippleColor="#ffffff"
        rippleSpeed={1.5}
        autoAnimate
        rippleOnClick
      />
    ),
  },
];

export default function Features() {
  return (
    <section
      id="services"
      className="flex w-full items-center justify-center px-6 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <Badge variant="outline" className="mb-4 tracking-widest uppercase">
            Services
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Everything your print program needs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Explore our comprehensive range of services, from direct mail and
            packaging to custom marketing materials.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="relative flex min-h-[44rem] w-full items-center overflow-hidden">
            <div className="absolute inset-0">
              <PrinterShowcase />
            </div>
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-background to-transparent"
              aria-hidden="true"
            />
            <div className="relative z-10 w-full px-6 py-10 sm:px-10">
              <div className="max-w-md rounded-lg bg-gradient-to-r from-background/90 to-transparent p-6">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-border bg-muted">
                    <Printer
                      className="size-3.5 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    Print Production
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight sm:text-[1.75rem] sm:leading-snug">
                  Digital, offset, and large format printing
                </h3>

                <p className="mt-5 leading-relaxed text-muted-foreground">
                  From short-run digital jobs to full offset press runs,
                  produced in-house and finished to spec.
                </p>

                <ul className="mt-8 flex flex-col gap-3">
                  {[
                    "Digital printing for fast turnaround",
                    "Offset & commercial printing at scale",
                    "Large format printing & signage",
                  ].map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="flex size-[18px] shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <Check className="size-2.5" aria-hidden="true" />
                      </span>
                      <span className="text-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Separator />

          {rows.map((row, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={row.eyebrow}>
                <div
                  className={`flex flex-col gap-10 py-16 md:flex-row md:items-center md:gap-16 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex flex-1 flex-col gap-6">
                    <div className="flex items-center gap-2">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-border bg-muted">
                        <row.Icon
                          className="size-3.5 text-muted-foreground"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                        {row.eyebrow}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-[1.75rem] sm:leading-snug">
                      {row.title}
                    </h3>

                    <p className="leading-relaxed text-muted-foreground">
                      {row.body}
                    </p>

                    <ul className="flex flex-col gap-3">
                      {row.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-center gap-3 text-sm"
                        >
                          <span className="flex size-[18px] shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <Check className="size-2.5" aria-hidden="true" />
                          </span>
                          <span className="text-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-1 items-center justify-center">
                    {row.visual ?? (
                      <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg border border-border bg-muted">
                        <span className="flex size-20 items-center justify-center rounded-2xl border border-border bg-background">
                          <row.Icon
                            className="size-9 text-foreground/70"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {index < rows.length - 1 && <Separator />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
