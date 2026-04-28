export interface CloudflareChatResponse {
  result: {
    response: string;
  };
  success: boolean;
  errors: any[];
  messages: any[];
}

const DEFAULT_MODEL = "@cf/meta/llama-3.1-8b-instruct";

function getCloudflareConfig() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;
  if (!accountId || !apiToken) {
    throw new Error("Cloudflare credentials missing in .env");
  }
  return { accountId, apiToken };
}

export async function chatWithCloudflare(
  prompt: string,
  systemPrompt: string = "You are a helpful assistant for Nguyễn Quốc Hùng's portfolio."
): Promise<string> {
  const { accountId, apiToken } = getCloudflareConfig();
  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${DEFAULT_MODEL}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Authorization": `Bearer ${apiToken}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [{ role: "system", content: systemPrompt }, { role: "user", content: prompt }],
    }),
  });

  return handleCloudflareResponse(response);
}

async function handleCloudflareResponse(response: Response): Promise<string> {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`AI Error: ${errorData.errors?.[0]?.message || response.statusText}`);
  }
  const data: CloudflareChatResponse = await response.json();
  return data.result.response;
}
