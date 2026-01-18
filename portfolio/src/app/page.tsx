"use client";

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
import { motion } from "framer-motion";

// 页面浮出动画变体
const pageFloatVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

// 项目卡片浮出动画变体
const projectFloatVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.div 
      className="space-y-28" 
      variants={pageFloatVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <motion.section 
        className="space-y-8" 
        variants={pageFloatVariants}
      >
        <div className="space-y-4">
          <Heading1>
            我是 <GradientText>MKCONNOR</GradientText>
          </Heading1>
          <motion.div 
            className="flex flex-wrap items-center gap-3 text-slate-500 dark:text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium">
              广东水利电力职业技术学院
            </span>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
              应届毕业生
            </span>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <span className="px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium">
              广州
            </span>
          </motion.div>
        </div>

        <BodyLarge className="max-w-2xl">
          热爱编程和创造的开发者，专注于构建简洁、优雅且高效的 Web 应用。
          目前正在广州寻找前端开发或全栈开发的相关机会。
        </BodyLarge>

        <motion.div 
          className="flex flex-wrap gap-6 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/projects">
            <Button className="px-8 py-3">查看作品集</Button>
          </Link>
          <Link href="/resume">
            <Button variant="secondary" className="px-8 py-3">获取简历</Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="space-y-10" 
        variants={pageFloatVariants}
      >
        <Heading2>经历</Heading2>
        <div className="space-y-8">
          <motion.div 
            className="relative pl-8 border-l-2 border-gradient-to-b from-brand-pink-light to-brand-blue-light dark:from-brand-pink-dark dark:to-brand-blue-dark space-y-4"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <div className="absolute left-[-5px] top-3 h-3 w-3 rounded-full bg-gradient-to-r from-brand-pink-light to-brand-blue-light dark:from-brand-pink-dark dark:to-brand-blue-dark shadow-lg shadow-brand-pink-light/25" />
            <div className="flex justify-between items-start flex-wrap gap-2">
              <Heading3>广东水利电力职业技术学院</Heading3>
              <Caption className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800">2022 - 2025</Caption>
            </div>
            <Body className="text-slate-600 dark:text-slate-300">计算机网络技术 · 大专</Body>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge>应届毕业生</Badge>
              <Badge>前端爱好者</Badge>
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="space-y-8" 
        variants={pageFloatVariants}
      >
        <Heading2>技能栈</Heading2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <Card className="h-full space-y-6 border-gradient-to-r from-pink-100/50 to-blue-100/50 dark:from-pink-900/20 dark:to-blue-900/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-pink-light to-brand-blue-light flex items-center justify-center">
                  <span className="text-white text-sm font-bold">F</span>
                </div>
                <Heading3>Frontend</Heading3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Vue.js</Badge>
                <Badge>HTML5</Badge>
                <Badge>CSS3</Badge>
                <Badge>JavaScript</Badge>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <Card className="h-full space-y-6 border-gradient-to-r from-blue-100/50 to-pink-100/50 dark:from-blue-900/20 dark:to-pink-900/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-blue-light to-brand-pink-light flex items-center justify-center">
                  <span className="text-white text-sm font-bold">T</span>
                </div>
                <Heading3>Tools & Others</Heading3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Git</Badge>
                <Badge>Node.js</Badge>
                <Badge>Figma</Badge>
                <Badge>Vercel</Badge>
                <Badge>Docker</Badge>
                <Badge>npm</Badge>
                <Badge>VS Code</Badge>
                <Badge>Postman</Badge>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="space-y-10" 
        variants={pageFloatVariants}
      >
        <div className="flex justify-between items-end flex-wrap gap-4">
          <Heading2>精选作品</Heading2>
          <Link href="/projects">
            <Button variant="secondary" className="px-6 py-2 text-sm">
              查看全部
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <motion.div
            variants={projectFloatVariants}
            initial="initial"
            animate="animate"
            whileHover={{ y: -12 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <Link href="/projects/personal-portfolio">
              <Card className="group h-full border-gradient-to-r from-brand-pink-light/20 to-brand-blue-light/20 dark:from-brand-pink-dark/20 dark:to-brand-blue-dark/20 hover:from-brand-pink-light/40 hover:to-brand-blue-light/40 dark:hover:from-brand-pink-dark/40 dark:hover:to-brand-blue-dark/40 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <Heading3 className="group-hover:text-brand-blue-light transition-colors duration-300">
                        Personal Portfolio
                      </Heading3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <Caption className="text-green-600 dark:text-green-400">已完成</Caption>
                      </div>
                    </div>
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-pink-light to-brand-blue-light flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      P
                    </motion.div>
                  </div>
                  <Body className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    基于 Next.js 14 和 Tailwind CSS 构建的极简作品集网站。参考 Read.cv
                    风格，支持响应式和暗色模式。
                  </Body>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Next.js</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>Framer Motion</Badge>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>

          <motion.div
            variants={projectFloatVariants}
            initial="initial"
            animate="animate"
            whileHover={{ y: -12 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <Link href="/projects/isat-edge-detection">
              <Card className="group h-full border-gradient-to-r from-brand-blue-light/20 to-brand-pink-light/20 dark:from-brand-blue-dark/20 dark:to-brand-pink-dark/20 hover:from-brand-blue-light/40 hover:to-brand-pink-light/40 dark:hover:from-brand-blue-dark/40 dark:hover:to-brand-pink-dark/40 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <Heading3 className="group-hover:text-brand-pink-light transition-colors duration-300">
                        ISAT 边缘检测增强工具
                      </Heading3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <Caption className="text-green-600 dark:text-green-400">已完成</Caption>
                      </div>
                    </div>
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-blue-light to-brand-pink-light flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      🖼️
                    </motion.div>
                  </div>
                  <Body className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    为开源图像标注工具 ISAT 添加智能边缘检测与自动吸附功能，提升多边形标注精度和效率。
                  </Body>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>PyQt5</Badge>
                    <Badge>OpenCV</Badge>
                    <Badge>计算机视觉</Badge>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>

          <motion.div
            variants={projectFloatVariants}
            initial="initial"
            animate="animate"
            whileHover={{ y: -12 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <Link href="/projects/snake-game">
              <Card className="group h-full border-gradient-to-r from-green-100/50 to-blue-100/50 dark:from-green-900/20 dark:to-blue-900/20 hover:from-green-100/70 hover:to-blue-100/70 dark:hover:from-green-900/40 dark:hover:to-blue-900/40 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <Heading3 className="group-hover:text-green-600 dark:text-green-400 transition-colors duration-300">
                        贪吃蛇游戏
                      </Heading3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <Caption className="text-green-600 dark:text-green-400">已完成</Caption>
                      </div>
                    </div>
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      🐍
                    </motion.div>
                  </div>
                  <Body className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    使用 HTML5 + TypeScript 开发的现代化贪吃蛇游戏，采用 Web Components 架构，支持响应式设计和 PWA 离线使用。
                  </Body>
                  <div className="flex flex-wrap gap-2">
                    <Badge>HTML5</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>CSS3</Badge>
                    <Badge>Web Components</Badge>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="pt-16 border-t border-slate-200/50 dark:border-slate-700/50" 
        variants={pageFloatVariants}
      >
        <div className="flex flex-col items-center text-center space-y-8">
          <Heading2>保持联系</Heading2>
          <BodyLarge className="max-w-2xl">
            目前我正在寻找新的工作机会。如果你对我的作品感兴趣，或者想聊聊技术，欢迎随时联系我。
          </BodyLarge>
          <motion.div 
            className="flex gap-6 flex-wrap justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              href="mailto:3139961932@qq.com"
              className="px-8 py-3"
            >
              发送邮件
            </Button>
            <Button 
              href="https://github.com/mkconnor48" 
              target="_blank" 
              variant="secondary"
              className="px-8 py-3"
            >
              GitHub
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.footer 
        className="pt-24 pb-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Caption className="text-slate-400 dark:text-slate-500">
          © 2026 MKCONNOR. Built with Passion in Guangzhou.
        </Caption>
      </motion.footer>
    </motion.div>
  );
}
