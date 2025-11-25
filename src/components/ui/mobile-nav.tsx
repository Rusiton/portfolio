import { Mail, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

import ThemeSwitch from "./theme-switch"
import HomeButton from "./home-button"
import { SiGithub, SiLinkedin } from "react-icons/si"

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

                    <SheetFooter>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-semibold">
                                Contact me!
                            </h3>

                            <p className="flex items-center gap-2">
                                <Mail size={12} />
                                <a
                                    href="mailto:galassosantiago05@gmail.com"
                                    target="_blank"
                                    className="hover:underline hover:text-primary"
                                >
                                    galassosantiago05@gmail.com
                                </a>
                            </p>
                            <p className="flex items-center gap-2">
                                <SiGithub size={12} />
                                <a href="https://github.com/Rusiton"
                                    target="_blank"
                                    className="hover:underline hover:text-primary"
                                >
                                    GitHub
                                </a>
                            </p>
                            <p className="flex items-center gap-2">
                                <SiLinkedin />
                                <a
                                    href="https://www.linkedin.com/in/galassosantiago/"
                                    target="_blank"
                                    className="hover:underline hover:text-primary"
                                >
                                    LinkedIn
                                </a>
                            </p>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}
