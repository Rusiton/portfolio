import { useNavigate } from "react-router-dom";
import { useContactModal } from "@/providers/ContactModalProvider";
import { useTranslation } from "react-i18next";

import CallToAction from "@/components/ui/call-to-action";

import { Reveal } from "@/components/animations/reveal";
import { SlideIn } from "@/components/animations/slide-in";
import { FadeIn } from "@/components/animations/fade-in";

export default function HeaderScreen() {
    const navigate = useNavigate();
    const { setOpen } = useContactModal();

    const { t } = useTranslation();

    return (
        <div className="screen-container flex justify-center items-center">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-3 max-w-[500px]">
                    <Reveal delay={0.2}>
                        <h1 className="font-semibold text-5xl leading-14">
                            { t('header.greeting') } <br />
                            <span className="font-bold">
                                { t('header.im') } <span className="text-primary">Santiago</span>
                            </span>
                        </h1>
                    </Reveal>
                    <SlideIn delay={0.5} x={-20}>
                        <h2 className="text-lg font-semibold">
                            { t('header.subtitle_1') }
                        </h2>
                    </SlideIn>
                    <SlideIn delay={0.8} x={-20}>
                        <h2 className="text-md">
                            { t('header.subtitle_2') }
                        </h2>
                    </SlideIn>
                </div>
                <FadeIn delay={1}>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex items-center gap-4">    
                            <CallToAction 
                                text={t('header.ctaProjects')}
                                size="md"
                                callback={() => navigate('/projects')} 
                            />
                            <CallToAction 
                                text={t('header.ctaContact')}
                                size="sm"
                                callback={() => setOpen(true)} 
                            />
                        </div>

                        <p className="mt-14 text-xs italic">
                            { t('header.lowerText') }
                        </p>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}