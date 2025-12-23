import { NextRequest, NextResponse } from 'next/server';
import { isDomainAllowedWithWildcard } from '@/lib/domains';

export async function GET(request: NextRequest) {
  try {
    const origin = request.headers.get('origin') || 
                   request.headers.get('referer')?.split('/').slice(0, 3).join('/');

    if (!origin) {
      return NextResponse.json({ allowed: false }, { status: 400 });
    }

    const allowed = await isDomainAllowedWithWildcard(origin);
    return NextResponse.json({ allowed, origin });
  } catch (error) {
    console.error('Check domain error:', error);
    return NextResponse.json(
      { error: '检查域名失败' },
      { status: 500 }
    );
  }
}

