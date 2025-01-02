const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchWithDelay = async (url: string, options: RequestInit, delay: number) => {
  await sleep(delay); // Delay before fetching
  const response = await fetch(url, options);
  return response;
};