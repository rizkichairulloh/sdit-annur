import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Lateef } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { Providers } from "@/components/providers";
import "../globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lateef = Lateef({
  variable: "--font-lateef",
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SDIT Annur",
  description: "Sekolah Dasar Islam Terpadu Annur",
  icons: {
    icon: "/images/logo-annur.png",
    shortcut: "/images/logo-annur.png",
    apple: "/images/logo-annur.png",
  },
    openGraph: {
    title: "SDIT Annur",
    description: "Sekolah Dasar Islam Terpadu Annur",
    url: "https://sdit-annur.rizkichairulloh.my.id/", // WAJIB ganti dengan domain asli
    siteName: "SDIT Annur",
    images: [
      {
        url: "https://sdit-annur.rizkichairulloh.my.id/images/logo-annur.png", // WAJIB full URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

// ... existing imports

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "id" | "en")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${lateef.variable} antialiased font-sans`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <WhatsAppButton />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
