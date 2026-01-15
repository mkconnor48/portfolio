## ADDED Requirements

### Requirement: Project Showcase Grid
网站 SHALL 以网格形式展示用户的项目作品。

#### Scenario: Project cards layout
- **WHEN** 用户访问作品页面
- **THEN** 项目以卡片网格形式展示
- **AND** 每张卡片包含项目名称、描述、图片
- **AND** 响应式布局适配不同屏幕

#### Scenario: Project categorization
- **WHEN** 用户查看项目列表
- **THEN** 项目分为"课程项目"和"个人项目"两类
- **AND** 提供分类筛选功能

### Requirement: Project Details Display
网站 SHALL 提供项目的详细信息展示。

#### Scenario: Project detail view
- **WHEN** 用户点击项目卡片
- **THEN** 显示项目详细页面
- **AND** 包含技术栈、项目描述、成果展示
- **AND** 提供相关链接（如 GitHub、演示地址）

#### Scenario: Technology badges
- **WHEN** 用户查看项目详情
- **THEN** 显示使用的技术栈标签
- **AND** 标签具有统一的样式和颜色
