import { Outlet } from "react-router-dom";

import MobileNav from "@/components/ui/mobile-nav";
import DesktopNav from "@/components/ui/desktop-nav";

export default function Layout() {
    return (
        <div className="w-screen h-screen flex flex-col">
            <header className="p-4">
                <MobileNav />
                <DesktopNav />
            </header>

            <main className="grow overflow-y-auto">
                <Outlet />
            </main>
        </div>
    )
}