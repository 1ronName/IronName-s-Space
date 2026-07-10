# IronName's Personal Page

基于 [dogxi/my-card](https://github.com/dogxi/my-card) 制作的个人主页，使用 Vite + React + TypeScript + Tailwind CSS 构建。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 18 |
| 构建工具 | Vite 7 |
| 语言 | TypeScript 5 |
| 样式 | Tailwind CSS 3 |
| 动画 | Framer Motion 10 |
| 图标 | React Icons 5 |
| SEO | react-helmet-async |
| 监控 | Vercel Analytics + Speed Insights |

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 代码检查
npm run lint
```

## 构建与预览

```bash
# 类型检查 + 生产构建，输出到 dist/
npm run build

# 本地预览生产构建
npm run preview
```

## 部署

项目通过 Vercel 关联 GitHub 仓库，推送代码后 Vercel 会自动同步并部署，无需手动操作。

- 构建命令：`tsc && vite build`，输出目录：`dist`
- Vercel 自动识别 Vite 项目，零配置

如需部署到其他平台（Netlify / Cloudflare Pages / GitHub Pages 等），执行 `npm run build` 后将 `dist/` 目录上传即可，记得配置 SPA 回退规则。

## 项目结构

```
├── index.html              # HTML 入口
├── vite.config.ts          # Vite 配置
├── tailwind.config.js      # Tailwind 配置（自定义深色/浅色主题）
├── tsconfig.json           # TypeScript 配置
├── public/
│   ├── images/             # 静态资源（头像、背景图等）
│   └── ...
├── src/
│   ├── main.tsx            # 应用入口
│   ├── App.tsx             # 根组件（三栏布局）
│   ├── components/         # 组件
│   │   ├── common/         # 通用组件（Button, Card, ThemeToggle 等）
│   │   ├── layout/         # 布局组件
│   │   ├── profile/        # 个人简介
│   │   ├── projects/       # 项目展示
│   │   ├── skills/         # 技能列表
│   │   ├── memos/          # 备忘录/时间线
│   │   ├── plans/          # 计划/路线图
│   │   ├── navigation/     # 导航链接
│   │   └── widgets/        # 小组件
│   ├── contexts/           # React Context（主题切换）
│   ├── data/               # 内容数据文件
│   ├── hooks/              # 自定义 Hooks
│   ├── types/              # TypeScript 类型定义
│   └── styles/             # 全局样式
└── dist/                   # 构建输出
```

## 自定义内容

所有个人内容位于 `src/data/` 目录下：

- `profile.ts` — 姓名、标题、简介、头像、社交链接
- `projects.ts` — 项目展示数据
- `skills.ts` — 技能列表
- `memos.ts` — 备忘录条目
- `plans.ts` — 计划条目
- `navigation.ts` — 导航链接
- `widgets.ts` — 小组件配置
