'use client';

import { sendGTMEvent } from "@next/third-parties/google";
import { useMount } from "react-use";

export function User$() {
  useMount(() => {
    window.setTimeout(() => {
      sendGTMEvent({
        tenant_id: '123456',
      });
    }, 5e3);
  });

  return null;
}
