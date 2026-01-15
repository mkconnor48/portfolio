import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: TypographyProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-brand-pink-light to-brand-blue-light dark:from-brand-pink-dark dark:to-brand-blue-dark bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Heading1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function Heading2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Heading3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        "text-lg font-medium text-slate-900 dark:text-slate-100",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function BodyLarge({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-lg text-slate-700 dark:text-slate-300", className)}>
      {children}
    </p>
  );
}

export function Body({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-base text-slate-600 dark:text-slate-400", className)}>
      {children}
    </p>
  );
}

export function Caption({ children, className }: TypographyProps) {
  return (
    <span
      className={cn("text-sm text-slate-500 dark:text-slate-500", className)}
    >
      {children}
    </span>
  );
}
