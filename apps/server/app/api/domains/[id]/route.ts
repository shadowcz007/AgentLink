import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware';
import { deleteDomain, updateDomainStatus } from '@/lib/domains';

export const DELETE = requireAuth(async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;
    await deleteDomain(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete domain error:', error);
    return NextResponse.json(
      { error: '删除域名失败' },
      { status: 500 }
    );
  }
});

export const PATCH = requireAuth(async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;
    const { status } = await req.json();

    if (status !== 'active' && status !== 'inactive') {
      return NextResponse.json(
        { error: '状态值无效' },
        { status: 400 }
      );
    }

    const result = await updateDomainStatus(id, status);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Update domain error:', error);
    return NextResponse.json(
      { error: '更新域名状态失败' },
      { status: 500 }
    );
  }
});

