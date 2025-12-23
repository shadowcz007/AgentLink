import { headers } from 'next/headers';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AgentLink Storage',
};

export default async function StorageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const origin = headersList.get('origin') || 
                 headersList.get('referer')?.split('/').slice(0, 3).join('/') ||
                 '';

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {origin && (
          <meta httpEquiv="Content-Security-Policy" content={`frame-ancestors ${origin};`} />
        )}
      </head>
      <body suppressHydrationWarning>
        {children}
        {origin && (
          <>
            <Script
              id="storage-init"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  // 存储服务将在客户端脚本中初始化
                  // 这里需要加载 @agentlink/core 的浏览器版本
                  window.STORAGE_ORIGIN = '${origin}';
                `,
              }}
            />
            <Script src="/storage-client.js" strategy="afterInteractive" />
          </>
        )}
      </body>
    </html>
  );
}

