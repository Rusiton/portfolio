import CallToAction from "./call-to-action";

type ProjectType = {
    id: number,
    title: string,
    img?: string,
}

interface CardOptions {
    project: ProjectType,
    callback: () => void,
}

export default function ProjectCard({ project, callback }: CardOptions) {
    return (
        <div className={`relative group card w-72 h-96 p-8 pt-12 rounded-4xl bg-linear-to-b from-muted to-card select-none overflow-hidden transition-transform ease-in-out hover:-translate-y-2 hover:outline-1`}>

            { project.img &&             
                <img 
                    src={`img/${project.img}`} alt="project_img" 
                    className="absolute z-0 inset-0 translate-y-full h-full rounded-3xl object-cover transition-transform duration-300 ease-in-out group-hover:translate-y-[25%] opacity-75"
                />
            }

            <div className="relative z-10 h-full flex flex-col justify-between">
                <h2 className="text-lg font-bold">{project.title}</h2>

                <div className="flex justify-center">
                    <CallToAction 
                        text="See more" 
                        size="md"
                        callback={callback}
                    />
                </div>
            </div>
            
        </div>
    )
}