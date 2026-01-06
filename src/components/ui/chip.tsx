interface ChipOptions {
    text: string,
}

export default function Chip({ text }: ChipOptions) {
    return (
        <div 
        className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-lightest-onyx/20 text-foreground shadows text-sm shadow-sm hover:bg-lighter-onyx transition hover:-translate-y-1"
        >
            <span className="text-xs font-bold">{ text }</span>
        </div>
    )
}