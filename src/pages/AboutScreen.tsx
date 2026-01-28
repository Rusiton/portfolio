import { Trans, useTranslation } from "react-i18next";

import Chip from "@/components/ui/chip";
import { SoftReveal } from "@/components/ui/soft-reveal";
import { Circle } from "lucide-react";

export default function AboutScreen() {
    const { t } = useTranslation();

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
                                        { t('about.title') }
                                    </h1>
                                </SoftReveal>
                            </div>

                            <SoftReveal>
                                <p className="text-md text-muted-foreground mt-4 leading-relaxed">
                                    <Trans 
                                        i18nKey="about.description"
                                        components={{
                                            highlight: <span className='text-primary font-semibold' />
                                        }}
                                    />
                                </p>
                            </SoftReveal>

                            <div className="mt-8">
                                <div className="relative">
                                    <div className="absolute h-full left-[-23px] flex items-center">
                                        <Circle size="13" fill="true" className="text-primary" />
                                    </div>

                                    <SoftReveal>
                                        <h2 className="relative text-xl font-semibold text-foreground flex items-center">
                                            { t('about.currently') }
                                        </h2>
                                    </SoftReveal>
                                </div>

                                <SoftReveal>
                                    <ul className="text-foreground mt-2 flex flex-col gap-3">
                                        <li>
                                            <Trans 
                                                i18nKey="about.computerEngineering"
                                                components={{
                                                    highlight: <span className="font-semibold" />
                                                }}
                                            />
                                        </li>

                                        <li>
                                            <Trans 
                                                i18nKey="about.applying"
                                                components={{
                                                    highlight: <span className="font-semibold" />
                                                }}
                                            />
                                        </li>

                                        <li>
                                            <Trans 
                                                i18nKey="about.working"
                                                components={{
                                                    highlight: <span className="font-semibold" />
                                                }}
                                            />
                                        </li>
                                    </ul>
                                </SoftReveal>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-3 list-none relative">
                                <div className="absolute h-full left-[-23px] flex items-center">
                                    <Circle size="13" fill="true" className="text-primary" />
                                </div>

                                {["cleanCode", "performance", "userFirst", "maintainability"].map(
                                    (item) => (
                                        <li key={item}>
                                            <Chip text={t(`about.chips.${item}`)} />
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