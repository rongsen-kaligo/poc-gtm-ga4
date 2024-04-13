import type { NextRequest } from 'next/server';

import packageJson from '../../../../package.json' assert { type: 'json' };
import type { ApiResponse } from '../../../globals/types';
import type { Bootstrap } from './types';

export const runtime = 'edge';

/**
 * NOTE: This is a mocked tenantId for now
 */
const tenantId = '123456' as const;

export const GET = async (_request: NextRequest) => {
  const json = {
    data: {
      tenantId,
    },
    error: undefined,
    metadata: {
      lastUpdatedAt: new Date(),
      status: 'ok',
      version: packageJson.version,
    },
  } as const satisfies ApiResponse<Bootstrap>;

  return Response.json(json, {
    status: 200,
  });
};
