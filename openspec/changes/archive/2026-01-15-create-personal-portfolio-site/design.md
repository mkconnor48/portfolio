## Context
构建个人作品集网站（selfInfo），目标用户为招聘方和技术同行。参考 Read.cv 风格，采用卡片式布局，马卡龙粉蓝渐变配色，支持响应式设计和暗色模式。

## Goals / Non-Goals
- Goals: 简洁专业的设计，移动端优先，SEO 优化，Lighthouse >95
- Non-Goals: 不包含用户交互功能，不支持多语言

## Decisions

### Color Palette
#### Light Mode
- Primary: #3B82F6 (blue-500)
- Secondary: #F59E0B (amber-500)
- Accent: #EC4899 (pink-500)
- Background: #FFFFFF
- Surface: #F8FAFC
- Text Primary: #1E293B
- Text Secondary: #64748B

#### Dark Mode
- Primary: #60A5FA (blue-400, 更高饱和度)
- Secondary: #FBBF24 (amber-400, 更高饱和度)
- Accent: #F472B6 (pink-400, 更高饱和度)
- Background: #0F172A
- Surface: #1E293B
- Text Primary: #F1F5F9
- Text Secondary: #CBD5E1

#### Gradient (马卡龙粉蓝)
- Light: linear-gradient(135deg, #F472B6 0%, #60A5FA 100%)
- Dark: linear-gradient(135deg, #F472B6 0%, #60A5FA 100%) (保持相同，但背景适配)

### Spacing System
- Card Padding: p-6 (24px)
- Section Margin: mb-8 (32px)
- Element Gap: gap-4 (16px)
- Container Max Width: max-w-4xl
- Mobile Padding: px-4 (16px)

### Typography
- Heading 1: text-3xl font-bold (30px)
- Heading 2: text-2xl font-semibold (24px)
- Heading 3: text-xl font-medium (20px)
- Body Large: text-lg (18px)
- Body: text-base (16px)
- Caption: text-sm text-secondary (14px)

### Layout Patterns
- Card Component: rounded-lg bg-surface shadow-sm border
- Button Primary: gradient background, white text, rounded-full
- Navigation: fixed bottom on mobile, top on desktop

## Risks / Trade-offs
- 渐变在暗色模式下可能需要调整对比度
- 移动端导航固定可能占用屏幕空间

## Migration Plan
- 无现有系统迁移，直接新开发
