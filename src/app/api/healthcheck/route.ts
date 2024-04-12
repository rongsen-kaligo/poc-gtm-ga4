import type { NextRequest } from 'next/server'

import packageJson from '../../../../package.json' assert { type: 'json' };

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  //
  // KV Example:
  // const myKv = getRequestContext().env.MY_KV_NAMESPACE
  // await myKv.put('suffix', ' from a KV store!')
  // const suffix = await myKv.get('suffix')
  // responseText += suffix

  return Response.json({
    status: 'ok',
    version: packageJson.version,
    last_checked_at: new Date(),
  }, {
    status: 200,
  });
}
