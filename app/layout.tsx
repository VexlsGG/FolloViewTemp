import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

const appName = "FolloView";
const description =
  "A calm, focused way to follow updates, organize what matters, and act when it’s the right time. Coming soon.";

export const metadata: Metadata = {
  title: {
    default: `${appName} — Coming soon`,
    template: `%s — ${appName}`
  },
  description,
  applicationName: appName,
  metadataBase: new URL("https://follo.app"),
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }]
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${appName} — Coming soon`,
    description,
    type: "website",
    siteName: appName
  },
  twitter: {
    card: "summary",
    title: `${appName} — Coming soon`,
    description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <a
          href="#main"
          className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-black/80 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

