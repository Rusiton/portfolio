import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

import ThemeSwitch from "./theme-switch"
import HomeButton from "./home-button"
import ContactInfo from "./contact-info"
import ContactModal from "./contact-modal"

const navigation = [
    { href: "/projects", label: "My projects" },
    { href: "/about", label: "Who am I" },
    { href: "/stack", label: "My tech stack" },
];

export default function MobileNav() {

    return (
        <div className="flex items-center justify-between md:hidden">
            <ul className="flex gap-6">
                <li>
                    <ThemeSwitch />
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
                    <SheetHeader>
                        <SheetTitle>Navigation Menu</SheetTitle>
                        <VisuallyHidden>
                            <SheetDescription>Nav menu for mobile</SheetDescription>
                        </VisuallyHidden>
                    </SheetHeader>

                    <nav className="mt-10 p-4 flex flex-col gap-4 text-lg">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className=" px-4 py-3 rounded-xl text-sm text-center text-foreground font-bold hover:text-primary hover:bg-muted transition-colors border border-card/10"
                                >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}
