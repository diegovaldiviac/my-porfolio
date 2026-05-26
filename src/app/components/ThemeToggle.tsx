"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — only render icon after mount
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center rounded-lg p-1.5 text-lg transition-transform hover:scale-110 active:scale-95 text-[var(--text-primary)]"
    >
      <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
    </button>
  );
}
