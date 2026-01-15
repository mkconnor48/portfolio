## ADDED Requirements

### Requirement: Card-Based Layout
系统 SHALL 使用统一的卡片样式作为内容容器。

#### Scenario: Card styling
- **WHEN** 渲染内容卡片
- **THEN** 必须应用 `rounded-lg` (8px) 或更大的圆角
- **AND** 应用极简的边框 `border-slate-200` (Light) 或 `border-slate-800` (Dark)
- **AND** 背景色必须为 `bg-white` (Light) 或 `bg-slate-900` (Dark)

### Requirement: Macaron Gradient Typography
系统 SHALL 在关键标题和强调文字上使用粉蓝渐变。

#### Scenario: Hero title gradient
- **WHEN** 渲染姓名 "MKCONNOR"
- **THEN** 必须使用 `bg-gradient-to-r from-pink-300 to-blue-300` (Light)
- **AND** 设置 `bg-clip-text text-transparent` 以实现文字渐变效果

### Requirement: Responsive Navigation
系统 SHALL 提供适配不同屏幕尺寸的导航。

#### Scenario: Mobile navigation
- **WHEN** 屏幕宽度小于 768px
- **THEN** 导航栏 SHALL 固定在底部 (Bottom Navigation)
- **AND** 提供图标和文字标签

#### Scenario: Desktop navigation
- **WHEN** 屏幕宽度大于或等于 768px
- **THEN** 导航栏 SHALL 固定在顶部或侧边
- **AND** 保持极致简约的视觉风格

### Requirement: Accessibility & Dark Mode
系统 SHALL 支持无障碍访问和自动/手动暗色模式切换。

#### Scenario: Dark mode contrast
- **WHEN** 切换到暗色模式
- **THEN** 文字颜色必须从 `text-slate-900` 变为 `text-slate-100`
- **AND** 确保背景与文字对比度符合 WCAG AA 标准
