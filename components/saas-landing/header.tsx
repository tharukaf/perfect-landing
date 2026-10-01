"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ThreeDButton } from "@/components/evil-buttons/3d-button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { Menu, Sun, Moon } from "lucide-react"

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
]

function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const isDark = mounted && resolvedTheme === "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={className}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}

function HeaderCta() {
  const isHome = usePathname() === "/"
  const [heroVisible, setHeroVisible] = React.useState(true)

  React.useEffect(() => {
    if (!isHome) return
    const target = document.getElementById("hero-cta")
    if (!target) return
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { root: document.querySelector(".app-scroll") }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [isHome])

  if (isHome && heroVisible) return null
  return (
    <Link href="/contact">
      <div className="scale-90">
        <ThreeDButton>Request a Quote</ThreeDButton>
      </div>
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-4 z-30 w-full px-4 sm:px-6">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 rounded-2xl border border-border bg-background/80 px-6 shadow-lg backdrop-blur">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <HeaderCta />
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" aria-label="Open menu" />
              }
            >
              <Menu aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 max-w-xs">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col px-4">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.label}
                    nativeButton={false}
                    render={
                      <a
                        href={link.href}
                        className="border-b border-border py-3 text-sm font-medium text-muted-foreground transition-colors last:border-b-0 hover:text-foreground"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>

              <SheetFooter>
                <SheetClose
                  nativeButton={false}
                  render={<Link href="/contact" className="w-full" />}
                >
                  <ThreeDButton className="w-full">Request a Quote</ThreeDButton>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
