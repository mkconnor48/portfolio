import {
  Heading1,
  Heading2,
  Body,
  BodyLarge,
  Caption,
  GradientText,
} from "@/components/typography";
import { Card, Badge, Button, ThemeToggle } from "@/components/ui";
import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <section className="space-y-6">
        <Link href="/projects" className="text-sm text-slate-500 hover:text-brand-blue-light transition-colors">
          ← 返回作品集
        </Link>
        <div className="space-y-2">
          <Heading1>
            <GradientText>{project.title}</GradientText>
          </Heading1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <Card className="p-8">
          <div className="space-y-6">
            <Heading2>项目简介</Heading2>
            <BodyLarge>{project.longDescription || project.description}</BodyLarge>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {project.github && (
                <Button href={project.github} target="_blank">
                  GitHub 源码
                </Button>
              )}
              {project.link && (
                <Button variant="secondary" href={project.link} target="_blank">
                  在线演示
                </Button>
              )}
            </div>
          </div>
        </Card>
      </section>

      <footer className="pt-8">
        <Link href="/projects">
          <Button variant="secondary">查看其他作品</Button>
        </Link>
      </footer>
    </div>
  );
}
