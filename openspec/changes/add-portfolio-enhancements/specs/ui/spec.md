## ADDED Requirements

### Requirement: Magnetic Interaction
系统 SHALL 在核心行动按钮上应用磁吸效果。

#### Scenario: Magnetic effect
- **WHEN** 鼠标靠近按钮（半径 100px 内）
- **THEN** 按钮 SHALL 向鼠标位置产生最大 20px 的偏移
- **AND** 移动过程必须平滑（Spring Animation）

### Requirement: Skill Tag Animation
系统 SHALL 为技能标签提供浮出反馈。

#### Scenario: Tag hover
- **WHEN** 鼠标悬停在技能 Badge 上
- **THEN** 指针 SHALL 保持为标准箭头 (`cursor-default`)
- **AND** 标签 SHALL 向上浮动并增加阴影深度
