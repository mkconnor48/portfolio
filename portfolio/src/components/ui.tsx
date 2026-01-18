"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

// 浮出动画变体
const floatVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// 按钮浮出动画变体
const buttonFloatVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <motion.div
      variants={floatVariants}
      initial="initial"
      animate="animate"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className={cn(
        "rounded-xl bg-white dark:bg-slate-900 p-6 shadow-soft border border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300/50 dark:hover:border-slate-700/50 backdrop-blur-sm transition-all duration-100 hover:shadow-lg",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <motion.span
      variants={floatVariants}
      initial="initial"
      animate="animate"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer shadow-sm hover:shadow-md transition-all duration-100 border border-slate-200/30 dark:border-slate-600/30",
        className
      )}
      style={{ cursor: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M5 12H19M19 12L12 5M19 12L12 19\' stroke=\'%2364748b\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E") 12 12, auto' }}
    >
      {children}
    </motion.span>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  target?: string;
}

export function Button({
  children,
  variant = "primary",
  className,
  onClick,
  disabled = false,
  href,
  target,
}: ButtonProps) {
  const baseClasses =
    "px-8 py-3 rounded-full font-medium transition-all duration-300 text-sm inline-flex items-center justify-center relative overflow-hidden";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-brand-pink-light to-brand-blue-light text-white hover:shadow-xl hover:shadow-brand-pink-light/25",
    secondary:
      "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 border border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-slate-300/50 dark:hover:border-slate-600/50 hover:shadow-lg",
  };

  const content = (
    <motion.button
      variants={buttonFloatVariants}
      initial="initial"
      animate="animate"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.05, ease: "easeOut" }}
      className={cn(
        baseClasses,
        variantClasses[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return content;
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-3 w-12 h-12 rounded-full border border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm" />
    );
  }

  return (
    <motion.button
      variants={floatVariants}
      initial="initial"
      animate="animate"
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.05, ease: "easeOut" }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-3 rounded-full border border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-all duration-50 shadow-sm hover:shadow-lg"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <Sun className="h-6 w-6" />
        ) : (
          <Moon className="h-6 w-6" />
        )}
      </motion.div>
    </motion.button>
  );
}
