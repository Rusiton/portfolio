import { useState } from "react";
import ContactInfo from "./contact-info";
import ContactModal from "./contact-modal";
import HeaderNavButton from "./header-nav-button";
import HomeButton from "./home-button";
import ThemeSwitch from "./theme-switch";

export default function DesktopNav() {
    const [openContactModal, setOpenContactModal] = useState<boolean>(false);

    return (
        <nav className="hidden md:flex justify-between">
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
            
            <ul className="flex gap-2">
                <li>
                    <ContactInfo />
                    <ContactModal />
                </li>
                <li>
                    <HomeButton />
                </li>
            </ul>
        </nav>
    )
}