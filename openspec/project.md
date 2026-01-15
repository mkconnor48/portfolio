# 项目上下文

## 目的
本项目是一个个人作品集网站（selfInfo），目标用户为招聘方和技术同行。核心目标是展示个人信息、经历、技能和作品，用于求职目的。

## 技术栈
- 前端：React + Next.js + TypeScript
- 样式：Tailwind CSS
- 代码规范：ESLint + Prettier
- 部署：Vercel

## 项目约定

### 代码风格
- 使用 ESLint 和 Prettier 进行代码规范检查 and 格式化
- 命名约定：组件使用 PascalCase，变量和函数使用 camelCase
- 使用 TypeScript 严格模式，确保类型安全

### 架构模式
- 使用 Next.js App Router (Next.js 13/14+)
- 组件化架构，采用卡片式设计
- 响应式布局，优先移动端适配

### 测试策略
- 单元测试：使用 Jest 和 React Testing Library
- 集成测试：针对关键用户流程
- E2E 测试：可选，使用 Playwright

### Git 工作流
- 主分支：`main`
- 开发分支：`develop`
- 功能分支：`feature/xxx`
- Commit 规范：`type: description`（例如：`feat: add user profile page`）
- 自动化部署：develop 分支配置 Preview Deployments，main 分支配置 Production Deployment

## 领域上下文
- 网站风格参考 Read.cv：简洁、专业、卡片式布局
- 配色：马卡龙粉蓝渐变
- 主题：支持暗色/浅色模式切换
- Logo：极简图标（飞鸟/翅膀元素，象征自由反抗）
- 交互细节：磁吸按钮（Magnetic Buttons）、技能标签浮出动画（鼠标指针为箭头）
- 页面结构（MVP+）：
  1. 个人信息 - MKCONNOR、广东水利电力职业技术学院应届毕业生、广州
  2. 经历 - 教育/工作经历、技能标签云（带浮出动画，鼠标指针为箭头）
  3. 作品展示 - 作品集概览页、作品详情页
  4. 简历展示 - 在线 PDF 预览
  5. 联系方式 - 邮箱（3139961932@qq.com）、GitHub（https://github.com/connormk）

## 重要约束
- 响应式设计：确保在手机端（微信/飞书内嵌浏览器）保持美观
- SEO 优化：配置 metadata 和 OpenGraph 图片，提升链接预览效果
- 性能优化：使用 Next.js 内置 of next/font 和 next/image，优化 Lighthouse 分数
- 深色模式处理：渐变在深色模式下使用更高饱和度，避免对比度不足
- 视觉一致性：严格定义 Tailwind spacing 步长，保持排版节奏

## 外部依赖
- Vercel：部署平台，支持自动构建和预览部署
- 暂无外部 API 依赖
