import i18n from "@/utils/i18n";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LanguageSwitch(){
    const [langFlag, setLangFlag] = useState(i18n.language === 'en' ? '🇬🇧' : '🇪🇸')

    const changeLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'es' : 'en';

        i18n.changeLanguage(newLanguage);
        setLangFlag(newLanguage === 'en' ? '🇬🇧' : '🇪🇸');
    }

    return (
        <Button 
            variant='secondary' 
            size='icon' 
            onClick={() => changeLanguage()}
            >
            { langFlag }
        </Button>
    )
}