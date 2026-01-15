# Tasks: Rebuild Portfolio Core

## 1. Specification & Planning
- [x] 1.1 编写 `specs/content/spec.md`：定义个人信息、经历和项目的结构化数据要求
- [x] 1.2 编写 `specs/ui/spec.md`：定义卡片布局、渐变和响应式断点的视觉要求
- [x] 1.3 运行 `openspec validate rebuild-portfolio-core --strict` 验证规格

## 2. Base UI Refactoring
- [x] 2.1 重构 `tailwind.config.ts`：注入自定义渐变和步长
- [x] 2.2 实现核心 UI 组件：`Card`, `Badge`, `GradientText`
- [x] 2.3 设置全局布局容器：实现窄版中心布局 (`max-w-2xl` 或 `max-w-3xl`)

## 3. Content Implementation
- [x] 3.1 实现 Hero 区：MKCONNOR、应届毕业生、广州 (使用渐变文字)
- [x] 3.2 实现经历时间轴：支持教育和工作经历，分类展示技能标签云
- [x] 3.3 实现项目展示墙：卡片式展示，包含项目描述和技术栈
- [x] 3.4 实现联系方式：包含邮箱和社交媒体占位符

## 4. Polishing & Optimization
- [x] 4.1 适配暗色模式：调整渐变饱和度和背景对比度
- [x] 4.2 SEO 优化：配置 `Metadata` 对象，添加 OpenGraph 图片支持
- [x] 4.3 性能审计：运行 Lighthouse 检查，确保 Performance/SEO > 95

## 5. Cleanup
- [x] 5.1 归档旧的提案 `create-personal-portfolio-site`
- [x] 5.2 清理 `portfolio/src` 中不符合新规格的冗余代码
