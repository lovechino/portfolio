import { NextResponse } from 'next/server';
import { chatWithCloudflare } from '@/lib/cloudflare';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Không cần gửi SYSTEM_PROMPT nữa vì Backend đã được nạp dữ liệu CV trực tiếp
    const response = await chatWithCloudflare(prompt);
    return NextResponse.json({ response });
  } catch (error: any) {
    console.error('AI Chat Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
