import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
);

export async function verifyAuth(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

export function requireAuth(
  handler: (
    req: NextRequest,
    context: { params?: Promise<{ [key: string]: string }> | { [key: string]: string }; user: any }
  ) => Promise<NextResponse>
) {
  return async (req: NextRequest, context?: { params?: Promise<{ [key: string]: string }> | { [key: string]: string } }) => {
    const user = await verifyAuth(req);
    if (!user) {
      return NextResponse.json({ error: '未授权' }, { status: 401 });
    }
    return handler(req, { ...context, user });
  };
}

