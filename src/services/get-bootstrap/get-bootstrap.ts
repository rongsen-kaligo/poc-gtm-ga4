import type { Bootstrap } from '../../app/api/bootstrap/types';
import { API_URL } from '../../globals/constants';
import type { ApiResponse } from '../../globals/types';

export async function getBootstrap() {
  try {
    const result = await fetch(`${API_URL}/api/bootstrap`);
    const data = (await result.json()) as ApiResponse<Bootstrap>;

    return data;
  } catch (error) {
    return { data: undefined, error };
  }
}
