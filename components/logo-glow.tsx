"use client"

import type { ReactNode } from "react"
import PatternWaves from "@/components/PatternWaves"

/**
 * Animated wave-pattern backdrop behind the wordmark, on its own black
 * backdrop (not transparent) so it reads as a lit surface rather than a
 * floating shader plane.
 */
export function LogoGlow({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-80 items-center justify-center overflow-hidden sm:h-96 md:h-[38rem]">
      {/* style prop forces absolute positioning: PatternWaves.css sets its
          own `position: relative` at the same specificity as Tailwind's
          `absolute` class, and loads after it in the bundle, so the class
          alone loses the cascade. */}
      <PatternWaves
        className="pointer-events-none absolute inset-0"
        style={{ position: "absolute", inset: 0 }}
        preset="silk"
        color="#ffffff"
        backgroundColor="#000000"
        fade="center"
        interactive
        cursorSize={50}
        cursorStrength={0.6}
        scale={0.95}
        direction={35}
        opacity={0.7}
        fadeSize={1}
      />
      {children}
    </div>
  )
}
