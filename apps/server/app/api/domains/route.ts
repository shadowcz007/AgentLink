import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware';
import { getAllDomains, addDomain, deleteDomain, updateDomainStatus } from '@/lib/domains';

export const GET = requireAuth(async (req: NextRequest, { user }) => {
  try {
    const domains = await getAllDomains();
    return NextResponse.json(domains);
  } catch (error) {
    console.error('Get domains error:', error);
    return NextResponse.json(
      { error: '获取域名列表失败' },
      { status: 500 }
    );
  }
});

export const POST = requireAuth(async (req: NextRequest, { user }) => {
  try {
    const { domain } = await req.json();

    if (!domain || typeof domain !== 'string') {
      return NextResponse.json(
        { error: '域名不能为空' },
        { status: 400 }
      );
    }

    const result = await addDomain(domain.trim());
    return NextResponse.json(result);
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: '域名已存在' },
        { status: 409 }
      );
    }
    console.error('Add domain error:', error);
    return NextResponse.json(
      { error: '添加域名失败' },
      { status: 500 }
    );
  }
});

