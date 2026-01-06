import { useEffect, useRef, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ModalOptions {
    children: ReactNode,
    open: boolean,
    close: () => void,
}

export default function Modal({ children, open, close }: ModalOptions) {
    const modalContainerRef = useRef<HTMLDivElement | null>(null);

    const handleClick = (e: React.MouseEvent) => {
        if (modalContainerRef.current && e.target === modalContainerRef.current) {
            close();
        }
    }
    
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') close();
    }

    useEffect(() => {
        let timeout: number;

        if (open) {
            window.addEventListener('keydown', handleKeyDown);
            modalContainerRef.current?.classList.add('!z-40');
        }

        if (!open) {
            timeout = setTimeout(() => {
                modalContainerRef.current?.classList.remove('!z-40');
                window.removeEventListener('keydown', handleKeyDown);
            }, 150);
        }
        
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [open])

    return (
        <div 
            ref={modalContainerRef} 
            onClick={handleClick}
            className={`absolute w-screen h-screen -z-10 top-0 left-0 p-4 bg-background/50 backdrop-blur-sm flex items-center justify-center`}
            >
            <div 
                className={`relative card p-8 rounded-2xl bg-card transition-all duration-150 ease-in-out 
                ${open ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0'}`}
                >
                <Button 
                    variant='ghost' 
                    size='icon-sm' 
                    onClick={close}
                    className="absolute top-8 right-8"
                    >
                    <X />
                </Button>

                { children }
            </div>
        </div>
    )
}