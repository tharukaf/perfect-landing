import Bento from "@/components/saas-landing/bento"
import Cta from "@/components/saas-landing/cta"
import Faqs from "@/components/saas-landing/faqs"
import Features from "@/components/saas-landing/features"
import Hero from "@/components/saas-landing/hero"
import LogoCloud from "@/components/saas-landing/logo-cloud"
import Stats from "@/components/saas-landing/stats"
import Testimonials from "@/components/saas-landing/testimonials"
import { Reveal } from "@/components/reveal"

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <Reveal>
        <LogoCloud />
      </Reveal>
      <Reveal>
        <Features />
      </Reveal>
      <Reveal>
        <Bento />
      </Reveal>
      <Reveal>
        <Stats />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Faqs />
      </Reveal>
      <Reveal>
        <Cta />
      </Reveal>
    </div>
  )
}
