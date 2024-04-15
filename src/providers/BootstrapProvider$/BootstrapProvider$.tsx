'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import { createContext, type PropsWithChildren } from 'react';
import { useMount } from 'react-use';

import type { Bootstrap } from '../../app/api/bootstrap/types';

interface BootstrapProviderProps extends PropsWithChildren {
  value: Bootstrap;
}

const context = createContext<Bootstrap>({ tenantId: '' });

export function TenantProvider$(props: BootstrapProviderProps) {
  useMount(() => {
    sendGTMEvent({
      event: 'tenant_ready',
      tenantId: props.value.tenantId,
    });
  });

  return <context.Provider value={props.value}>{props.children}</context.Provider>;
}
