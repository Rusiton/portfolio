import { Button } from "./button";

interface ButtonOptions {
    text: string,
    size?: 'sm' | 'md' | 'lg',
    callback: () => void,
}

export default function CallToAction({ text, size = 'lg', callback }: ButtonOptions) {
    return (
        <Button className={`
            ${ size === 'lg'
                ? 'min-w-56 h-14 text-md'
                : size === 'md' 
                    ? 'min-w-48 h-12 text-sm'
                    : 'min-w-34 h-10 text-sm'
            } 
             text-foreground  font-bold hover:-translate-y-2` }
            onClick={callback}>
            { text }
        </Button>
    )
}