import TechChip from "@/components/ui/tech-chip";
import { FadeIn } from "@/components/animations/fade-in";
import { Separator } from "@/components/ui/separator";
import { SiReact, SiTypescript, SiJavascript, SiLaravel, SiTailwindcss, SiFigma, SiMysql, SiShadcnui, SiPhp, SiReactquery, } from "react-icons/si";
import { SlideIn } from "@/components/animations/slide-in";

const tech = {
    frontend: [
        { label: "React", icon: <SiReact />, tooltip: "Frontend library/framework" },
        { label: "React Query", icon: <SiReactquery />, tooltip: "Caching library for React" },
        { label: "TypeScript", icon: <SiTypescript />, tooltip: "Superset language of JavaScript"  },
        { label: "JavaScript", icon: <SiJavascript />, tooltip: "Frontend languaje" },
        { label: "Tailwind CSS", icon: <SiTailwindcss />, tooltip: "CSS framework" },
    ],
    backend: [
        { label: "Laravel", icon: <SiLaravel />, tooltip: "Backend framework" },
        { label: "PHP", icon: <SiPhp />, tooltip: "Backend language" },
    ],
    ui: [
        { label: "shadcn/ui", icon: <SiShadcnui />, tooltip: "Frontend compontent library" },
        { label: "Figma", icon: <SiFigma />, tooltip: "UI Design software" },
    ],
    databases: [
        { label: "MySQL", icon: <SiMysql />, tooltip: "Relational Database" },
    ],
}

export default function StackScreen() {
    return (
        <div className="screen-container flex items-center justify-center">
            <div className="select-none px-4">
                <SlideIn delay={0.1}>
                    <h1 className="text-4xl font-bold text-foreground">
                        My <br />
                        <span className="text-primary">tech stack</span>
                    </h1>
                </SlideIn>

                <Separator className="my-4" />

                <div className="py-6">
                    <div className="flex justify-center flex-wrap gap-8">

                        { Object.entries(tech).map(([key, stack]) =>
                            <div key={key}>
                                <h2 className="mb-4 text-center font-semibold">
                                    {key.toUpperCase()}
                                </h2>
                                <FadeIn delay={0.2 * Object.keys(tech).indexOf(key)} y={100}>
                                    <ul className="flex flex-col gap-2">
                                        { stack.map((t, i) => 
                                            <TechChip key={i} label={t.label} icon={t.icon} tooltip={t.tooltip} />
                                        )}
                                    </ul>
                                </FadeIn>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}