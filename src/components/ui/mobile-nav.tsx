import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

import ThemeSwitch from "./theme-switch"
import HomeButton from "./home-button"
import ContactInfo from "./contact-info"
import ContactModal from "./contact-modal"
import LanguageSwitch from "./language-switch"
import { useTranslation } from "react-i18next"

const navigation = [
    { href: "/projects", translationKey: "projects" },
    { href: "/about", translationKey: "about" },
    { href: "/stack", translationKey: "stack" },
];

export default function MobileNav() {
    const { t } = useTranslation();

    return (
        <div className="flex items-center justify-between md:hidden">
            <ul className="flex gap-6">
                <li>
                    <ThemeSwitch />
                </li>
                <li>
                    <LanguageSwitch />
                </li>
                <li>
                    <HomeButton />
                </li>
                <li>
                    <ContactInfo />
                    <ContactModal />
                </li>
            </ul>

            <Sheet>
                <SheetTrigger asChild>
                    <Button 
                        variant="ghost" 
                        className="p-2 rounded-xl hover:bg-accent/30 transition"
                    >
                        <Menu className="w-6 h-6 text-foreground" />
                    </Button>
                </SheetTrigger>

                <SheetContent side="right" className="bg-card border-none">

                    <nav className="mt-10 p-4 flex flex-col gap-4 text-lg">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className=" px-4 py-3 rounded-xl text-sm text-center text-foreground font-bold hover:text-primary hover:bg-muted transition-colors border border-card/10"
                                >
                                { t(`nav.${item.translationKey}`) }
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}
