import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Mail, ExternalLink } from "lucide-react"
import Navigation from "@/components/sections/navigation"
import Footer from "@/components/sections/footer"
import { ResponsiveContainer, ResponsiveText, Show } from "@/components/responsive"

const expertise = [
  {
    title: "AI Agents & Multi-Agent Systems",
    description: "Production-ready agentic systems"
  },
  {
    title: "Reinforcement Learning", 
    description: "Advanced RL research & implementation"
  },
  {
    title: "Enterprise AI Solutions",
    description: "Scalable business applications"
  }
]

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Founder Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <ResponsiveContainer maxWidth="responsive">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-6 md:mb-8 border-foreground text-foreground font-medium">
              <User className="w-3 h-3 mr-1" />
              Founder & CEO
            </Badge>
            <ResponsiveText
              as="h1"
              mobileSize="text-3xl"
              tabletSize="text-4xl"
              desktopSize="text-4xl lg:text-5xl"
              className="font-medium text-foreground mb-6 md:mb-8 tracking-tight"
            >
              Founder
            </ResponsiveText>
            <ResponsiveText
              mobileSize="text-base"
              tabletSize="text-lg"
              desktopSize="text-lg"
              className="text-muted-foreground max-w-2xl mx-auto font-light"
            >
              AI Engineer & Researcher
            </ResponsiveText>
          </div>

          {/* Mobile: Single Column Layout */}
          <Show below="lg">
            <div className="space-y-8 md:space-y-12">
              <div className="text-center">
                <ResponsiveText
                  as="h2"
                  mobileSize="text-2xl"
                  tabletSize="text-3xl"
                  desktopSize="text-3xl"
                  className="font-medium text-foreground mb-4 md:mb-6 tracking-tight"
                >
                  Ayush Bodade
                </ResponsiveText>
                <ResponsiveText
                  mobileSize="text-base"
                  tabletSize="text-lg"
                  desktopSize="text-lg"
                  className="text-muted-foreground mb-6 md:mb-8 leading-relaxed font-light"
                >
                  AI Engineer & Researcher with experience in building production-ready AI systems, 
                  conducting research, and leading teams across multiple countries.
                </ResponsiveText>
                
                <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <ResponsiveText
                      mobileSize="text-sm"
                      tabletSize="text-base"
                      desktopSize="text-base"
                      className="text-foreground font-medium text-center"
                    >
                      Founding AI Engineer at QX Labs (London)
                    </ResponsiveText>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <ResponsiveText
                      mobileSize="text-sm"
                      tabletSize="text-base"
                      desktopSize="text-base"
                      className="text-foreground font-medium text-center"
                    >
                      Research at MIT, Tsinghua University & IIT Bombay
                    </ResponsiveText>
                  </div>
                </div>

                <div className="flex flex-col space-y-4">
                  <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background font-medium">
                    <a 
                      href="http://ayush-ai-hq.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-background hover:text-background"
                    >
                      View Full Profile
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border text-foreground hover:bg-muted font-medium"
                  >
                    <a href="mailto:ayushbodade1@gmail.com" className="flex items-center text-foreground hover:text-foreground">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="bg-muted/30 rounded-2xl p-6 md:p-8 border border-border/50">
                <ResponsiveText
                  as="h3"
                  mobileSize="text-lg"
                  tabletSize="text-xl"
                  desktopSize="text-xl"
                  className="font-medium text-foreground mb-4 md:mb-6"
                >
                  Key Expertise
                </ResponsiveText>
                <div className="space-y-4 md:space-y-6">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                      <div>
                        <ResponsiveText
                          mobileSize="text-base"
                          tabletSize="text-lg"
                          desktopSize="text-lg"
                          className="font-medium text-foreground mb-1"
                        >
                          {item.title}
                        </ResponsiveText>
                        <ResponsiveText
                          mobileSize="text-sm"
                          tabletSize="text-base"
                          desktopSize="text-base"
                          className="text-muted-foreground font-light"
                        >
                          {item.description}
                        </ResponsiveText>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Show>

          {/* Desktop: Two Column Layout */}
          <Show above="lg">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-medium text-foreground mb-6 tracking-tight">Ayush Bodade</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
                  AI Engineer & Researcher with experience in building production-ready AI systems, 
                  conducting research, and leading teams across multiple countries.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <span className="text-foreground font-medium">Founding AI Engineer at QX Labs (London)</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <span className="text-foreground font-medium">Research at MIT, Tsinghua University & IIT Bombay</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background font-medium">
                    <a 
                      href="http://ayush-ai-hq.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-background hover:text-background"
                    >
                      View Full Profile
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border text-foreground hover:bg-muted font-medium"
                  >
                    <a href="mailto:ayushbodade1@gmail.com" className="flex items-center text-foreground hover:text-foreground">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-medium text-foreground mb-6">Key Expertise</h3>
                <div className="space-y-6">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground font-light text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Show>
        </ResponsiveContainer>
      </section>

      <Footer />
    </div>
  )
} 