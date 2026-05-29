"use client";

import { useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      aria-label={
        theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"
      }
      className="theme-toggle grid size-10 place-items-center rounded-full border border-[#e5e5e5] bg-white text-base shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5"
      onClick={toggleTheme}
      suppressHydrationWarning
      type="button"
    >
      <span aria-hidden="true" suppressHydrationWarning>
        {theme === "dark" ? "☀" : "☾"}
      </span>
    </button>
  );
}
