import Navigation from "@/components/sections/navigation"
import Hero from "@/components/sections/hero"
import Mission from "@/components/sections/mission"
import Team from "@/components/sections/team"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import About from "@/components/sections/about"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Mission />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}
