import { useNavigate } from "react-router-dom";
import { Reveal } from "@/components/animations/reveal";
import CallToAction from "@/components/ui/call-to-action";
import { SlideIn } from "@/components/animations/slide-in";
import { FadeIn } from "@/components/animations/fade-in";

export default function HeaderScreen() {
    const navigate = useNavigate();

    return (
        <div className="screen-container flex justify-center items-center">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-3 max-w-[500px]">
                    <Reveal delay={0.2}>
                        <h1 className="font-semibold text-5xl leading-14">
                            Hey! <br />
                            <span className="font-bold">
                                I&apos;m <span className="text-primary">Santiago</span>
                            </span>
                        </h1>
                    </Reveal>
                    <SlideIn delay={0.5} x={-20}>
                        <h2 className="text-lg font-semibold">
                            I build custom web applications for businesses and organizations.
                        </h2>
                    </SlideIn>
                    <SlideIn delay={0.8} x={-20}>
                        <h2 className="text-md">
                            From internal management systems to interactive platforms, I help turn ideas into scalable web solutions.
                        </h2>
                    </SlideIn>
                </div>
                <FadeIn delay={1}>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex gap-4">    
                            <CallToAction 
                                text="View my projects" 
                                size="md"
                                callback={() => navigate('/projects')} 
                            />
                            <CallToAction 
                                text="Let`s talk" 
                                size="md"
                                callback={() => navigate('/contact')} 
                            />
                        </div>

                        <p className="mt-14 text-xs italic">
                            End-to-end development: design, backend, frontend, and deployment
                        </p>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}