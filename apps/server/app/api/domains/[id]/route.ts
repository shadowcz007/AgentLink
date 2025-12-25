import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/middleware';
import { deleteDomain, updateDomainStatus, updateDomain } from '@/lib/domains';

export const DELETE = requireAuth(async (req: NextRequest, { params, user }) => {
  try {
    const resolvedParams = params instanceof Promise ? await params : params;
    const { id } = resolvedParams as { id: string };
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

export const PATCH = requireAuth(async (req: NextRequest, { params, user }) => {
  try {
    const resolvedParams = params instanceof Promise ? await params : params;
    const { id } = resolvedParams as { id: string };
    const { status, description } = await req.json();

    // 如果只更新描述
    if (description !== undefined && status === undefined) {
      const result = await updateDomain(id, { description: description?.trim() || null });
      return NextResponse.json(result);
    }

    // 如果只更新状态
    if (status !== undefined && description === undefined) {
      if (status !== 'active' && status !== 'inactive') {
        return NextResponse.json(
          { error: '状态值无效' },
          { status: 400 }
        );
      }
      const result = await updateDomainStatus(id, status);
      return NextResponse.json(result);
    }

    // 同时更新状态和描述
    if (status !== undefined && description !== undefined) {
      if (status !== 'active' && status !== 'inactive') {
        return NextResponse.json(
          { error: '状态值无效' },
          { status: 400 }
        );
      }
      const result = await updateDomain(id, { status, description: description?.trim() || null });
      return NextResponse.json(result);
    }

    return NextResponse.json(
      { error: '请提供要更新的字段' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Update domain error:', error);
    return NextResponse.json(
      { error: '更新域名失败' },
      { status: 500 }
    );
  }
});

