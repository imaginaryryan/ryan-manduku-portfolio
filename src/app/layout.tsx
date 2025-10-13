// app/layout.tsx - Ultimate SEO Solution
import type { Metadata, Viewport } from 'next'
//import { Analytics } from '@vercel/analytics/react'
//import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

// Perfect SEO Metadata
export const metadata: Metadata = {
  // Primary SEO
  title: {
    default: 'Ryan Manduku - Full Stack Web Developer | Modern Web Solutions',
    template: '%s | Ryan Manduku - Full Stack Developer'
  },
  description: 'Ryan Manduku is a skilled full-stack web developer specializing in React, Next.js, Node.js, and modern web technologies. Creating exceptional digital experiences with cutting-edge solutions.',
  
  // Enhanced secondary SEO
  keywords: [
    'Ryan Manduku',
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js Expert',
    'JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'Web Applications',
    'Modern Web Development',
    'UI/UX Developer',
    'Responsive Design',
    'API Development',
    'Database Design'
  ],
  
  // Author & Creator Info
  authors: [{ name: 'Ryan Manduku', url: 'https://ryanmanduku.com' }],
  creator: 'Ryan Manduku',
  publisher: 'Ryan Manduku',
  
  // Open Graph for Social Media SEO
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ryanmanduku.com',
    siteName: 'Ryan Manduku - Full Stack Developer',
    title: 'Ryan Manduku - Full Stack Web Developer | Modern Web Solutions',
    description: 'Expert full-stack developer creating exceptional web experiences with React, Next.js, and modern technologies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ryan Manduku - Full Stack Web Developer',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Ryan Manduku - Full Stack Developer',
        type: 'image/jpeg',
      }
    ],
  },
  
  // Twitter Card for Twitter SEO
  twitter: {
    card: 'summary_large_image',
    site: '@ryanmanduku',
    creator: '@ryanmanduku',
    title: 'Ryan Manduku - Full Stack Web Developer',
    description: 'Expert full-stack developer creating exceptional web experiences with React, Next.js, and modern technologies.',
    images: ['/twitter-image.jpg'],
  },
  
  // Technical SEO
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons for Perfect Brand Recognition
  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#2563eb' },
    ],
  },
  
  // Web App Manifest
  //manifest: '/site.webmanifest',
  
  // Additional Meta Tags
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
  },
  
  // Verification (add your actual verification codes)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  
  // Category for better search classification
  category: 'technology',
}

// Viewport Configuration for Perfect Mobile SEO
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark',
}

// JSON-LD Structured Data for Rich Snippets
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ryan Manduku',
  url: 'https://ryanmanduku.com',
  image: 'https://ryanmanduku.com/ryan-manduku-profile.jpg',
  jobTitle: 'Full Stack Web Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance Developer'
  },
  alumniOf: 'Your University/Bootcamp',
  knowsAbout: [
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Python',
    'Full Stack Development',
    'Web Development',
    'Frontend Development',
    'Backend Development'
  ],
  sameAs: [
    'https://github.com/ryanmanduku',
    'https://linkedin.com/in/ryanmanduku',
    'https://twitter.com/ryanmanduku'
  ],
  description: 'Expert full-stack web developer specializing in React, Next.js, and modern web technologies.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Your Country'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
         {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://vitals.vercel-analytics.com" />
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
        
        {/* Immediate favicon fallback */}
        <link 
          rel="icon" 
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%232563eb'/><text x='50' y='50' font-size='36' fill='white' text-anchor='middle' dominant-baseline='central' font-family='system-ui, sans-serif' font-weight='700'>RM</text></svg>" 
        />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Performance Hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </head>
      <body 
        suppressHydrationWarning
        >
        
        {/* Main content wrapper */}
        <div id="root" className="min-h-screen">
          <main id="main-content">
            {children}
          </main>
        </div>
        
        {/* Performance Analytics 
        <Analytics />
        <SpeedInsights />*/}
      
      </body>
    </html>
  )
}