import { Button } from "./button";

interface ButtonOptions {
    text: string,
    callback: () => void,
}

export default function CallToAction({ text, callback }: ButtonOptions) {
    return (
        <Button className="min-w-56 h-14 text-foreground text-md font-bold hover:-translate-y-2"
            onClick={callback}>
            { text }
        </Button>
    )
}