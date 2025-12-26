'use client';

import { useState, useMemo } from 'react';

interface App {
  domain: string;
  description: string | null;
}

interface LaunchpadProps {
  apps: App[];
}

export default function Launchpad({ apps }: LaunchpadProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApps = useMemo(() => {
    if (!searchQuery.trim()) {
      return apps;
    }
    const query = searchQuery.toLowerCase();
    return apps.filter(
      (app) =>
        app.domain.toLowerCase().includes(query) ||
        (app.description && app.description.toLowerCase().includes(query))
    );
  }, [apps, searchQuery]);

  const handleAppClick = (domain: string) => {
    // 处理通配符域名
    if (domain.startsWith('*.')) {
      // 对于通配符域名，提示用户或禁用点击
      return;
    }
    // 确保使用 https 协议
    const url = domain.startsWith('http') ? domain : `https://${domain}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const isWildcard = (domain: string) => domain.startsWith('*.');

  return (
    <div className="w-full">
      {/* 搜索框 */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="搜索应用..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 focus:border-transparent transition-all"
        />
        {searchQuery && (
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            找到 {filteredApps.length} 个应用
          </p>
        )}
      </div>

      {/* 应用卡片网格 */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredApps.map((app) => (
            <div
              key={app.domain}
              onClick={() => !isWildcard(app.domain) && handleAppClick(app.domain)}
              className={`
                p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 
                bg-white dark:bg-zinc-900 
                transition-all duration-200
                ${
                  isWildcard(app.domain)
                    ? 'cursor-not-allowed opacity-60'
                    : 'cursor-pointer hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 active:scale-95'
                }
              `}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 truncate flex-1">
                  {app.domain}
                </h3>
                {!isWildcard(app.domain) && (
                  <svg
                    className="w-5 h-5 text-zinc-400 dark:text-zinc-500 flex-shrink-0 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </div>
              {app.description && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {app.description}
                </p>
              )}
              {isWildcard(app.domain) && (
                <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-2">
                  通配符域名
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-zinc-500 dark:text-zinc-400">
            {searchQuery ? '没有找到匹配的应用' : '暂无正在孵化的应用'}
          </p>
        </div>
      )}
    </div>
  );
}

