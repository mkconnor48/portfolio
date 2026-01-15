## ADDED Requirements

### Requirement: Global Navigation and Layout
网站 SHALL 提供一致的全局导航和布局系统，支持响应式设计。

#### Scenario: Mobile navigation bottom fixed
- **WHEN** 用户在移动设备上访问网站
- **THEN** 导航栏固定在屏幕底部
- **AND** 包含首页、关于、作品、联系四个标签
- **AND** 当前页面标签高亮显示

#### Scenario: Desktop navigation top fixed
- **WHEN** 用户在桌面设备上访问网站
- **THEN** 导航栏固定在页面顶部
- **AND** 水平排列所有导航项
- **AND** 包含 Logo 和导航链接

#### Scenario: Responsive layout adaptation
- **WHEN** 屏幕宽度变化时
- **THEN** 布局自动适配
- **AND** 保持内容可读性和美观性

### Requirement: Page Structure Consistency
所有页面 SHALL 遵循统一的卡片式布局结构。

#### Scenario: Card-based content layout
- **WHEN** 用户访问任何页面
- **THEN** 内容以卡片形式展示
- **AND** 卡片使用统一的 padding 和 margin
- **AND** 卡片具有圆角和阴影效果

### Requirement: Dark/Light Mode Toggle
网站 SHALL 支持暗色和浅色模式切换。

#### Scenario: Theme toggle button
- **WHEN** 用户点击主题切换按钮
- **THEN** 整个网站切换到对应主题
- **AND** 用户选择持久化到本地存储
