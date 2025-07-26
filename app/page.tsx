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
              <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <Image src="/shinka-logo.png" alt="Shinka" width={120} height={40} className="h-8 w-auto" />
                <span className="text-foreground font-normal text-lg tracking-tight">shinka</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Home
              </a>
              <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Services
              </a>
              <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                About
              </a>
              <a href="/founder" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Founder
              </a>
              <Button className="bg-foreground hover:bg-foreground/90 text-background font-medium">
                <a href="#contact" className="text-background hover:text-background">
                  Get in Touch
                </a>
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
              AI Agents, Models,
              <br />
              <span className="text-foreground">Integrations & Automations</span>
              <br />
              <span className="text-foreground">For Enterprises</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              We make enterprise processes 1000x more efficient with AI agents, models, integrations, and automations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-6 tracking-tight">What We Build</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Solving enterprise problems with AI across Private Equity, Banking, Pharma, Supply Chain & more
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
                  Autonomous agents that analyze financial documents, monitor transactions, detect anomalies, and 
                  automate compliance workflows across enterprise systems.
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
                <h3 className="text-xl font-medium text-foreground mb-4">AI Models</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Custom models for detecting financial fraud, analyzing legal contracts, predicting market risks, and 
                  identifying regulatory violations with industry-specific training.
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
                <h3 className="text-xl font-medium text-foreground mb-4">Integrations & Automations</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Seamless integration with Bloomberg, Salesforce, SAP, and legacy banking systems. End-to-end automation 
                  for AML screening, trade settlement, quality control, and regulatory submissions.
                </p>
                <div className="mt-6 flex items-center text-foreground font-medium">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries & Problems Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-6 tracking-tight">Industry Challenges</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Real problems. Real solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="border-b border-border/30 pb-8">
                <h3 className="text-2xl font-medium text-foreground mb-4">Private Equity</h3>
                <p className="text-muted-foreground mb-6 font-light">
                  Slow deal sourcing, liquidity bottlenecks, operational complexity.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground font-light">
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span>Automated deal sourcing from financial datasets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span>AI-powered document analysis and insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span>Real-time portfolio performance monitoring</span>
                  </div>
                </div>
              </div>

              <div className="border-b border-border/30 pb-8">
                <h3 className="text-2xl font-medium text-foreground mb-4">Banking</h3>
                <p className="text-muted-foreground mb-6 font-light">
                  Regulatory compliance, customer loyalty, fraud detection.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground font-light">
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span>AI-powered risk assessment and fraud prevention</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span>AI agents for 24/7 intelligent assistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span>Automated KYC and compliance checks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="border-b border-border/30 pb-8">
                <h3 className="text-2xl font-medium text-foreground mb-4">Pharmaceutical</h3>
                <p className="text-muted-foreground mb-6 font-light">
                  Rising R&D costs, regulatory complexity, supply chain disruptions.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground font-light">
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span>AI-accelerated drug discovery and target identification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span>Adaptive clinical trial design and monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span>Automated regulatory dossier assembly</span>
                  </div>
                </div>
              </div>

              <div className="border-b border-border/30 pb-8">
                <h3 className="text-2xl font-medium text-foreground mb-4">Supply Chain</h3>
                <p className="text-muted-foreground mb-6 font-light">
                  Material shortages, forecasting errors, lack of visibility.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground font-light">
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span>AI-driven order processing and workflow automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span>Intelligent order fulfillment optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span>Automated operational efficiency improvements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-foreground rounded-full"></div>
                    <span>Cost reduction through AI-powered management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section
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
      </section> */}

      {/* Get in Touch Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-medium text-foreground mb-6 tracking-tight">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Get in touch for project inquiries, partnerships, or general questions.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <div className="border-b border-border/30 pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4">Email</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">For general inquiries and partnerships</p>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-foreground hover:text-foreground/70 hover:bg-transparent font-light p-0 h-auto"
                >
                  <a href="mailto:ayushbodade1@gmail.com" className="text-foreground hover:text-foreground/70">
                    Email →
                  </a>
                </Button>
              </div>
            </div>

            {/* Consultation */}
            <div className="border-b border-border/30 pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4">Consultation</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">Schedule a call to discuss your AI needs</p>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-foreground hover:text-foreground/70 hover:bg-transparent font-light p-0 h-auto"
                >
                  <a href="https://calendly.com/ayushbodade1/one-on-one" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-foreground/70">
                    Book →
                  </a>
                </Button>
              </div>
            </div>

            {/* Social */}
            <div className="pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4">Follow</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">Updates and insights</p>
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
                    href="https://linkedin.com/company/shinkahq" 
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
                  href="mailto:ayushbodade1@gmail.com" 
                  className="flex items-center space-x-2 hover:text-foreground transition-colors font-light text-sm"
                >
                  <Mail className="h-3 w-3" />
                  <span>ayushbodade1@gmail.com</span>
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
                  href="https://linkedin.com/company/shinkahq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="text-muted-foreground text-sm font-light">© 2024 Shinka. Path to ASI.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
