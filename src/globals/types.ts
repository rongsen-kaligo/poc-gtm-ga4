export interface ApiMetadata {
  lastUpdatedAt: Date;
  status: 'ok' | 'error';
  version: string;
}

export type ApiResponse<Data, Err extends Error = Error> =
  | {
      data: Data;
      error: undefined;
      metadata: ApiMetadata;
    }
  | {
      data: undefined;
      error: Err;
      metadata: ApiMetadata;
    };

export interface SupportedRouteItem {
  page: string;
  route: string;
  key: string;
}
