import Navigation from "@/components/sections/navigation"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Metrics from "@/components/sections/metrics"
import Team from "@/components/sections/team"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Metrics />
      <HowItWorks />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
