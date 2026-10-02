"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/** Where each `data-reveal` kind starts from before easing into place. */
const REVEAL_FROM: Record<string, gsap.TweenVars> = {
  up: { y: 70 },
  left: { x: -90 },
  right: { x: 90 },
  scale: { scale: 0.88, y: 40 },
}

/**
 * One place that wires every scroll effect on the landing page, driven by
 * data attributes the sections declare:
 *
 *  - `[data-bg="name"]`      fade the fixed backdrop (`#scroll-bg`) to that tint
 *  - `[data-reveal="kind"]`  scrubbed in -> hold -> out; `data-stagger` staggers
 *                            children, `data-no-out` skips the exit fade
 *  - `[data-parallax="n"]`   drift +/- n% of its own height across the viewport
 *  - `[data-tilt]`          3D rotation of the element (cube array) scrubbed by scroll
 *  - `#hero-card`            hero shader card expands to full-bleed, then contracts
 *
 * Renders nothing. Motion pieces sit behind `prefers-reduced-motion` so
 * those visitors get the static layout (the backdrop still changes tint).
 */
export function ScrollFx() {
  useEffect(() => {
    const bg = document.getElementById("scroll-bg")
    const mm = gsap.matchMedia()

    // Backdrop tint: CSS cross-fades the registered colour properties.
    const tintTriggers = gsap.utils
      .toArray<HTMLElement>("[data-bg]")
      .map((el) => {
        const set = () => bg?.setAttribute("data-section", el.dataset.bg ?? "hero")
        return ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: set,
          onEnterBack: set,
        })
      })

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // --- scrubbed reveals -------------------------------------------------
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const from = REVEAL_FROM[el.dataset.reveal ?? "up"] ?? REVEAL_FROM.up
        const stagger = el.hasAttribute("data-stagger")
        const targets = stagger ? Array.from(el.children) : el

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "bottom 8%",
            scrub: 0.6,
          },
        })
        tl.fromTo(
          targets,
          { opacity: 0, ...from },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
            stagger: stagger ? 0.04 : 0,
          }
        ).to({}, { duration: 0.5 })
        if (!el.hasAttribute("data-no-out")) {
          tl.to(targets, {
            opacity: 0,
            y: -50,
            duration: 0.25,
            ease: "power1.in",
          })
        }
      })

      // --- parallax ---------------------------------------------------------
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 10
        gsap.fromTo(
          el,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        )
      })

      // --- 3D tilt: swing the cube array through space as its section passes
      gsap.utils.toArray<HTMLElement>("[data-tilt]").forEach((el) => {
        gsap.fromTo(
          el,
          { transformPerspective: 1400, rotationX: 52, rotationZ: -32, rotationY: 0 },
          {
            rotationX: 38,
            rotationZ: 18,
            rotationY: -14,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        )
      })

      // --- hero card: expand to full-bleed, hold, contract -------------------
      const card = document.getElementById("hero-card")
      const copy = document.getElementById("hero-copy")
      const hero = document.getElementById("hero")
      if (card && copy && hero) {
        const wide = window.matchMedia("(min-width: 768px)").matches
        // Resting pose mirrors the classes in hero.tsx.
        const rest = wide
          ? { scale: 0.56, xPercent: 21, yPercent: 0 }
          : { scale: 0.62, xPercent: 0, yPercent: 36 }

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        })
        tl.fromTo(
          card,
          { ...rest, x: 0, y: 0, borderRadius: 56 },
          {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            borderRadius: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
          0
        )
          .fromTo(
            copy,
            { opacity: 1, yPercent: 0 },
            { opacity: 0, yPercent: -25, duration: 0.25 },
            0.12
          )
          // hold full-bleed, then let go as the next section arrives
          .to(
            card,
            {
              scale: 0.88,
              yPercent: -6,
              borderRadius: 56,
              opacity: 0.35,
              duration: 0.3,
              ease: "power2.in",
            },
            0.7
          )
      }
    })

    // Layout shifts after first paint (images, fonts, accordions) move the
    // trigger positions; re-measure when the page height changes.
    let raf = 0
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => ScrollTrigger.refresh())
    })
    ro.observe(document.body)
    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener("load", onLoad)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener("load", onLoad)
      tintTriggers.forEach((t) => t.kill())
      mm.revert()
    }
  }, [])

  return null
}
