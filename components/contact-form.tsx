"use client"

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast.success("Request sent", {
      description: "We'll follow up within a few hours with a quote.",
    })
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <FieldGroup className="gap-4">
        <Field>
          <FieldLabel htmlFor="contact-name">Name</FieldLabel>
          <Input id="contact-name" required placeholder="Jane Smith" />
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-email">Email</FieldLabel>
          <Input
            id="contact-email"
            type="email"
            required
            placeholder="jane@company.com"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="contact-project">
            Tell us about your project
          </FieldLabel>
          <Textarea
            id="contact-project"
            required
            rows={5}
            className="min-h-32 resize-none"
            placeholder="Quantities, deadline, and anything else we should know…"
          />
        </Field>
      </FieldGroup>

      <Button type="submit" className="w-full sm:w-auto">
        Request a Quote
      </Button>
    </form>
  )
}
