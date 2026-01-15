# 🧪 个人作品集网站测试指南

## 📋 概述

本文档提供了个人作品集网站的完整测试策略，涵盖从基础功能到高级边界条件的全面测试场景。

### 🎯 测试目标

- **功能完整性**: 确保所有页面和交互正常工作
- **性能优化**: Lighthouse 性能/SEO 分数 > 95
- **用户体验**: 响应式设计和无障碍访问
- **代码质量**: 通过所有 linting 和类型检查

### 📊 验收标准

- ✅ Lighthouse Performance ≥ 95
- ✅ Lighthouse SEO ≥ 95
- ✅ Lighthouse Accessibility ≥ 90
- ✅ 所有页面在移动端正常显示
- ✅ 深色/浅色模式切换正常
- ✅ 键盘导航完整覆盖

## 🛠️ 测试环境

### 本地开发环境

```bash
# 启动开发服务器
npm run dev

# 访问地址
http://localhost:3000
```

### 生产构建测试

```bash
# 构建生产版本
npm run build

# 预览生产版本
npm run start
```

### 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🧪 测试策略分层

### 1. 单元测试层（代码质量）

```bash
# ESLint 代码规范检查
npm run lint

# Prettier 格式化检查
npm run format

# TypeScript 类型检查
npx tsc --noEmit
```

### 2. 集成测试层（功能完整性）

- 页面导航测试
- 组件渲染测试
- 交互功能测试

### 3. 端到端测试层（用户体验）

- 完整用户流程测试
- 响应式布局测试
- 无障碍访问测试

### 4. 性能测试层（系统优化）

- Lighthouse 审计
- 加载性能测试
- 资源优化验证

## 📱 具体测试场景

### 基础功能测试

#### 页面导航测试

- [ ] 访问首页 `/` 显示个人介绍
- [ ] 访问经历页 `/experiences` 显示时间线
- [ ] 访问项目页 `/projects` 显示作品网格
- [ ] 访问联系页 `/contact` 显示联系方式
- [ ] 404 页面显示自定义错误页面

#### 内容显示测试

- [ ] 首页：头像、姓名、身份、位置信息正确显示
- [ ] 经历页：时间线布局、技能标签云完整
- [ ] 项目页：项目卡片、技术标签、操作按钮
- [ ] 联系页：邮箱、社交链接、联系表单

### 响应式设计测试

#### 断点测试

```javascript
// Chrome DevTools 设备模拟
// 测试以下断点：
- 移动端: < 768px
- 平板端: 768px - 1024px
- 桌面端: > 1024px
```

#### 布局适配测试

- [ ] 移动端：单列布局，简化导航
- [ ] 平板端：双列布局，中等复杂度
- [ ] 桌面端：多列布局，完整功能

### 交互功能测试

#### 按钮和链接测试

- [ ] 按钮悬停效果正常
- [ ] 链接点击跳转正确
- [ ] 外部链接在新标签页打开
- [ ] 邮箱链接触发邮件客户端

#### 表单交互测试

- [ ] 表单字段获得焦点时高亮
- [ ] 输入验证反馈正常
- [ ] 提交按钮状态正确

### 无障碍访问测试

#### 键盘导航测试

```bash
# 仅使用键盘操作：
- Tab: 前进到下一个可聚焦元素
- Shift+Tab: 后退到上一个可聚焦元素
- Enter: 激活按钮或链接
- Space: 激活复选框或按钮
```

#### 屏幕阅读器测试

- [ ] 所有图片有有意义的 alt 属性
- [ ] 语义化 HTML 标签正确使用
- [ ] ARIA 标签在必要时提供
- [ ] 焦点顺序符合逻辑

#### 对比度测试

- [ ] 文字与背景对比度 ≥ 4.5:1 (WCAG AA)
- [ ] 深色模式下渐变文字仍可读

### 性能优化测试

#### Lighthouse 审计

```bash
# 运行完整审计
npx lighthouse http://localhost:3000 \
  --output html \
  --output-path ./lighthouse-report.html
```

#### 核心指标

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

#### 资源优化测试

- [ ] 图片自动转换为 WebP 格式
- [ ] 移动端加载适当大小的图片
- [ ] CSS 和 JS 文件正确压缩
- [ ] 字体文件优化加载

### 边界条件测试

#### 内容溢出测试

```javascript
// 在浏览器控制台测试：

// 长标题测试
document.querySelector("h1").textContent =
  "这是一个超级超级超级长的标题可能会导致布局问题".repeat(2);

// 多标签测试
const tags = Array.from(
  { length: 30 },
  (_, i) => `<span class="tag">技术标签${i + 1}</span>`
);
document.querySelector(".tags").innerHTML = tags.join("");

// 长单词测试
document.body.innerHTML +=
  '<div style="width: 200px;">supercalifragilisticexpialidocious</div>';
```

#### 主题切换测试

```javascript
// 闪烁测试 (FOUT/FOUC)
-强制刷新页面多次(Cmd + R) -
  检查是否有短暂的白屏 / 黑屏 -
  // 系统主题同步
  切换操作系统主题设置 -
  观察网站是否自动响应;
```

#### 网络条件测试

```javascript
// Chrome DevTools Network 面板：
// Slow 3G: 500kbps, 100ms latency
// 检查页面在慢速网络下的表现
```

## 🔧 调试工具

### 浏览器开发者工具

- **Elements**: 检查 DOM 结构和 CSS
- **Console**: 查看 JavaScript 错误和警告
- **Network**: 监控资源加载和性能
- **Lighthouse**: 生成性能报告

### 无障碍测试工具

- **WAVE**: https://wave.webaim.org/
- **axe DevTools**: Chrome 扩展
- **Lighthouse Accessibility**: 内置审计

### 性能分析工具

- **WebPageTest**: https://www.webpagetest.org/
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Web Vitals**: Chrome 扩展

## 📊 测试报告

### 测试结果记录

```markdown
## 测试会话记录

**测试日期**: YYYY-MM-DD
**测试环境**: 本地开发/生产构建
**测试人员**: [姓名]

### 测试结果汇总

- ✅ 通过: X 个
- ⚠️ 警告: Y 个
- ❌ 失败: Z 个

### 详细结果

| 测试项目   | 状态 | 备注     |
| ---------- | ---- | -------- |
| 页面导航   | ✅   | 正常     |
| 响应式布局 | ✅   | 适配良好 |
| 性能分数   | ⚠️   | 需要优化 |
```

### 问题跟踪

- 使用 GitHub Issues 记录发现的问题
- 为每个问题分配优先级和负责人
- 跟踪问题从发现到解决的完整流程

## 🚀 持续集成

### 自动化测试配置

```yaml
# .github/workflows/test.yml
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npx lighthouse http://localhost:3000
```

## 📚 参考资料

- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
- [Lighthouse Scoring Guide](https://web.dev/performance-scoring/)
- [Next.js Testing Documentation](https://nextjs.org/docs/testing)
- [React Testing Best Practices](https://kentcdodds.com/blog/common-testing-mistakes)

---

_最后更新: 2024-01-15_
