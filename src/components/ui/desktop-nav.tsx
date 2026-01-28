import { useTranslation } from "react-i18next";
import ContactInfo from "./contact-info";
import ContactModal from "./contact-modal";
import HeaderNavButton from "./header-nav-button";
import HomeButton from "./home-button";
import LanguageSwitch from "./language-switch";
import ThemeSwitch from "./theme-switch";

export default function DesktopNav() {
    const { t } = useTranslation();

    return (
        <nav className="hidden md:flex justify-between">
            <ul className="flex gap-6">
                <li>
                    <ThemeSwitch />
                </li>
                <li>
                    <LanguageSwitch />
                </li>
                <li>
                    <HeaderNavButton text={ t('nav.projects') } to="/projects" />
                </li>
                <li>
                    <HeaderNavButton text={ t('nav.about') } to="/about" />
                </li>
                <li>
                    <HeaderNavButton text={ t('nav.stack') } to="/stack" />
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