import { MetadataRoute } from 'next'

// Base URL configuration
export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'https://shinkahq.com'
}

// Robots configuration
export function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl()

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

// Sitemap configuration  
export function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl()
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#team`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}

// SEO constants
export const SEO_CONFIG = {
  title: {
    default: "Shinka - Building Super Intelligence for the World",
    template: "%s | Shinka",
  },
  description: "Intelligent AI products for modern enterprises. We build cutting-edge AI agents, workflows, and automations that transform how enterprises operate.",
  keywords: ["AI", "Artificial Intelligence", "Enterprise", "Automation", "Workflows", "Agents", "Shinka", "Business Solutions", "Machine Learning", "AI Agents", "Smart Workflows", "Super Intelligence"],
  authors: [{ name: "Shinka" }],
  creator: "Shinka",
  publisher: "Shinka",
} 