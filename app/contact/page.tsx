import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Perfect Communications",
  description: "Request a quote from Perfect Communications.",
};

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col items-center px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-xl">
        <Badge variant="outline" className="mb-4 tracking-widest uppercase">
          Contact
        </Badge>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Request a quote
        </h1>
        <p className="mt-4 text-muted-foreground">
          Tell us about your project and we&apos;ll get back to you with pricing
          and a timeline, usually within a few hours.
        </p>

        <div className="mt-10 rounded-xl border border-border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
