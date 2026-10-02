import Bento from "@/components/saas-landing/bento"
import Cta from "@/components/saas-landing/cta"
import Faqs from "@/components/saas-landing/faqs"
import Features from "@/components/saas-landing/features"
import Hero from "@/components/saas-landing/hero"
import LogoCloud from "@/components/saas-landing/logo-cloud"
import Stats from "@/components/saas-landing/stats"
import Testimonials from "@/components/saas-landing/testimonials"
import { ScrollFx } from "@/components/scroll-fx"

// Each section owns its `data-bg` tint and `data-reveal` hooks; ScrollFx
// wires them to GSAP once everything has mounted.
export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <Features />
      <LogoCloud />
      <Bento />
      <Stats />
      <Testimonials />
      <Faqs />
      <Cta />
      <ScrollFx />
    </div>
  )
}
