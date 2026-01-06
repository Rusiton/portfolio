import Modal from "./modal";
import { useContactModal } from "@/providers/ContactModalProvider";

import { SiGithub, SiLinkedin } from "react-icons/si";
import { MailIcon, MapPin } from "lucide-react";
import { Separator } from "./separator";
import { Button } from "./button";
import WhatsAppButton from "./whatsapp-button";

export default function ContactModal() {
    const { open, setOpen } = useContactModal();

    return (
        <Modal open={open} close={() => setOpen(false)}>
            <div className="w-full md:w-[500px] lg:w-[800px] max-h-[550px] overflow-y-auto">
                <div className="text-center mb-4">
                    <h2 className="text-xl font-bold mb-1">
                        Let's build your web application
                    </h2>
                    <h3 className="text-md italic">
                        Freelance full-stack development
                    </h3>
                </div>

                <Separator />

                <div className="mt-10 flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col items-center gap-3">
                            <p className="w-full text-center text-sm">
                                ✉️ Contact me via email
                            </p>
                            <a href="mailto:galassosantiago05@gmail.com">
                                <Button className="text-foreground" size='lg'>
                                    <MailIcon /> <p>galassosantiago05@gmail.com</p>
                                </Button>
                            </a>
                        </div>

                        <p className="text-center text-sm"> or </p>

                        <div className=" flex justify-center">
                            <WhatsAppButton />
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-center">
                            Free initial chat · No commitment · Fast Reply
                        </p>

                        <p className="mt-4 flex justify-center items-center gap-2 text-xs">
                            <MapPin /> <p>Based in Argentina · Working remotely worldwide</p>
                        </p>
                    </div>

                    <ul className="flex justify-center gap-4">
                        <li className="flex items-center gap-2">
                            <SiLinkedin className="mx-0.5" /> <a className="text-primary" href="https://www.linkedin.com/in/galassosantiago/" target="_blank">LinkedIn</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <SiGithub className="mx-0.5" /> <a className="text-primary" href="https://github.com/Rusiton" target="_blank">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Modal>
    )
}