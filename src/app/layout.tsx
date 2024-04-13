import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next/types';
import type { PropsWithChildren } from 'react';

import { BootstrapInstaller } from '../components/bootstrap-installer/bootstrap-installer';
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

const initialDataLayer = {
  event: 'test_init',
  // biome-ignore lint/style/useNamingConvention: GTM property naming convention
  test_init: '123',
} as const;

async function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {Boolean(GTM_ID) && (
          <GoogleTagManager
            dataLayer={[JSON.stringify(initialDataLayer)]}
            gtmId={GTM_ID}
          />
        )}

        <BootstrapInstaller>{children}</BootstrapInstaller>
      </body>
    </html>
  );
}

export default RootLayout;
