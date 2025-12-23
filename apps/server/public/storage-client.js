// 初始化 OriginStorage 服务
// 这个脚本在 /storage 页面中运行，用于处理来自客户端的存储请求

(async function() {
  if (typeof window === 'undefined') return;
  
  const origin = window.STORAGE_ORIGIN;
  if (!origin) {
    console.error('[Storage Client] Storage origin not set');
    return;
  }

  try {
    console.log('[Storage Client] Initializing storage for origin:', origin);
    
    // 从 SDK 的打包文件中导入 OriginStorage
    // SDK 文件在构建时会被复制到 public/sdk.mjs
    const { OriginStorage } = await import('/sdk.mjs');
    
    // 创建 OriginStorage 实例
    const storage = new OriginStorage({
      targetOrigin: origin,
      read: true,
      write: true,
      broadcastChanges: true,
    });
    
    // 将实例保存到 window，方便调试
    window.originStorage = storage;
    
    console.log('[Storage Client] ✅ Storage initialized successfully');
  } catch (error) {
    console.error('[Storage Client] ❌ Failed to initialize storage:', error);
    console.error('[Storage Client] Error details:', error.stack);
  }
})();

