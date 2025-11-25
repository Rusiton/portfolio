import { Outlet } from "react-router-dom";

import ThemeSwitch from "@/components/ui/theme-switch";
import HeaderNavButton from "@/components/ui/header-nav-button";
import { MobileNav } from "@/components/ui/mobile-nav";
import HomeButton from "@/components/ui/home-button";

export default function Layout() {
    return (
        <div className="w-screen h-screen flex flex-col">
            <MobileNav />

            <header className="hidden md:block p-4">
                <nav className="flex justify-between">
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
                    <div>
                        <HomeButton />
                    </div>
                </nav>
            </header>

            <main className="grow overflow-y-auto">
                <Outlet />
            </main>
        </div>
    )
}