# Change: Add Portfolio Enhancements

## Why
在完成核心架构重构后，为了进一步提升作品集的专业度、交互体验和内容完整性，需要补充详细的个人教育背景、扩展页面路由，并引入更高阶的交互效果（如磁吸按钮）。这将使作品集在 Read.cv 风格的基础上，具备更强的视觉吸引力和求职竞争力。

## What Changes
- **内容补充**：更新 Hero Section 以包含“广东水利电力职业技术学院”教育背景。
- **路由扩展**：实现从单页应用向多页应用（App Router）的平滑过渡，增加作品集页、作品详情页和简历预览页。
- **交互升级**：
    - 统一按钮与标签的跳动动画效果。
    - 优化 `SkillBadge` 动画效果及光标行为。
- **组件重构**：移除冗余的 `MagneticButton`，将动画逻辑集成至基础 `Button` 组件。

## Impact
- **Specs**: 新增 `resume` 规格，更新 `content` 和 `ui` 规格。
- **Code**: 修改 `portfolio/src/app/page.tsx`，新增 `portfolio/src/app/projects/` 和 `portfolio/src/app/resume/` 目录。
- **Components**: 新增 `MagneticButton`, `ProjectGallery`, `PDFViewer`。
