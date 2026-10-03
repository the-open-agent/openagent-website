import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
import { googleAnalyticsId, siteUrl } from '@/lib/shared';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'OpenAgent — The Open Agent Platform',
    template: '%s · OpenAgent',
  },
  description:
    'Open-source personal AI assistant platform. Connect 30+ model providers, build intelligent agents with MCP tool use, and deploy across 20+ messaging channels.',
  keywords: ['AI agents', 'MCP', 'open source', 'LLM', 'multi-agent', 'self-hosted', 'personal AI'],
  icons: {
    icon: [
      { url: 'https://cdn.openagentai.org/img/openagent.png', type: 'image/png' },
    ],
    apple: 'https://cdn.openagentai.org/img/openagent.png',
    shortcut: 'https://cdn.openagentai.org/img/openagent.png',
  },
  openGraph: {
    type: 'website',
    title: 'OpenAgent — The Open Agent Platform',
    description:
      'Open-source personal AI assistant platform. Connect 30+ model providers and deploy across 20+ messaging channels.',
    images: [{ url: 'https://cdn.openagentai.org/img/openagent.png' }],
  },
  twitter: {
    card: 'summary',
    title: 'OpenAgent — The Open Agent Platform',
    description: 'Open-source AI agent platform. 30+ models, 20+ channels, self-hosted.',
    images: ['https://cdn.openagentai.org/img/openagent.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-[var(--font-inter)] antialiased">
        <RootProvider>{children}</RootProvider>
        <Analytics />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`}
        </Script>
      </body>
    </html>
  );
}
