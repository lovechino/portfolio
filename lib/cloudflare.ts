/**
 * lib/cloudflare.ts
 * Client để gọi tới Cloudflare Worker Backend.
 */
export async function chatWithCloudflare(prompt: string) {
  const workerUrl = process.env.CLOUDFLARE_WORKER_URL;

  if (!workerUrl) {
    throw new Error('CLOUDFLARE_WORKER_URL is not defined');
  }

  const response = await fetch(`${workerUrl}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to fetch from AI Worker');
  }

  const data = await response.json();
  return data.response;
}
