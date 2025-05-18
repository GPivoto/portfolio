"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldUseDark = storedTheme === "dark" || (!storedTheme && systemPrefersDark);

    setIsDark(shouldUseDark);

    if (shouldUseDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggleTheme} aria-label="Toggle dark mode">
      {isDark ? (
        <Sun className="text-yellow-500 size-6 cursor-pointer" />
      ) : (
        <Moon className="md:text-gray-100 dark:text-dark text-black size-6 cursor-pointer" />
      )}
    </button>
  );
}
