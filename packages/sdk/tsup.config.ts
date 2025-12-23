import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  // 对于浏览器环境，将所有依赖都打包进去
  // 这样用户只需要引入一个文件即可
  external: [],
  // 明确指定要打包所有依赖（包括本地依赖）
  noExternal: [/^@agentlink\/core$/, /^broadcast-channel$/, /^data-transport$/, /^localforage$/],
  // 排除 Node.js 内置模块（浏览器环境不需要）
  platform: 'browser',
  // 定义全局变量，用于替换 Node.js 内置模块
  define: {
    'process.env.NODE_ENV': '"production"',
  },
});