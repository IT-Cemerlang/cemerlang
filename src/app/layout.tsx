
import './globals.css';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import React, { Suspense } from 'react';
import WhatsAppButton from '@/components/whatsapp-button';
import { Metadata } from 'next';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Cemerlang Pro Solutions',
  description: 'Profesional cemerlang group yang bergerak dibidang penjualan microsurfacing, microseal, sealant, ecobeton, geone, coldmix, sami waterproffing, dan cat marka jalan.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontPoppins.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<div>Memuat...</div>}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
