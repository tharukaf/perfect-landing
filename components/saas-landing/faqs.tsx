"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Mail, ArrowRight } from "lucide-react"

const faqs = [
  {
    q: "What's your typical turnaround time?",
    a: "Most digital print jobs ship within 3-5 business days of final file approval. Offset, large format, and packaging runs vary by job size; we'll give you a firm date on your quote.",
  },
  {
    q: "What file formats do you accept?",
    a: "Print-ready PDFs with fonts embedded and images at 300 DPI or higher. We can also work from native InDesign, Illustrator, or Photoshop files, and our team will flag any file issues before your job goes to press.",
  },
  {
    q: "Is there a minimum order quantity?",
    a: "No set minimum. We regularly run short digital jobs for on-demand needs alongside large offset runs, so we can size the job to what you actually need.",
  },
  {
    q: "Do you handle mailing and fulfillment?",
    a: "Yes. We manage direct mail campaigns end to end, including data and list management, and offer warehousing and fulfillment for ongoing marketing materials.",
  },
  {
    q: "Will I see a proof before my job runs?",
    a: "Yes, every job gets a proof for your approval, digital or physical, before it goes into full production.",
  },
  {
    q: "Do you ship nationally?",
    a: "Yes, we print and ship for clients across the country in addition to serving the Philadelphia region in person.",
  },
]

export default function Faqs() {
  const [open, setOpen] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setOpen(false)
    toast.success("Message sent", {
      description: "Our team typically replies within a few hours.",
    })
  }

  return (
    <section id="faq" className="flex w-full items-center justify-center px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <Badge variant="outline" className="tracking-widest uppercase">
                FAQ
              </Badge>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Questions &amp; answers
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Browse the most common questions about working with us below.
                If you don&apos;t find what you&apos;re looking for, our team is happy
                to help.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-md border border-border bg-background">
                  <Mail className="size-4 text-muted-foreground" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium">
                    Still have questions?
                  </span>
                  <span className="text-xs text-muted-foreground">
                    We typically reply within a few hours.
                  </span>
                </div>
              </div>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger
                  render={<Button className="w-full justify-between" />}
                >
                  Contact Us
                  <ArrowRight data-icon="inline-end" />
                </DialogTrigger>
                <DialogContent>
                  <form onSubmit={handleSubmit}>
                    <DialogHeader>
                      <DialogTitle>Contact us</DialogTitle>
                      <DialogDescription>
                        Tell us what you need and we&apos;ll get back to you,
                        usually within a few hours.
                      </DialogDescription>
                    </DialogHeader>

                    <FieldGroup className="my-4 gap-4">
                      <Field>
                        <FieldLabel htmlFor="support-email">Email</FieldLabel>
                        <Input
                          id="support-email"
                          type="email"
                          required
                          placeholder="jane@company.com"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="support-message">
                          How can we help?
                        </FieldLabel>
                        <Textarea
                          id="support-message"
                          required
                          rows={4}
                          className="min-h-24 resize-none"
                          placeholder="Describe your project or question…"
                        />
                      </Field>
                    </FieldGroup>

                    <DialogFooter>
                      <DialogClose render={<Button variant="outline" />}>
                        Cancel
                      </DialogClose>
                      <Button type="submit">Send Message</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Accordion defaultValue={[faqs[0].q]}>
            {faqs.map(({ q, a }) => (
              <AccordionItem key={q} value={q}>
                <AccordionTrigger className="py-3.5 text-sm font-medium">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-3.5 text-sm text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
