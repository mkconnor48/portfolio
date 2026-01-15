## ADDED Requirements

### Requirement: Education and Work Experience Display
网站 SHALL 展示用户的教育和工作经历。

#### Scenario: Timeline layout
- **WHEN** 用户访问经历页面
- **THEN** 经历以时间线形式展示
- **AND** 按时间倒序列出（最新在前）
- **AND** 包含学校/公司名称、职位、时间段

#### Scenario: Experience details
- **WHEN** 用户查看具体经历
- **THEN** 显示详细描述
- **AND** 包含主要职责和成就
- **AND** 使用清晰的排版层次

### Requirement: Skills Tag Cloud
网站 SHALL 展示用户的技术技能标签云，按技术栈分类。

#### Scenario: Categorized skills display
- **WHEN** 用户查看技能部分
- **THEN** 技能按技术栈分组显示
- **AND** 每个技能作为标签展示
- **AND** 标签具有颜色区分和悬停效果

#### Scenario: Skill proficiency indication
- **WHEN** 用户查看技能标签
- **THEN** 标签大小或颜色表示熟练度
- **AND** 提供视觉层次感
