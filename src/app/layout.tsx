import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next/types';
import type { PropsWithChildren } from 'react';

import { User$ } from '../components/User$/User$';
import {
  GTM_ID,
  defaultPageDescription,
  defaultPageTitle,
} from '../globals/constants';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: defaultPageTitle,
    template: `%s | ${defaultPageTitle}`,
  },
  description: defaultPageDescription,
};

function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <GoogleTagManager
        gtmId={GTM_ID}
        // biome-ignore lint/style/useNamingConvention: GTM property naming convention
        dataLayer={[JSON.stringify({ test_init: '123' })]}
      />

      <User$ />

      <body className={inter.className}>{children}</body>
    </html>
  );
}

// biome-ignore lint/style/noDefaultExport: This is a Next.js layout
export default RootLayout;
