import Chip from "@/components/ui/chip";
import { SoftReveal } from "@/components/ui/soft-reveal";
import { Circle } from "lucide-react";

export default function AboutScreen() {
    return (
        <div className="screen-container md:flex md:items-center">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
                <div className="p-4">
                    <img 
                        src="img/me.webp" 
                        alt="me" 
                        className="w-32 h-32 rounded-full ring-2 ring-primary object-cover"
                    />
                </div>
                <div className="w-full md:w-2/3 lg:w-3/5 px-6 flex flex-col md:flex-row">
                    <div className="relative w-full select-none">

                        <div className="absolute top-0 left-[-18px] h-full py-4">
                            <div className="h-full border border-primary animate-growY"></div>
                        </div>

                        <div>
                            <div className="relative">
                                <div className="absolute h-full left-[-25px] flex items-center">
                                    <Circle size="16" fill="true" className="text-primary" />
                                </div>

                                <SoftReveal>
                                    <h1 className="text-3xl font-semibold text-foreground flex items-center">
                                        Who am I?
                                    </h1>
                                </SoftReveal>
                            </div>

                            <SoftReveal>
                                <p className="text-md text-muted-foreground mt-4 leading-relaxed">
                                I&apos;m a <span className="text-primary font-semibold">Full-stack Web Developer</span>, currently studying Computer Engineering. I combine my technical background as an Information Technology Technician with hands-experience building full-stack applications. I enjoy designing clean interfaces, creating efficient systems, continuously improving my skills through meaningful projects.
                                </p>
                            </SoftReveal>

                            <div className="mt-8">
                                <div className="relative">
                                    <div className="absolute h-full left-[-23px] flex items-center">
                                        <Circle size="13" fill="true" className="text-primary" />
                                    </div>

                                    <SoftReveal>
                                        <h2 className="relative text-xl font-semibold text-foreground flex items-center">
                                            Currently
                                        </h2>
                                    </SoftReveal>
                                </div>

                                <SoftReveal>
                                    <ul className="text-foreground mt-2 flex flex-col gap-3">
                                        <li>
                                            • Studying <span className="font-semibold">Computer Engineering</span>, where I deepen my understanding of 
                                            algorithms, systems, and software architecture.
                                        </li>

                                        <li>
                                            • Applying my background as an <span className="font-semibold">IT Technician</span> to build 
                                            real, full-stack projects and strengthen both my backend and frontend skills.
                                        </li>

                                        <li>
                                            • Expanding my experience with Laravel, React and UI/UX principles while 
                                            focusing on clean and maintainable development practices.
                                        </li>
                                    </ul>
                                </SoftReveal>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-3 list-none">
                            {["Clean code", "Performance", "User-first design", "Maintainability"].map(
                                (item) => (
                                    <li key={item}>
                                        <Chip text={item} />
                                    </li>
                                )
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}