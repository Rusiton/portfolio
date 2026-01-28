import TechChip from "@/components/ui/tech-chip";
import { FadeIn } from "@/components/animations/fade-in";
import { Separator } from "@/components/ui/separator";
import { SiReact, SiTypescript, SiJavascript, SiLaravel, SiTailwindcss, SiFigma, SiMysql, SiShadcnui, SiPhp, } from "react-icons/si";
import { SlideIn } from "@/components/animations/slide-in";
import { Trans, useTranslation } from "react-i18next";

const tech = {
    frontend: [
        { label: "JavaScript", icon: <SiJavascript />, tooltipTranslationKey: "javascript" },
        { label: "TypeScript", icon: <SiTypescript />, tooltipTranslationKey: "typescript" },
        { label: "React", icon: <SiReact />, tooltipTranslationKey: "react" },
        { label: "Tailwind CSS", icon: <SiTailwindcss />, tooltipTranslationKey: "tailwind" },
    ],
    backend: [
        { label: "PHP", icon: <SiPhp />, tooltipTranslationKey: "php" },
        { label: "Laravel", icon: <SiLaravel />, tooltipTranslationKey: "laravel" },
    ],
    ui: [
        { label: "Figma", icon: <SiFigma />, tooltipTranslationKey: "figma" },
        { label: "shadcn/ui", icon: <SiShadcnui />, tooltipTranslationKey: "shadcn" },
    ],
    databases: [
        { label: "MySQL", icon: <SiMysql />, tooltipTranslationKey: "mysql" },
    ],
}

export default function StackScreen() {
    const { t } = useTranslation();

    return (
        <div className="screen-container flex items-center justify-center">
            <div className="select-none px-4">
                <SlideIn delay={0.1}>
                    <h1 className="text-4xl font-bold text-foreground">
                        <Trans 
                            i18nKey="stack.title"
                            components={{
                                br: <br />,
                                highlight: <span className="text-primary" />
                            }}
                        />
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
                                        { stack.map((tech, i) => 
                                            <TechChip key={i} label={tech.label} icon={tech.icon} tooltip={ t(`stack.tech.${key}.${tech.tooltipTranslationKey}`) } />
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