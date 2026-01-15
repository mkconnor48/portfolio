import {
  Heading1,
  Heading2,
  Body,
  Caption,
  GradientText,
} from "@/components/typography";
import { Card, Badge, Button, ThemeToggle } from "@/components/ui";
import { projects } from "@/data/projects";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <section className="space-y-4">
        <Heading1>
          <GradientText>作品集</GradientText>
        </Heading1>
        <Body className="text-slate-500 dark:text-slate-400">
          这里展示了我参与过的部分项目，涵盖了前端开发、全栈应用和工具类插件。
        </Body>
      </section>

      <section className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <Card className="group hover:border-brand-blue-light/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <Heading2 className="text-xl group-hover:text-brand-blue-light transition-colors">
                    {project.title}
                  </Heading2>
                  <div
                    className={cn(
                      "h-2 w-2 rounded-full",
                      project.status === "completed"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    )}
                  />
                </div>
                <Body>{project.description}</Body>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </section>

      <div className="pt-8">
        <Link href="/">
          <Button variant="secondary">返回首页</Button>
        </Link>
      </div>
    </div>
  );
}
