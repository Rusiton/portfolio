import { useEffect, useState } from "react";

import Modal from "@/components/ui/modal";
import { useContactModal } from "@/providers/ContactModalProvider";

import ProjectCard from "@/components/ui/project-card";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { projects } from "@/assets/json/projects.json";
import Chip from "@/components/ui/chip";
import { FadeIn } from "@/components/animations/fade-in";
import CallToAction from "@/components/ui/call-to-action";

type ProjectType = {
    id: number,
    title: string,
    img?: string,
    firstParagraph: string,
    secondParagraph: string,
    thirdParagraph?: string,
    embed?: string,
    tags?: string[],
    cta: string,
    ctaButton: string,
}

export default function ProjectsScreen() {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [displayedProject, setDisplayedProject] = useState<ProjectType | null>(null);

    const { setOpen } = useContactModal();

    const displayProjectInfo = (id: number) => {
        setOpenModal(true);
        
        const project = projects.find(project => project.id === id);
        setDisplayedProject(project as ProjectType);
    }

    useEffect(() => {
        if (!openModal) setDisplayedProject(null);
    }, [openModal]);

    return (
        <div className="screen-container flex justify-center items-center">

            <Modal open={openModal} close={() => setOpenModal(false)}>
                { displayedProject && 
                    <div className="w-full md:w-[500px] lg:w-[800px] max-h-[550px] overflow-y-auto">
                        { displayedProject.title &&                     
                            <h2 className="text-2xl font-bold">
                                { displayedProject.title }
                            </h2>
                        }

                        <Separator className="my-4" />

                        <div className="flex flex-col gap-4">
                            { displayedProject.firstParagraph &&
                                <p className="text-sm">{ displayedProject.firstParagraph }</p>
                            }

                            { displayedProject.secondParagraph &&
                                <p className="text-sm">{ displayedProject.secondParagraph }</p>
                            }

                            { displayedProject.thirdParagraph &&
                                <p className="text-sm">{ displayedProject.thirdParagraph }</p>
                            }

                            { displayedProject.embed &&
                                <div className="flex justify-center">
                                    <iframe
                                        src={displayedProject.embed.replace('youtube.com', 'youtube-nocookie.com')}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="w-full h-64 rounded-2xl"
                                    />
                                </div>
                            }

                            { displayedProject.tags &&
                                <ul className="flex justify-center flex-wrap gap-4 select-none">
                                    { displayedProject.tags.map(tag => 
                                        <Chip 
                                            key={tag}
                                            text={tag}
                                        />
                                    ) }
                                </ul>
                            }
                            
                            { displayedProject.cta &&
                                <div className="mt-2">
                                    <p className="w-full text-center font-bold underline underline-offset-2">
                                        {displayedProject.cta}
                                    </p>
                                    <div className="mt-4 w-full flex justify-center">
                                        <CallToAction
                                            text={displayedProject.ctaButton}
                                            size="sm"
                                            callback={() => (setOpenModal(false), setOpen(true))}
                                        />
                                    </div>
                                    <p className="mt-4 w-full text-center italic text-xs text-foreground-muted">
                                        Tailored to your business needs
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                }
            </Modal>

            <FadeIn style="w-full md:w-2/3 lg:w-3/5">
                <div className="card rounded-3xl p-10 bg-card select-none">
                    <h1 className="font-semibold text-xl">
                        My Projects
                    </h1>

                    <Separator className="mt-4 mb-8" />

                    <div className="md:px-12">
                        <Carousel opts={{
                            align: "center",
                        }} className="grow">
                            <CarouselContent className="py-4 pl-4">
                                { projects.map((project) =>
                                    <CarouselItem key={project.id} className="basis-90">
                                        <ProjectCard 
                                            project={project} 
                                            callback={() => displayProjectInfo(project.id)} 
                                        /> 
                                    </CarouselItem>
                                )}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </FadeIn>

        </div>
    )
}