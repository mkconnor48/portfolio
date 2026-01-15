"use client";

import { Heading1, Body, GradientText } from "@/components/typography";
import { Button, ThemeToggle } from "@/components/ui";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <section className="flex justify-between items-center">
        <div className="space-y-2">
          <Heading1>
            <GradientText>简历预览</GradientText>
          </Heading1>
          <Body className="text-slate-500 dark:text-slate-400">
            广东水利电力职业技术学院 · 应届毕业生 · 计算机网络技术
          </Body>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => window.print()}>
            打印简历
          </Button>
          <Button href="/resume.pdf" target="_blank">
            下载 PDF
          </Button>
        </div>
      </section>

      <div className="aspect-[1/1.414] w-full border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white shadow-inner">
        {/* Placeholder for PDF preview - in a real app this would be a PDF viewer or an iframe */}
        <div className="w-full h-full flex flex-col items-center justify-center space-y-4 text-slate-400 p-12 text-center">
          <div className="w-24 h-24 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-slate-600 dark:text-slate-300">
              PDF 预览正在加载...
            </p>
            <p className="text-sm">
              (请确保 public 目录下存在 resume.pdf 文件)
            </p>
          </div>
          <div className="pt-4 max-w-md mx-auto space-y-6 text-left border-t border-slate-100 dark:border-slate-800 w-full">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                教育背景
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                广东水利电力职业技术学院 · 2022-2025
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                联系方式
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Email: 3139961932@qq.com
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                GitHub: github.com/connormk
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Link href="/">
          <Button variant="secondary">返回首页</Button>
        </Link>
      </div>
    </div>
  );
}
