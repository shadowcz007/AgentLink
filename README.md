# AgentLink

AgentLink 是一个基于 Next.js 的跨域存储服务，提供安全的跨域数据存储解决方案。

## 项目结构

```
AgentLink/
├── packages/
│   ├── core/          # 核心存储库 (@agentlink/core)
│   └── sdk/           # 客户端 SDK (@agentlink/sdk)
├── apps/
│   └── server/        # Next.js 服务端应用
└── package.json       # Monorepo 根配置
```

## 功能特性

- ✅ 跨域存储访问（基于 iframe 通信）
- ✅ 域名白名单管理（支持通配符）
- ✅ Admin 管理后台（登录认证 + 域名管理）
- ✅ 客户端 SDK（TypeScript 支持）
- ✅ SQLite 数据库存储配置

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 初始化数据库

```bash
cd apps/server
npx prisma migrate dev
```

### 3. 创建管理员用户

```bash
cd apps/server
npx tsx scripts/init-admin.ts admin your-password
```

### 4. 启动服务端

```bash
cd apps/server
npm run dev
```

服务将在 `http://localhost:3000` 启动。

### 5. 访问管理后台

打开浏览器访问 `http://localhost:3000/admin`，使用创建的管理员账号登录。

## 使用客户端 SDK

### 安装

```bash
npm install @agentlink/sdk
```

### 基本使用

```typescript
import { AgentLinkClient } from '@agentlink/sdk';

// 创建客户端实例
const client = new AgentLinkClient({
  serverUrl: 'http://localhost:3000', // 服务端地址
});

// 等待连接
await client.onConnect(() => {
  console.log('Connected!');
});

// 存储数据
await client.setItem('user', { name: 'John', age: 30 });

// 读取数据
const user = await client.getItem('user');
console.log(user); // { name: 'John', age: 30 }

// 删除数据
await client.removeItem('user');

// 清空所有数据
await client.clear();

// 监听变更
const { off } = await client.onChange((data) => {
  console.log('Storage changed:', data);
});

// 取消监听
off();
```

## 配置域名白名单

1. 登录管理后台 (`/admin`)
2. 在域名管理页面添加允许访问的域名
3. 支持通配符，如 `*.example.com`

## 环境变量

在 `apps/server/.env.local` 中配置：

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key-change-in-production"
```

## 开发

### 构建核心库

```bash
cd packages/core
npm run build
```

### 构建 SDK

```bash
cd packages/sdk
npm run build
```

### 构建服务端

```bash
cd apps/server
npm run build
```

## 技术栈

- **服务端**: Next.js 14+, TypeScript, Prisma, SQLite
- **核心库**: origin-storage (基于 localforage)
- **客户端 SDK**: TypeScript, tsup
- **UI**: Tailwind CSS

## 许可证

MIT
