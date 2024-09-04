"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "@/lib/icons";

export default function Theme() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        value="dark"
        className="theme-controller"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />

      <Moon className="swap-off" />
      <Sun className="swap-on" />
    </label>
  );
}
