import { getWhitelistInfo } from '@/lib/domains';
import Launchpad from '@/components/Launchpad';

export default async function Home() {
  // 获取所有活跃的白名单应用
  const apps = await getWhitelistInfo();
  const appsList = Array.isArray(apps) ? apps : [];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        {/* 标题区域 */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Mixlab Launchpad
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            白名单是正在孵化的应用
          </p>
        </div>

        {/* Launchpad 组件 */}
        <Launchpad apps={appsList} />
      </main>
    </div>
  );
}
