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
    github: "https://github.com/connormk/selfInfo",
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
];
