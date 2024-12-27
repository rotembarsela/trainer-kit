"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const updateThemeOnServer = async (theme: "dark" | "light") => {
    try {
      const response = await fetch("/api/theme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ theme }),
      });

      if (!response.ok) {
        throw new Error("Failed to update theme on the server");
      }

      await response.json();
    } catch (error) {
      console.error("Error updating theme:", error);
    }
  };

  const toggleTheme = async () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);

    document.documentElement.classList.toggle("dark", newTheme === "dark");

    await updateThemeOnServer(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="hover:text-emerald-700 dark:hover:text-emerald-900 p-2 rounded"
    >
      {isDarkMode ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  );
}
