import "./globals.css";
import type { Metadata } from "next";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}