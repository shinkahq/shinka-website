import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, Workflow, Zap, Building2, Mail, Phone, ChevronRight, Sparkles, Twitter, Linkedin, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image src="/shinka-logo.png" alt="Shinka" width={120} height={40} className="h-8 w-auto" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Services
              </a>
              <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                About
              </a>
              <Button className="bg-foreground hover:bg-foreground/90 text-background font-medium">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-8 border-foreground text-foreground font-medium">
              <Sparkles className="w-3 h-3 mr-1" />
              Enterprise AI Solutions
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-medium text-foreground mb-8 tracking-tight leading-[0.9]">
              Intelligent AI Products
              <br />
              <span className="text-foreground">for Modern Enterprises</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              We build cutting-edge AI agents, workflows, and automations that transform how enterprises operate. 
              From research to implementation, we deliver intelligent solutions that scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background font-medium">
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted font-medium"
              >
                View Research
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-6 tracking-tight">What We Build</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Comprehensive AI solutions designed for enterprise-scale challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 shadow-sm bg-background hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-muted/80 transition-colors">
                  <Bot className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">AI Agents</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Intelligent autonomous agents that understand context, make decisions, and execute complex tasks
                  across your enterprise systems.
                </p>
                <div className="mt-6 flex items-center text-foreground font-medium">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm bg-background hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-muted/80 transition-colors">
                  <Workflow className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">Smart Workflows</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Automated workflows that adapt and optimize themselves, reducing manual overhead while improving
                  accuracy and speed.
                </p>
                <div className="mt-6 flex items-center text-foreground font-medium">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm bg-background hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-muted/80 transition-colors">
                  <Zap className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">Automations</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  End-to-end process automation that integrates seamlessly with existing infrastructure and scales with
                  your business needs.
                </p>
                <div className="mt-6 flex items-center text-foreground font-medium">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-6 border-foreground text-foreground font-medium">
                Research-Driven
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-8 tracking-tight">Built for Enterprise Scale</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
                At Shinka, we combine cutting-edge AI research with practical enterprise solutions. Our team of
                researchers and engineers work together to create AI products that don't just work in theory, but
                deliver real value in production environments.
              </p>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-foreground" />
                  <span className="text-foreground font-medium">Enterprise-Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-foreground" />
                  <span className="text-foreground font-medium">Production-Tested</span>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Advanced Research</h4>
                    <p className="text-muted-foreground font-light">Pushing the boundaries of what's possible with AI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Enterprise Integration</h4>
                    <p className="text-muted-foreground font-light">Seamless deployment into existing systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Scalable Solutions</h4>
                    <p className="text-muted-foreground font-light">Built to grow with your organization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-foreground mb-4 tracking-tight">Contact</h2>
            <p className="text-muted-foreground font-light">
              Get in touch for project inquiries, partnerships, or general questions.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <div className="border-b border-border/30 pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-normal text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground font-light">For general inquiries and partnerships</p>
                </div>
                <a 
                  href="mailto:shinkahq@gmail.com" 
                  className="text-foreground hover:text-foreground/70 transition-colors font-light"
                >
                  shinkahq@gmail.com
                </a>
              </div>
            </div>

            {/* Consultation */}
            <div className="border-b border-border/30 pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-normal text-foreground mb-1">Consultation</h3>
                  <p className="text-muted-foreground font-light">Schedule a call to discuss your AI needs</p>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-foreground hover:text-foreground/70 hover:bg-transparent font-light p-0 h-auto"
                >
                  Book →
                </Button>
              </div>
            </div>

            {/* Social */}
            <div className="pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-normal text-foreground mb-1">Follow</h3>
                  <p className="text-muted-foreground font-light">Updates and insights</p>
                </div>
                <div className="flex space-x-6">
                  <a 
                    href="https://x.com/shinkahq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://linkedin.com/company/shinka-ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
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
              <div className="flex items-center space-x-4 text-muted-foreground">
                <a 
                  href="mailto:shinkahq@gmail.com" 
                  className="flex items-center space-x-2 hover:text-foreground transition-colors font-light text-sm"
                >
                  <Mail className="h-3 w-3" />
                  <span>shinkahq@gmail.com</span>
                </a>
                <a 
                  href="https://x.com/shinkahq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  <Twitter className="h-3 w-3" />
                </a>
                <a 
                  href="https://linkedin.com/company/shinka-ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="text-muted-foreground text-sm font-light">© 2024 Shinka. Building the future of enterprise AI.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
