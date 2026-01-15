## ADDED Requirements

### Requirement: Personal Information Display
网站 SHALL 展示用户的个人信息，包括姓名、身份和位置。

#### Scenario: Basic info display
- **WHEN** 用户访问网站首页
- **THEN** 显示 "MKCONNOR" 作为姓名
- **AND** 显示 "应届毕业生" 作为身份
- **AND** 显示 "广州" 作为位置

#### Scenario: Hero section layout
- **WHEN** 用户访问首页
- **THEN** 个人信息以 Hero 区形式展示
- **AND** 使用大字体突出显示姓名
- **AND** 包含简短的个人介绍

### Requirement: Profile Photo
网站 SHALL 包含个人头像展示。

#### Scenario: Avatar display
- **WHEN** 用户查看个人信息
- **THEN** 显示圆形头像图片
- **AND** 头像具有适当的尺寸和边框样式
