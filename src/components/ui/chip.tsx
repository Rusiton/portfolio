interface ChipOptions {
    text: string,
}

export default function Chip({ text }: ChipOptions) {
    return (
        <li className="py-2 px-4 rounded-full bg-muted shadows grid place-content-center transition-all hover:-translate-y-1 hover:opacity-90">
            <span className="text-sm">{ text }</span>
        </li>
    )
}