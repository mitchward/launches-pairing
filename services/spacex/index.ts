import { Launch } from './types';
export * from './types';

export const getLaunches = async (options: { limit?: number }): Promise<Launch[]> => {
  try {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ options: { ...options, populate: ['payloads', 'cores.core'] } }),
    });
    const data = await res.json();
    return data.docs;
  } catch (e) {
    console.error('[services/spacex]', 'Failed to fetch launches', e);
    return [];
  }
};
