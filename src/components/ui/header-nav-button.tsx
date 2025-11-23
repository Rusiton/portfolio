import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ButtonOptions {
    to: string,
    text: string,
}

export default function HeaderNavButton({ text, to } : ButtonOptions) {
    const navigate = useNavigate();

    return (
        <Button 
            variant='secondary' 
            className="min-w-36 text-muted-foreground hover:text-secondary-foreground"
            onClick={() => navigate(to)}>
            { text }
        </Button>
    )
}