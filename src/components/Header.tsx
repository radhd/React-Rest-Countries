import { MoonIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

function Header() {
  const [theme, setTheme] = useState("light");

  const handleThemeSwitcher = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex justify-between px-5 py-6 shadow-md dark:bg-darkBlue lg:px-12">
      <h1 className="font-nunito font-extraBold">Where in the world?</h1>
      <div onClick={handleThemeSwitcher} className="flex space-x-2">
        <MoonIcon className="size-5" />
        <span className="text-sm">Dark Mode</span>
      </div>
    </div>
  );
}

export default Header;
