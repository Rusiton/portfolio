import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";

import MobileNav from "@/components/ui/mobile-nav";
import DesktopNav from "@/components/ui/desktop-nav";

import i18n from "@/utils/i18n";

type RouteParams = {
    lang?: string;
};

const SUPPORTED_LANGS = ["es", "en"] as const;
type SupportedLang = (typeof SUPPORTED_LANGS)[number];

export default function Layout() {
    const { lang } = useParams<RouteParams>();

    useEffect(() => {
        if (lang && SUPPORTED_LANGS.includes(lang as SupportedLang)) {
            i18n.changeLanguage(lang);
            document.documentElement.lang = lang;
        }
  }, [lang]);

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