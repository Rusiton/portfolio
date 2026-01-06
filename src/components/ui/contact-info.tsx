import { Mail } from "lucide-react";
import { Button } from "./button";
import { useContactModal } from "@/providers/ContactModalProvider";

export default function ContactInfo() {
    const { setOpen } = useContactModal();

    return (
        <Button 
            variant='secondary' 
            size='icon' 
            onClick={() => setOpen(true)}
            >
            <Mail />
        </Button>
    )
}