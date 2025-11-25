import { AtSign, Mail } from "lucide-react";
import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function ContactInfo() {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant='secondary'
                    size='icon'
                >
                    <AtSign />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <div className="flex flex-col gap-1">
                    <p className="flex items-center gap-2">
                        <Mail size={12} />
                        <a
                            href="mailto:galassosantiago05@gmail.com"
                            target="_blank"
                            className="hover:underline hover:text-primary"
                        >
                            galassosantiago05@gmail.com
                        </a>
                    </p>
                    <p className="flex items-center gap-2">
                        <SiGithub size={12} />
                        <a href="https://github.com/Rusiton"
                            target="_blank"
                            className="hover:underline hover:text-primary"
                        >
                            GitHub
                        </a>
                    </p>
                    <p className="flex items-center gap-2">
                        <SiLinkedin />
                        <a
                            href="https://www.linkedin.com/in/galassosantiago/"
                            target="_blank"
                            className="hover:underline hover:text-primary"
                        >
                            LinkedIn
                        </a>
                    </p>
                </div>
            </TooltipContent>
        </Tooltip>
    )
}