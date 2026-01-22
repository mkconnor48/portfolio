export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  link?: string;
  github?: string;
  status: "completed" | "in-progress" | "planned";
}

export const projects: Project[] = [
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "基于 Next.js 14 和 Tailwind CSS 构建的极简作品集网站。参考 Read.cv 风格，支持响应式和暗色模式。",
    longDescription:
      "这是一个深度参考 Read.cv 视觉风格的个人作品集系统。它不仅展示了基本的个人信息，还集成了磁吸按钮交互、技能标签浮动动画以及在线简历预览功能。采用了最新的 Next.js App Router 架构和 Tailwind CSS 4 预发布版本进行样式构建。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/mkconnor48/selfInfo",
    link: "https://portfolio-five-omega-95.vercel.app/",
    status: "completed",
  },
  {
    id: "ai-chat-system",
    title: "AIChat - 智能AI聊天系统",
    description:
      "基于Spring Boot和React开发的智能AI聊天系统，支持多角色聊天、聊天记录管理、实时消息发送等功能。",
    longDescription:
      `AIChat是一款基于Spring Boot和React开发的智能AI聊天系统，旨在提供流畅、高效的AI对话体验。该系统支持多角色聊天、聊天记录管理、实时消息发送等功能，用户可以根据不同场景选择合适的AI角色进行对话。

核心功能：
- 多角色聊天：支持创建和选择不同的AI角色进行对话
- 聊天记录管理：保存聊天历史，支持删除、清理空聊天记录
- 实时消息发送：支持即时消息发送和接收
- 响应式设计：适配不同设备尺寸，提供良好的移动端体验
- 角色管理：支持创建、编辑、删除AI角色
- 用户认证：完整的用户注册、登录、权限管理系统

技术栈：
- 后端：Spring Boot 3.2.0、Spring Security 3.2.0、MongoDB、Redis、Maven
- 前端：React 18+、Vite 5.0+、React Router 6.0+、Tailwind CSS 3.0+
- 部署：Nginx、Docker`,
    tags: ["Spring Boot", "React", "MongoDB", "Redis", "Docker", "Tailwind CSS", "JWT"],
    github: "https://github.com/mkconnor48/AIChat.git",
    status: "completed",
  },
  {
    id: "ecommerce-dashboard",
    title: "E-commerce Dashboard",
    description:
      "一个功能完整的电商后台管理系统，包含订单管理、库存监控和数据可视化分析。",
    longDescription:
      "该项目旨在解决中小型电商企业的后台管理需求。核心功能包括实时订单处理流、基于 Recharts 的销售数据可视化看板、以及精细化的库存预警系统。前端采用 React + Vite 构建，后端使用 Node.js 提供 RESTful API 支持。",
    tags: ["React", "Recharts", "Node.js", "Tailwind CSS"],
    status: "completed",
  },
  {
    id: "snake-game",
    title: "贪吃蛇游戏",
    description:
      "使用 HTML5 + TypeScript 开发的现代化贪吃蛇游戏，采用 Web Components 架构，支持响应式设计和 PWA 离线使用。",
    longDescription:
      "这是一个基于现代 Web 技术栈开发的贪吃蛇游戏。使用 HTML5 + CSS3 + JavaScript (ES2020+) 作为基础，TypeScript 作为主要开发语言，Vite 作为构建工具。采用 Lit Element 实现 Web Components 组件化开发，状态机模式管理游戏状态。游戏支持跨浏览器运行、响应式设计、移动端触摸操作和 PWA 离线使用，目标达到 60 FPS 的流畅体验。",
    tags: ["HTML5", "TypeScript", "CSS3", "Web Components", "Vite"],
    github: "https://github.com/mkconnor48/贪吃蛇",
    link: "https://mkconnor48-snake-game.netlify.app/",
    status: "completed",
  },
  {
    id: "isat-edge-detection",
    title: "ISAT 边缘检测增强工具",
    description:
      "为开源图像标注工具 ISAT 添加智能边缘检测与自动吸附功能，提升多边形标注精度和效率。",
    longDescription:
      "ISAT (Interactive Segmentation Annotation Tool) 是一个基于 SAM (Segment Anything Model) 的交互式图像分割标注工具。我在此开源项目基础上实现了重要的功能增强：设计并实现了 Alt 键触发的智能边缘吸附功能，解决了用户在创建多边形标注时需要精确点击物体边缘的痛点。技术实现包括完整的边缘检测工具类（支持 Canny、Sobel 算法）、智能缓存机制提升大图像处理性能、最近边缘点查找算法，以及与现有 PyQt5 界面的无缝集成。此外还实现了鼠标中键拖拽图像导航功能。整个项目采用 OpenSpec 工作流进行系统化设计，展示了从需求分析到具体实现的完整工程能力。",
    tags: ["Python", "PyQt5", "OpenCV", "计算机视觉", "图像处理"],
    github: "https://github.com/mkconnor48/ISAT_with_segment_anything.git",
    status: "completed",
  },
];
