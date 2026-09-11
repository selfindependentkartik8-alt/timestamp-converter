import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://timestampconverter.krishaiworks.com"
  ),

  title: "Timestamp Converter | Unix Timestamp to Date Converter",

  description:
    "Convert Unix timestamps to readable dates and dates to Unix timestamps online with the free Timestamp Converter by KrishAIWorks. Easily convert seconds and milliseconds timestamps.",

  keywords: [
    "Timestamp Converter",
    "Unix Timestamp Converter",
    "Timestamp Converter Online",
    "Unix Time Converter",
    "Epoch Converter",
    "Epoch Time Converter",
    "Unix Timestamp to Date",
    "Date to Unix Timestamp",
    "Convert Timestamp Online",
    "Unix Time to Date",
    "Milliseconds Timestamp Converter",
    "Seconds Timestamp Converter",
  ],

  authors: [
    {
      name: "KrishAIWorks",
      url: "https://krishaiworks.vercel.app",
    },
  ],

  creator: "KrishAIWorks",
  publisher: "KrishAIWorks",

  alternates: {
    canonical:
      "https://timestampconverter.krishaiworks.com/",
  },

  openGraph: {
    title: "Timestamp Converter | KrishAIWorks",
    description:
      "Convert Unix timestamps and dates online quickly and easily with KrishAIWorks.",
    url: "https://timestampconverter.krishaiworks.com/",
    siteName: "KrishAIWorks",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Timestamp Converter | KrishAIWorks",
    description:
      "Convert Unix timestamps to dates and dates to Unix timestamps instantly.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://krishaiworks.com/#organization",
      name: "KrishAIWorks",
      url: "https://krishaiworks.com",
      logo: {
        "@type": "ImageObject",
        url: "https://krishaiworks.com/logo.png",
        width: 512,
        height: 512,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://krishaiworks.com/#website",
      url: "https://krishaiworks.com",
      name: "KrishAIWorks",
      description:
        "AI-powered tools, productivity utilities, automation, chatbots, websites and custom digital solutions.",
      publisher: {
        "@id": "https://krishaiworks.com/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "WebApplication",
      "@id":
        "https://timestampconverter.krishaiworks.com/#webapplication",
      name: "Timestamp Converter",
      url: "https://timestampconverter.krishaiworks.com/",
      description:
        "Convert Unix timestamps to readable dates and dates to Unix timestamps online with the free Timestamp Converter by KrishAIWorks. Easily convert seconds and milliseconds timestamps.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires a modern web browser.",
      isPartOf: {
        "@id": "https://krishaiworks.com/#website",
      },
      publisher: {
        "@id": "https://krishaiworks.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://timestampconverter.krishaiworks.com/#webpage",
      url: "https://timestampconverter.krishaiworks.com/",
      name: "Timestamp Converter | Unix Timestamp to Date Converter",
      description:
        "Convert Unix timestamps to readable dates and dates to Unix timestamps online with the free Timestamp Converter by KrishAIWorks. Easily convert seconds and milliseconds timestamps.",
      isPartOf: {
        "@id": "https://krishaiworks.com/#website",
      },
      about: {
        "@id":
          "https://timestampconverter.krishaiworks.com/#webapplication",
      },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <script
          id="timestamp-converter-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BS6TSMM1ZR"
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BS6TSMM1ZR');
          `}
        </Script>
      </body>
    </html>
  );
}