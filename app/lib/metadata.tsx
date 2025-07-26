export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shinka",
    "url": "https://shinkahq.com",
    "logo": "https://shinkahq.com/shinka-logo.png",
    "description": "Intelligent AI products for modern enterprises. We build cutting-edge AI agents, workflows, and automations that transform how enterprises operate.",
    "foundingDate": "2025",
    "industry": "Artificial Intelligence",
    "address": [
      {
        "@type": "PostalAddress",
        "addressCountry": "US",
        "addressRegion": "United States"
      },
      {
        "@type": "PostalAddress", 
        "addressCountry": "IN",
        "addressRegion": "India"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "ayushbodade1@gmail.com"
    },
    "sameAs": [
      "https://x.com/shinkahq",
      "https://linkedin.com/company/shinkahq",
      "https://shinka-website.vercel.app/"
    ],
    "serviceType": [
      "AI Agents",
      "Smart Workflows", 
      "Automations"
    ],
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Agents",
            "description": "Intelligent autonomous agents that understand context, make decisions, and execute complex tasks across enterprise systems."
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Workflows",
            "description": "Automated workflows that adapt and optimize themselves, reducing manual overhead while improving accuracy and speed."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Automations",
            "description": "End-to-end process automation that integrates seamlessly with existing infrastructure and scales with business needs."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 