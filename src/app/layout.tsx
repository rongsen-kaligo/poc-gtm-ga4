import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next/types';
import type { PropsWithChildren } from 'react';
import {
  GTM_ID,
  defaultPageDescription,
  defaultPageTitle,
} from '../globals/constants';
import { UserProvider$ } from '../providers/UserProvider$/UserProvider$';
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
      <body className={inter.className}>
        <UserProvider$>
          <GoogleTagManager
            gtmId={GTM_ID}
            // biome-ignore lint/style/useNamingConvention: GTM property naming convention
            dataLayer={[JSON.stringify({ test_init: '123' })]}
          />

          {children}
        </UserProvider$>
      </body>
    </html>
  );
}

// biome-ignore lint/style/noDefaultExport: This is a Next.js layout
export default RootLayout;
