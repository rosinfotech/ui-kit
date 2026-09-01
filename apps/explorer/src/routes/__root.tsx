import { ThemeToggle } from "@explorer/components/ThemeToggle";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Package } from "lucide-react";

export const Route = createRootRoute({
    component: RootLayout,
});

function RootLayout() {
    return (
        <div className="flex min-h-screen">
            <aside className="w-60 shrink-0 border-r border-border">
                <div className="flex h-14 items-center gap-2 border-b border-border px-4 font-semibold">
                    <Package className="size-4 text-primary" />
                    UI Kit Explorer
                </div>
                <nav className="flex flex-col gap-1 p-2">
                    <Link
                        activeOptions={{ exact: true }}
                        activeProps={{ className: "bg-muted" }}
                        className="rounded-md px-3 py-2 text-sm hover:bg-muted"
                        to="/button"
                    >
                        Button
                    </Link>
                </nav>
            </aside>
            <div className="flex min-w-0 flex-1 flex-col">
                <header className="flex h-14 items-center justify-end border-b border-border px-4">
                    <ThemeToggle />
                </header>
                <main className="flex-1 p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
