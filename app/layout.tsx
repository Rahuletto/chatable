import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dm = DM_Sans({
  fallback: ['system-ui', 'arial'],
  weight: ['500', '700'],
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--root-font',
});

export const metadata: Metadata = {
  title: "Chatable",
  description: "Feeling lonely? Do not worry, i am here to chat with you <3",
  icons: {
    icon: '/icon.ico',
    shortcut: '/icon.ico',
    apple: '/icon.ico',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icon.ico',
    },
  },
  themeColor: '#66DC66',
  openGraph: {
    title: 'Chatable',
    description: 'Feeling lonely? Do not worry, i am here to chat with you <3',
    url: 'https://rahuletto.thedev.id/chatable',
    siteName: 'Chatable',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={dm.variable}>{children}</body>
    </html>
  );
}
