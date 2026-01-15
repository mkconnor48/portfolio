## ADDED Requirements

### Requirement: Button Interaction
系统 SHALL 在按钮上应用跳动反馈效果。

#### Scenario: Hover effect
- **WHEN** 鼠标悬停在按钮上
- **THEN** 按钮 SHALL 向上产生 4px 的位移
- **AND** 移动过程必须平滑（Spring Animation: stiffness 400, damping 10）

### Requirement: Skill Tag Animation
系统 SHALL 为技能标签提供浮出反馈。

#### Scenario: Tag hover
- **WHEN** 鼠标悬停在技能 Badge 上
- **THEN** 指针 SHALL 保持为标准箭头 (`cursor-default`)
- **AND** 标签 SHALL 向上浮动并增加阴影深度
