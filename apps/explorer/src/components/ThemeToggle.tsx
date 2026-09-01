import { Button } from "@rosinfo.tech/ui-kit";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const STORAGE_KEY = "ui-explorer-theme";

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() =>
        document.documentElement.classList.contains("ui-dark")
    );

    const toggleTheme = () => {
        const nextIsDark = !isDark;
        setIsDark(nextIsDark);
        document.documentElement.classList.toggle("ui-dark", nextIsDark);
        localStorage.setItem(STORAGE_KEY, nextIsDark ? "dark" : "light");
    };

    return (
        <Button
            aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
            iconOnly
            onClick={toggleTheme}
            size="sm"
            variant="default"
        >
            {isDark ? <Sun /> : <Moon />}
        </Button>
    );
};
