import type { ReactNode } from "react"
import Header from "@/components/saas-landing/header"
import Footer from "@/components/saas-landing/footer"

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-muted/40 p-3">
      <div className="h-[calc(100dvh-1.5rem)] w-full max-w-[1600px] overflow-hidden rounded-2xl border border-border bg-background shadow-xl">
        <div className="app-scroll flex h-full flex-col overflow-x-hidden overflow-y-auto [scroll-behavior:smooth]">
          <Header />
          <div className="flex flex-1 flex-col">{children}</div>
          <div className="border-t border-border/50">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
