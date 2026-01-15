import {
  Heading1,
  Heading2,
  Heading3,
  BodyLarge,
  Body,
  Caption,
  GradientText,
} from "@/components/typography";
import { Card, Button, Badge, ThemeToggle } from "@/components/ui";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-22">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Heading1>
            我是 <GradientText>MKCONNOR</GradientText>
          </Heading1>
          <div className="flex flex-wrap items-center gap-2 text-slate-500 dark:text-slate-400">
            <span>广东水利电力职业技术学院</span>
            <span>·</span>
            <span>应届毕业生</span>
            <span>·</span>
            <span>广州</span>
          </div>
        </div>

        <BodyLarge className="max-w-xl">
          热爱编程和创造的开发者，专注于构建简洁、优雅且高效的 Web 应用。
          目前正在广州寻找前端开发或全栈开发的相关机会。
        </BodyLarge>

        <div className="flex flex-wrap gap-4">
          <Link href="/projects">
            <Button>查看作品集</Button>
          </Link>
          <Link href="/resume">
            <Button variant="secondary">获取简历</Button>
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-8">
        <Heading2>经历</Heading2>
        <div className="space-y-6">
          <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800 space-y-2">
            <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-brand-blue-light" />
            <div className="flex justify-between items-start">
              <Heading3>广东水利电力职业技术学院</Heading3>
              <Caption>2022 - 2025</Caption>
            </div>
            <Body>计算机网络技术 · 大专</Body>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge>应届毕业生</Badge>
              <Badge>前端爱好者</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <Heading2>技能栈</Heading2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="space-y-4">
            <Heading3>Frontend</Heading3>
            <div className="flex flex-wrap gap-2">
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>Vue.js</Badge>
            </div>
          </Card>
          <Card className="space-y-4">
            <Heading3>Tools & Others</Heading3>
            <div className="flex flex-wrap gap-2">
              <Badge>Git</Badge>
              <Badge>Node.js</Badge>
              <Badge>Figma</Badge>
              <Badge>Vercel</Badge>
              <Badge>Docker</Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <Heading2>精选作品</Heading2>
          <Link href="/projects">
            <Button variant="secondary" className="px-4 py-1.5 text-xs">
              查看全部
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <Link href="/projects/personal-portfolio">
            <Card className="group hover:border-brand-blue-light/50 transition-colors">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <Heading3 className="group-hover:text-brand-blue-light transition-colors">
                    Personal Portfolio
                  </Heading3>
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                <Body>
                  基于 Next.js 14 和 Tailwind CSS 构建的极简作品集网站。参考 Read.cv
                  风格，支持响应式和暗色模式。
                </Body>
                <div className="flex flex-wrap gap-2">
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/projects/ecommerce-dashboard">
            <Card className="group hover:border-brand-pink-light/50 transition-colors">
              <div className="space-y-4">
                <Heading3 className="group-hover:text-brand-pink-light transition-colors">
                  E-commerce Dashboard
                </Heading3>
                <Body>
                  一个功能完整的电商后台管理系统，包含订单管理、库存监控和数据可视化分析。
                </Body>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Recharts</Badge>
                  <Badge>Node.js</Badge>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pt-12 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col items-center text-center space-y-6">
          <Heading2>保持联系</Heading2>
          <Body>
            目前我正在寻找新的工作机会。如果你对我的作品感兴趣，或者想聊聊技术，欢迎随时联系我。
          </Body>
          <div className="flex gap-4">
            <Button href="mailto:3139961932@qq.com">
              发送邮件
            </Button>
            <Button href="https://github.com/connormk" target="_blank" variant="secondary">
              GitHub
            </Button>
          </div>
        </div>
      </section>

      <footer className="pt-24 pb-12 text-center">
        <Caption>© 2026 MKCONNOR. Built with Passion in Guangzhou.</Caption>
      </footer>
    </div>
  );
}
