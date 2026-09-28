import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Perfect has always met—and, at times, exceeded—our expectations. They continue to provide high quality print materials and their customer service is top notch.",
    name: "Dave Sloboda",
    role: "Director, Production & Design Operations",
    company: "FS Investments",
  },
  {
    quote:
      "Over the years, I have been able to trust Perfect with my most critical projects because I know they will be done right the first time. When it's time to print, I do so with confidence.",
    name: "Amy Yenchik",
    role: "Creative Director",
    company: "Center City District",
  },
]

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="flex w-full items-center justify-center px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <Badge variant="outline" className="mb-4 tracking-widest uppercase">
            Client Stories
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Trusted by clients for over 30 years
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A few words from the teams we&apos;ve printed for.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {testimonials.map(({ quote, name, role, company }) => (
            <Card
              key={name}
              className="flex h-full flex-col border-border bg-card p-6 transition-colors duration-200 hover:border-foreground/20"
            >
              <div className="flex flex-1 flex-col gap-4">
                <Quote className="size-7 text-foreground opacity-20" aria-hidden="true" />
                <blockquote className="flex-1 text-[15px] leading-relaxed text-foreground">
                  &ldquo;{quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Avatar className="size-10 border border-border">
                  <AvatarFallback className="text-xs font-semibold">
                    {getInitials(name)}
                  </AvatarFallback>
                </Avatar>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-foreground">
                    {name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {role}, <span className="font-medium text-foreground">{company}</span>
                  </span>
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
