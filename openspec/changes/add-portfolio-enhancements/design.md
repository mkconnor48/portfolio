# Design: Portfolio Enhancements

## Context
在核心 UI 系统稳定的基础上，通过增加交互深度和页面维度来强化个人品牌。

## Decisions

### 1. 路由架构 (Routing)
- **`/`**: 保持作为 Hero、经历和精选作品的入口。
- **`/projects`**: 采用瀑布流或网格布局展示所有作品。
- **`/projects/[id]`**: 深度展示单个项目，支持富文本/Markdown 描述。
- **`/resume`**: 使用 `iframe` 或专门的 PDF 渲染库实现简历预览。

### 2. 交互逻辑 (Interaction)
- **磁吸按钮 (Magnetic Button)**:
    - 使用 Framer Motion 监听 `onMouseMove`。
    - 计算鼠标相对于按钮中心的偏移量，应用 `spring` 动画进行位移。
- **技能标签 (Skill Tags)**:
    - 悬停时应用 `y: -4` 的浮出效果。
    - 强制设置 `cursor: default` (箭头)。

### 3. 内容存储
- 将项目数据抽离到 `src/data/projects.ts`，以便于多页面共享和维护。

## Risks
- **PDF 预览兼容性**：移动端浏览器支持不一，需提供备用下载按钮。
- **性能**：磁吸效果需优化动画执行效率，避免低端设备掉帧。
