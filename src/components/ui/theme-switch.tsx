import { useTheme } from "@/providers/ThemeProvider";

import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";

export default function ThemeSwitch(){
    const { theme, setTheme } = useTheme();

    return (
        <Button 
            variant='secondary' 
            size='icon' 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
            <Power />
        </Button>
    )
}