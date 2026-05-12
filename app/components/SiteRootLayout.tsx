import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

interface SiteRootLayoutProps {
  children: ReactNode;
  lang: string;
}

export default function SiteRootLayout({ children, lang }: SiteRootLayoutProps) {
  return (
    <html lang={lang}>
      <body
        className={`${bodyFont.variable} ${headingFont.variable} bg-white font-body text-zinc-900 antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17979730701"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17979730701');
            gtag('config', 'G-LL2YHLLWC5');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
