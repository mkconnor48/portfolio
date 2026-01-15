# Change: Rebuild Portfolio Core

## Why
原有的提案结构过于宽泛且缺乏细节，无法有效指导高质量的作品集开发。
为了实现 Read.cv 风格的极简、专业且具有高度视觉一致性的作品集，需要重新构建核心规格和设计决策，确保代码质量和用户体验达到求职标准。

## What Changes
- **核心规格重构**：重新定义个人信息、经历、项目和联系方式的规格说明，增加更具体的交互和视觉要求。
- **设计系统精化**：在 `design.md` 中明确 Tailwind CSS 的具体步长、渐变算法和卡片式布局的精确参数。
- **组件化升级**：将原本零散的 UI 组件整合为具有高度复用性的核心组件库。
- **SEO & 性能**：强制要求 100/100 的 Lighthouse 分数。

## Impact
- **Affected Specs**: `personal-info`, `experiences`, `projects`, `contact`, `portfolio-display` (将被重组为 `content` 和 `ui` 两个主要维度)。
- **Affected Code**: `portfolio/src/components/*`, `portfolio/src/app/*`。
- **BREAKING**: 之前的目录结构将被弃用，采用更符合模块化开发的规格组织方式。
