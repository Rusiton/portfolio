import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomeButton(){
    const navigate = useNavigate();

    return (
        <Button 
            variant='secondary' 
            size='icon' 
            onClick={() => navigate('/')}
            >
            <Home />
        </Button>
    )
}