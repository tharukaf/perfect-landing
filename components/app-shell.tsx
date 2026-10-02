import type { ReactNode } from "react"
import Header from "@/components/saas-landing/header"
import Footer from "@/components/saas-landing/footer"

/**
 * Edge-to-edge shell: the page scrolls on the window, with a fixed backdrop
 * (`#scroll-bg`) that ScrollFx re-tints as each section scrolls into view.
 */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        id="scroll-bg"
        data-section="hero"
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      />
      <div className="relative z-10 flex min-h-dvh w-full flex-col">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </div>
    </>
  )
}
