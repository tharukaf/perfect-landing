"use client"

import { GodRays } from "@paper-design/shaders-react"
import type { ReactNode } from "react"

/**
 * Glow effect behind the wordmark, on its own navy backdrop (not
 * transparent) so it reads as a lit mark rather than a floating shader
 * plane. Needs a generous box -- god rays read as a flat blob in a short,
 * wide strip and only look like rays with real height to radiate into.
 */
export function LogoGlow({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-64 items-center justify-center overflow-hidden sm:h-80">
      <GodRays
        className="pointer-events-none absolute inset-0"
        colorBack="#012759"
        colorBloom="#bcd9ff"
        colors={["#4d9fff", "#00d4ff"]}
        bloom={0.5}
        intensity={0.6}
        density={0.8}
        spotty={0.3}
        midSize={0.5}
        midIntensity={0.3}
        speed={0.4}
      />
      {children}
    </div>
  )
}
