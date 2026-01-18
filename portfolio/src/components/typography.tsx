"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// 浮出动画变体
const floatVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export function GradientText({ children, className }: TypographyProps) {
  return (
    <motion.span
      variants={floatVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.1, ease: "easeOut" }}
      className={cn(
        "bg-gradient-to-r from-brand-pink-light via-brand-blue-light to-brand-pink-light bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient bg-gradient-macaron dark:from-brand-pink-dark dark:via-brand-blue-dark dark:to-brand-pink-dark",
        className
      )}
    >
      {children}
    </motion.span>
  );
}

export function Heading1({ children, className }: TypographyProps) {
  return (
    <motion.h1
      variants={floatVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.1, ease: "easeOut" }}
      className={cn(
        "text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight",
        className
      )}
    >
      {children}
    </motion.h1>
  );
}

export function Heading2({ children, className }: TypographyProps) {
  return (
    <motion.h2
      variants={floatVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.1, delay: 0.05, ease: "easeOut" }}
      className={cn(
        "text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 leading-tight",
        className
      )}
    >
      {children}
    </motion.h2>
  );
}

export function Heading3({ children, className }: TypographyProps) {
  return (
    <motion.h3
      variants={floatVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.1, delay: 0.1, ease: "easeOut" }}
      className={cn(
        "text-xl md:text-2xl font-medium text-slate-900 dark:text-slate-100 leading-tight",
        className
      )}
    >
      {children}
    </motion.h3>
  );
}

export function BodyLarge({ children, className }: TypographyProps) {
  return (
    <motion.p
      variants={floatVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.1, delay: 0.15, ease: "easeOut" }}
      className={cn("text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed", className)}
    >
      {children}
    </motion.p>
  );
}

export function Body({ children, className }: TypographyProps) {
  return (
    <motion.p
      variants={floatVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.1, delay: 0.1, ease: "easeOut" }}
      className={cn("text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed", className)}
    >
      {children}
    </motion.p>
  );
}

export function Caption({ children, className }: TypographyProps) {
  return (
    <motion.span
      variants={floatVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.1, delay: 0.2, ease: "easeOut" }}
      className={cn("text-sm text-slate-500 dark:text-slate-500 leading-relaxed", className)}
    >
      {children}
    </motion.span>
  );
}
