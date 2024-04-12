import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from "next/font/google";
import type { Metadata } from "next/types";

import { GTM_ID, defaultPageDescription, defaultPageTitle } from "../globals/constants";
import "./globals.css";
import { User$ } from '../components/user$/user$';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: defaultPageTitle,
    template: `%s | ${defaultPageTitle}`,
  },
  description: defaultPageDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager
        gtmId={GTM_ID}
        dataLayer={[JSON.stringify({test_init:'123'})]}
      />

      <User$ />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
