"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { CalendarDays, Images, Users } from "lucide-react"

/** Props a call site may pass through to an icon. */
type IconProps = { className?: string; size?: number | string }

/** An icon held in data and rendered later, e.g. `<item.icon className="size-4" />`. */
type IconRenderer = (props: IconProps) => React.ReactNode

type Metric = {
  id: string
  icon: IconRenderer
  target: number
  suffix: string
  label: string
}

const metrics: Metric[] = [
  {
    id: "years",
    icon: (p: IconProps) => <CalendarDays {...p} />,
    target: 30,
    suffix: "+",
    label: "Years in business",
  },
  {
    id: "projects",
    icon: (p: IconProps) => <Images {...p} />,
    target: 42,
    suffix: "",
    label: "Portfolio projects",
  },
  {
    id: "clients",
    icon: (p: IconProps) => <Users {...p} />,
    target: 8,
    suffix: "",
    label: "Long-term clients",
  },
]

function formatValue(value: number, metric: Metric) {
  return `${Math.round(value)}${metric.suffix}`
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null)
  // Starts at the final value, not at 0. The count-up is an enhancement layered
  // on afterwards, so the server-rendered HTML carries the real numbers -- at 0
  // the markup told crawlers and no-JS visitors that every stat was zero.
  const [progress, setProgress] = useState(1)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    // Reduced motion keeps the values already on screen; nothing to animate.
    if (prefersReduced) return

    let frame = 0
    let started = false

    const animate = (start: number) => {
      const duration = 1600

      const step = (now: number) => {
        const elapsed = now - start
        const linear = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - linear, 3)
        setProgress(eased)
        if (linear < 1) {
          frame = requestAnimationFrame(step)
        }
      }

      frame = requestAnimationFrame(step)
    }

    // Only rewind to 0 if the section is still off-screen. Rewinding while it is
    // already visible would flash the real numbers back to zero on hydration and
    // count them up again in front of the reader.
    const box = node.getBoundingClientRect()
    const alreadyVisible = box.top < window.innerHeight && box.bottom > 0
    if (alreadyVisible) return

    setProgress(0)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true
            animate(performance.now())
            observer.disconnect()
          }
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      data-bg="proof"
      className="flex w-full items-center justify-center px-6 py-24 sm:py-40 md:px-[4vw]"
    >
      <div className="mx-auto w-full max-w-[1500px]">
        <div data-reveal="up" className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 tracking-widest uppercase">
            By The Numbers
          </Badge>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Numbers our clients trust
          </h2>
          <p className="mt-4 text-base text-balance text-muted-foreground">
            Three decades of taking the stress out of print production.
          </p>
        </div>

        <ul data-stagger data-reveal="up" className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {metrics.map((metric) => {
            const Icon = metric.icon
            const current = metric.target * progress
            return (
              <li
                key={metric.id}
                className="glass-card group flex min-h-72 flex-col gap-4 rounded-3xl p-8 transition-colors hover:bg-background/40 sm:p-10"
              >
                <span className="flex size-10 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="mt-auto">
                  <p
                    className={cn(
                      "text-6xl font-semibold tracking-tight tabular-nums sm:text-7xl lg:text-8xl"
                    )}
                  >
                    {formatValue(current, metric)}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
