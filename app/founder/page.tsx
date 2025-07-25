import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, User, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <Image src="/shinka-logo.png" alt="Shinka" width={120} height={40} className="h-8 w-auto" />
                <span className="text-foreground font-normal text-lg tracking-tight">shinka</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Home
              </a>
              <a href="/#services" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Services
              </a>
              <a href="/#about" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                About
              </a>
              <a href="/founder" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Founder
              </a>
              <Button className="bg-foreground hover:bg-foreground/90 text-background font-medium">
                <a href="/#contact" className="text-background hover:text-background">
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Founder Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-8 border-foreground text-foreground font-medium">
              <User className="w-3 h-3 mr-1" />
              Founder & CEO
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-medium text-foreground mb-8 tracking-tight">
              Founder
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              AI Engineer & Researcher
            </p>
          </div>

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
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-foreground mb-4">Key Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">AI Agents & Multi-Agent Systems</h4>
                      <p className="text-muted-foreground font-light text-sm">Production-ready agentic systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Reinforcement Learning</h4>
                      <p className="text-muted-foreground font-light text-sm">Advanced RL research & implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Enterprise AI Solutions</h4>
                      <p className="text-muted-foreground font-light text-sm">Scalable business applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/shinka-logo.png" alt="Shinka" width={80} height={32} className="h-6 w-auto" />
              <div className="text-muted-foreground text-sm font-light">© 2024 Shinka. Building the future of enterprise AI.</div>
            </div>
            <div className="text-muted-foreground text-sm font-light">
              <a href="/" className="hover:text-foreground transition-colors">Back to Home</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 