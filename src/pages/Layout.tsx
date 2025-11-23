import { Outlet } from "react-router-dom";

import ThemeSwitch from "@/components/ui/theme-switch";
import HeaderNavButton from "@/components/ui/header-nav-button";

export default function Layout() {
    return (
        <div className="w-screen h-screen flex flex-col">
            <header className="p-4">
                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <ThemeSwitch />
                        </li>
                        <li>
                            <HeaderNavButton text="My projects" to="/projects" />
                        </li>
                        <li>
                            <HeaderNavButton text="Who am I" to="/about" />
                        </li>
                        <li>
                            <HeaderNavButton text="My tech stack" to="/stack" />
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="grow">
                <Outlet />
            </main>
        </div>
    )
}