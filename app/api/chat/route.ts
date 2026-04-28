import { NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { SYSTEM_PROMPT } from '@/lib/profile-context';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Access the AI binding directly from Cloudflare environment
    const ai = getRequestContext().env.AI;
    
    const response = await ai.run('@cf/meta/llama-3.1-8b-instruct', {
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: prompt }
      ]
    });

    return NextResponse.json({ response: response.response });
  } catch (error: any) {
    console.error('AI Chat Error:', error);
    return NextResponse.json(
      { error: 'AI service currently unavailable on this environment' },
      { status: 500 }
    );
  }
}
