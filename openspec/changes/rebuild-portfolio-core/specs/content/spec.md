## ADDED Requirements

### Requirement: Structured Personal Information
系统 SHALL 以结构化方式存储和展示个人基础信息。

#### Scenario: Hero data accuracy
- **WHEN** 页面渲染 Hero Section
- **THEN** 必须显示姓名 "MKCONNOR"
- **AND** 必须显示身份 "应届毕业生"
- **AND** 必须显示地理位置 "广州"
- **AND** 必须包含一个简短的自我介绍（Bio）

### Requirement: Experience Timeline
系统 SHALL 展示按时间顺序排列的教育和工作经历。

#### Scenario: Education entry
- **WHEN** 用户查看经历部分
- **THEN** 必须显示学校名称、专业和在校时间
- **AND** 支持显示相关的荣誉或关键课程

#### Scenario: Work/Project experience
- **WHEN** 用户查看经历部分
- **THEN** 必须显示组织名称、职位和职责描述

### Requirement: Skill Taxonomy
系统 SHALL 将技术技能按类别（如：Frontend, Backend, Tools）进行展示。

#### Scenario: Tag cloud grouping
- **WHEN** 展示技能标签
- **THEN** 必须按技术栈分类显示
- **AND** 每个技能必须作为一个独立的 Badge 呈现

### Requirement: Project Showcase
系统 SHALL 展示个人代表作品。

#### Scenario: Project detail card
- **WHEN** 用户浏览作品集
- **THEN** 每个项目必须包含标题、简短描述、使用的技术栈标签
- **AND** 提供跳转到项目源码或在线演示的链接
