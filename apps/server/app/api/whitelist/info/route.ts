import { NextRequest, NextResponse } from 'next/server';
import { getWhitelistInfo } from '@/lib/domains';

// 设置 CORS 头的辅助函数
function setCorsHeaders(response: NextResponse, origin: string | null) {
  // 始终设置 CORS 头
  if (origin) {
    // 如果有 origin，使用具体的 origin（支持 credentials）
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Credentials', 'true');
  } else {
    // 如果没有 origin，允许所有来源（开发环境）
    response.headers.set('Access-Control-Allow-Origin', '*');
  }
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Origin');
  response.headers.set('Access-Control-Max-Age', '86400'); // 24小时
  return response;
}

// 处理 OPTIONS 预检请求
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin');
  const response = new NextResponse(null, { status: 204 });
  return setCorsHeaders(response, origin);
}

export async function GET(request: NextRequest) {
  try {
    const origin = request.headers.get('origin');
    const { searchParams } = new URL(request.url);
    const includeAll = searchParams.get('includeAll') === 'true';
    
    let requestOrigin: string | null = null;
    if (!includeAll) {
      requestOrigin = origin || 
                      request.headers.get('referer')?.split('/').slice(0, 3).join('/') ||
                      null;
    }

    const info = await getWhitelistInfo(requestOrigin || undefined);
    
    if (requestOrigin && !info) {
      const response = NextResponse.json(
        { error: '域名不在白名单中' },
        { status: 403 }
      );
      return setCorsHeaders(response, origin);
    }

    const response = NextResponse.json({ 
      whitelist: info,
      origin: requestOrigin || null,
    });
    return setCorsHeaders(response, origin);
  } catch (error) {
    console.error('Get whitelist info error:', error);
    const origin = request.headers.get('origin');
    const response = NextResponse.json(
      { error: '获取白名单信息失败' },
      { status: 500 }
    );
    return setCorsHeaders(response, origin);
  }
}

