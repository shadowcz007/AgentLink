import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  // 设置路径名到 header，供 layout 使用
  response.headers.set('x-pathname', request.nextUrl.pathname);
  
  // 为 /storage 路径设置 frame-ancestors CSP 头
  if (request.nextUrl.pathname.startsWith('/storage')) {
    const origin = request.headers.get('origin') || 
                   request.headers.get('referer')?.split('/').slice(0, 3).join('/') ||
                   '';
    
    if (origin) {
      response.headers.set('Content-Security-Policy', `frame-ancestors ${origin};`);
    }
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径除了：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

