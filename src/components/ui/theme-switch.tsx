import { useTheme } from "@/providers/ThemeProvider";

import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";

export default function ThemeSwitch(){
    const { theme, setTheme } = useTheme();

    return (
        <Button 
            variant='secondary' 
            size='icon' 
            className={`text-muted-foreground hover:text-secondary-foreground 
                ${ theme === 'dark' && 'bg-linear-to-b from-muted to-card' }`
            }
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
            <Power />
        </Button>
    )
}