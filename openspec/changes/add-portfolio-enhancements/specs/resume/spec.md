## ADDED Requirements

### Requirement: PDF Resume Preview
系统 SHALL 提供在线预览 PDF 简历的功能。

#### Scenario: Preview access
- **WHEN** 用户访问 `/resume`
- **THEN** 必须渲染 PDF 预览组件
- **AND** 提供一个明显的“下载 PDF”按钮

#### Scenario: Mobile compatibility
- **WHEN** 移动端访问
- **THEN** 如果无法内联预览，必须引导用户点击下载
