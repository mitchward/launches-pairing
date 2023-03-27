import { getLaunches } from '../index';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ docs: [] }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it('Calls space X api', async () => {
  await getLaunches({ limit: 10 });
  expect(fetch).toHaveBeenCalledTimes(1);
});

it('Passes limit in body', async () => {
  await getLaunches({ limit: 10 });
  expect(fetch).toBeCalledWith('https://api.spacexdata.com/v5/launches/query', {
    body: '{"options":{"limit":10,"populate":["payloads","cores.core"]}}',
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });
});

describe('When space X api fails', () => {
  it('Returns empty array', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('API is down'));
    const launches = await getLaunches();

    expect(launches).toEqual([]);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
