import type { NextRequest } from 'next/server';

import packageJson from '../../../../package.json' assert { type: 'json' };
import type { ApiResponse } from '../../../globals/types';

export const runtime = 'edge';

export const GET = async (_request: NextRequest) => {
  const json = {
    data: undefined,
    error: undefined,
    metadata: {
      lastUpdatedAt: new Date(),
      status: 'ok',
      version: packageJson.version,
    },
  } as const satisfies ApiResponse<unknown>;

  return Response.json(json, {
    status: 200,
  });
};
