# Tasks: Add Portfolio Enhancements

## 1. Specification Updates
- [x] 1.1 完善 `specs/content/spec.md`：加入详细教育背景和联系方式
- [x] 1.2 完善 `specs/ui/spec.md`：定义按钮跳动动画和标签动画的参数
- [x] 1.3 编写 `specs/resume/spec.md`：定义简历预览的功能要求

## 2. Component Development
- [x] 2.1 开发 `Button`：集成 `whileHover: { y: -4 }` 跳动动画
- [x] 2.1.1 移除冗余的 `MagneticButton` 及相关磁吸逻辑
- [x] 2.2 增强 `Badge`：添加浮出动画和箭头指针
- [x] 2.3 开发 `PDFViewer`：实现基础的 PDF 预览功能

## 3. Page & Route Implementation
- [x] 3.1 重构 Hero Section：显示“广东水利电力职业技术学院应届毕业生”
- [x] 3.2 创建 `/projects` 概览页：展示所有项目卡片
- [x] 3.3 创建 `/projects/[id]` 详情页：实现基础模板
- [x] 3.4 创建 `/resume` 页面：集成 PDF 预览

## 4. Verification & Testing
- [x] 4.1 检查所有内部链接的跳转正确性
- [x] 4.2 测试按钮和标签的统一跳动效果
- [x] 4.3 最终性能审计，确保交互不影响 Lighthouse 分数
