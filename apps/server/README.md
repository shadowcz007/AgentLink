# AgentLink Server

Next.js 服务端应用，提供跨域存储服务和 Admin 管理后台。

## 功能

- `/storage` - 存储服务页面（供 iframe 加载）
- `/admin` - 管理后台（域名白名单管理）
- `/api/auth/login` - 登录 API
- `/api/domains` - 域名管理 API

## 环境变量

创建 `.env.local` 文件：

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key-change-in-production"
```

## 数据库迁移

```bash
npx prisma migrate dev
```

## 创建管理员

```bash
npx tsx scripts/init-admin.ts <username> <password>
```

## 开发

```bash
npm run dev
```

## 构建

```bash
npm run build
npm start
```
