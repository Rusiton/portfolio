export default function WhatsAppButton() {
    const phoneNumber = "5491139277696"; // reemplazá por tu número real
    const message = "Hi Santiago! I saw your portfolio and I'd like to talk about a web project.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
                w-fit flex items-center justify-center gap-2
                px-5 py-3
                rounded-full
                bg-card hover:bg-secondary
                border border-secondary
                text-[12px] font-medium
                transition hover:text-green-400
            "
            >
            {/* Icon */}
            <svg
                className="w-5 h-5"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden="true"
            >
                <path d="M16.001 2.003c-7.73 0-14 6.27-14 14 0 2.47.65 4.87 1.89 6.99L2 30l7.2-1.89c2.04 1.11 4.33 1.69 6.8 1.69 7.73 0 14-6.27 14-14s-6.27-14-13.999-14zm0 25.398c-2.22 0-4.39-.59-6.28-1.7l-.45-.26-4.27 1.12 1.14-4.15-.29-.48a11.36 11.36 0 01-1.73-6.07c0-6.29 5.12-11.41 11.41-11.41 6.29 0 11.41 5.12 11.41 11.41 0 6.29-5.12 11.41-11.41 11.41zm6.33-8.41c-.35-.18-2.08-1.03-2.4-1.15-.32-.12-.55-.18-.78.18-.23.35-.9 1.15-1.1 1.38-.2.23-.4.26-.75.09-.35-.18-1.49-.55-2.84-1.75-1.05-.93-1.75-2.08-1.95-2.43-.2-.35-.02-.54.16-.71.16-.16.35-.4.52-.6.17-.2.23-.35.35-.58.12-.23.06-.44-.03-.62-.09-.18-.78-1.87-1.07-2.56-.28-.68-.56-.59-.78-.6h-.66c-.23 0-.62.09-.95.44-.33.35-1.25 1.22-1.25 2.97 0 1.75 1.28 3.45 1.46 3.69.18.23 2.52 3.85 6.1 5.4.85.37 1.51.59 2.03.76.85.27 1.63.23 2.24.14.68-.1 2.08-.85 2.38-1.67.29-.82.29-1.52.2-1.67-.09-.15-.32-.24-.66-.41z" />
            </svg>

            <span>Message me on WhatsApp</span>
        </a>
    );
};