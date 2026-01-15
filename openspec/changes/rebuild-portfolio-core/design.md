# Design: Portfolio Core Rebuild

## Context
本项目旨在创建一个高水准的个人作品集，视觉风格深度参考 Read.cv。核心在于极简的排版、优雅的渐变和流畅的响应式体验。

## Goals / Non-Goals
- **Goals**: 
    - 实现高度一致的卡片式布局。
    - 移动端（微信/飞书）完美适配。
    - 极致的性能（Lighthouse 全绿）。
    - 语义化 HTML 提升 SEO。
- **Non-Goals**: 
    - 复杂的后端逻辑。
    - 繁重的动画效果（保持克制）。

## Decisions

### 1. 视觉系统 (Visual System)
- **配色方案 (Palette)**:
    - **粉蓝渐变 (Macaron Gradient)**: 
        - Primary: `from-pink-300 to-blue-300` (Light)
        - Dark: `from-pink-500 to-blue-500` (Saturated)
    - **中性色**: 
        - 使用 Tailwind `slate` 色系，Light 模式背景为 `slate-50`，Dark 模式为 `slate-950`。
- **排版 (Typography)**:
    - 使用系统字体栈 (Inter/PingFang SC)。
    - 严格遵循 `4px` 步长 (Tailwind spacing)。
- **阴影 (Shadows)**:
    - 使用自定义的柔和阴影：`shadow-[0_8px_30px_rgb(0,0,0,0.04)]`。

### 2. 架构模式 (Architecture)
- **Content vs UI**: 
    - 将规格分为 `content` (数据结构和内容) 和 `ui` (视觉表现)。
    - 这种分离有助于未来的内容更新和主题切换。
- **组件库**: 
    - 采用 "Atomic Design" 的简化版本：`Atoms` (Icon, Badge) -> `Molecules` (Card, TagCloud) -> `Organisms` (HeroSection, ProjectGrid)。

### 3. 技术栈细节
- **Next.js App Router**: 充分利用 Server Components 减少客户端 JS。
- **next/image**: 所有头像和项目截图必须经过优化。
- **Tailwind CSS**: 禁用默认的 `container` 类，使用自定义的 `max-w-screen-md mx-auto` 以实现 Read.cv 的窄版中心布局。

## Risks / Trade-offs
- **暗色模式渐变**: 简单的反色可能导致对比度不足，需要手动调整渐变色的饱和度。
- **性能优化**: 复杂的 SVG 动画可能影响 Lighthouse 分数，优先使用 CSS 动画。

## Migration Plan
- 废弃 `openspec/changes/create-personal-portfolio-site/` 中的所有临时文件。
- 将 `portfolio/src` 下的现有代码作为基础，按新规格进行重构。
