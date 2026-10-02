import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Printer, Truck, Database, Check } from "lucide-react";
import Cubes from "@/components/Cubes";
import ElectricLogo from "@/components/ElectricLogo";
import PrinterShowcase from "@/components/saas-landing/printer-showcase";

/** Props a call site may pass through to an icon. */
type IconProps = { className?: string; size?: number | string };
type IconRenderer = (p: IconProps) => ReactNode;

type Row = {
  eyebrow: string;
  Icon: IconRenderer;
  title: string;
  body: string;
  bullets: string[];
  /** Backdrop tint ScrollFx fades to while this row is on screen. */
  bg: string;
  /** Side the visual sits on; the copy card overlaps it from the other side. */
  visualSide: "left" | "right";
  visual: ReactNode;
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
    bg: "print",
    visualSide: "left",
    visual: (
      <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
        <ElectricLogo
          src="/envelope.jpg"
          color="#090548"
          glowColor="#ffffff"
          scale={0.55}
          strands={4}
          bend={0}
          crackle={0}
          arcs={0.85}
          speed={0}
          interactive
          intensity={0.8}
          glow={1.45}
          thickness={0.5}
          flicker={0}
          cursorIntensity={0}
        />
      </div>
    ),
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
    bg: "digital",
    visualSide: "right",
    visual: (
      <div className="relative flex h-[22rem] w-full items-center justify-center sm:h-[30rem] md:justify-start lg:h-[38rem]">
        {/* magenta bloom behind the grid, like the lit-from-within object in
            the reference */}
        <div
          data-parallax="12"
          className="absolute left-[10%] size-[70%] rounded-full bg-[#d4189a]/40 blur-[110px]"
          aria-hidden="true"
        />
        <div className="relative origin-center scale-[0.58] sm:scale-[0.78] md:origin-left lg:scale-100">
          <Cubes
            gridSize={7}
            cubeSize={64}
            maxAngle={60}
            radius={4}
            borderStyle="2px dotted rgba(255,255,255,0.85)"
            faceColor="#0b0614"
            rippleColor="#ffffff"
            rippleSpeed={1.5}
            autoAnimate
            rippleOnClick
          />
        </div>
      </div>
    ),
  },
];

function Eyebrow({
  Icon,
  children,
}: {
  Icon: IconRenderer;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-border bg-background/40">
        <Icon className="size-3.5 text-muted-foreground" aria-hidden="true" />
      </span>
      <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        {children}
      </span>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((bullet) => (
        <li key={bullet} className="flex items-center gap-3 text-sm">
          <span className="flex size-[18px] shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Check className="size-2.5" aria-hidden="true" />
          </span>
          <span className="text-foreground">{bullet}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Features() {
  return (
    <div id="services" className="w-full">
      {/* Intro + full-bleed printer scene */}
      <section data-bg="print" className="w-full pt-28 sm:pt-40">
        <div
          data-reveal="up"
          className="mx-auto mb-12 max-w-2xl px-6 text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 bg-background/30 tracking-widest uppercase backdrop-blur"
          >
            Services
          </Badge>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Everything your print program needs
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Explore our comprehensive range of services, from direct mail and
            packaging to custom marketing materials.
          </p>
        </div>

        <div className="relative flex min-h-[46rem] w-full items-center overflow-hidden md:min-h-[54rem]">
          <div
            data-parallax="8"
            className="absolute inset-x-0 -top-[10%] -bottom-[10%]"
          >
            <PrinterShowcase />
          </div>

          <div className="relative z-10 w-full px-6 py-10 md:px-[6vw]">
            <div
              data-reveal="left"
              className="glass-card max-w-lg rounded-3xl p-8 md:p-10"
            >
              <Eyebrow Icon={(p) => <Printer {...p} />}>
                Print Production
              </Eyebrow>

              <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight sm:text-[1.9rem] sm:leading-snug">
                Digital, offset, and large format printing
              </h3>

              <p className="mt-5 leading-relaxed text-muted-foreground">
                From short-run digital jobs to full offset press runs, produced
                in-house and finished to spec.
              </p>

              <div className="mt-8">
                <Bullets
                  items={[
                    "Digital printing for fast turnaround",
                    "Offset & commercial printing at scale",
                    "Large format printing & signage",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {rows.map((row) => {
        const visualLeft = row.visualSide === "left";
        return (
          <section
            key={row.eyebrow}
            data-bg={row.bg}
            className="w-full py-20 sm:py-32"
          >
            <div
              className={`mx-auto flex w-full max-w-[1700px] flex-col items-center px-6 md:px-[4vw] ${
                visualLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                data-reveal={visualLeft ? "left" : "right"}
                className="w-full md:w-[62%]"
              >
                {row.visual}
              </div>

              {/* Overlaps the visual by ~10% so copy and shader read as one
                  composition instead of two separate columns. */}
              <div
                data-reveal={visualLeft ? "right" : "left"}
                className={`glass-card relative z-10 -mt-10 w-full rounded-3xl p-8 md:mt-0 md:w-[44%] md:p-10 ${
                  visualLeft ? "md:-ml-[10%]" : "md:-mr-[10%]"
                }`}
              >
                <div className="flex flex-col gap-6">
                  <Eyebrow Icon={row.Icon}>{row.eyebrow}</Eyebrow>
                  <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-[1.9rem] sm:leading-snug">
                    {row.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {row.body}
                  </p>
                  <Bullets items={row.bullets} />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
