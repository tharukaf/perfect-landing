import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Perfect Communications",
}

export default function PrivacyPage() {
  return (
    <div className="flex w-full flex-col items-center px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Perfect Communications collects only the information you provide
            to us directly, such as your name, email address, and project
            details submitted through our contact and quote request forms.
          </p>
          <p>
            We use this information solely to respond to your inquiry and
            provide the services you&apos;ve requested. We do not sell or
            share your information with third parties for marketing purposes.
          </p>
          <p>
            If you have questions about how your information is handled,
            reach out to us through our contact page.
          </p>
        </div>
      </div>
    </div>
  )
}
