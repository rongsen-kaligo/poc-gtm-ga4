'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import { createContext, useState, type PropsWithChildren } from 'react';
import { useMount } from 'react-use';

import type { UserContext } from './types';
import { Loading } from '../../components/loading/loading';

interface UserProviderProps extends PropsWithChildren {}

const context = createContext<UserContext>({ tenantId: '' });

export function UserProvider$(props: UserProviderProps) {
  const [value, setValue] = useState<UserContext>({ tenantId: '' });

  useMount(() => {
    window.setTimeout(
      () => {
        const tenantId = '123456';

        sendGTMEvent({
          // biome-ignore lint/style/useNamingConvention: GTM property naming convention
          tenant_id: tenantId,
        });
        setValue((prev) => ({ ...prev, tenantId }));
      },
      Math.random() * 7e3 + 3e3
    );
  });

  if (value.tenantId) {
    return <context.Provider value={value}>{props.children}</context.Provider>;
  }

  return <Loading />;
}
