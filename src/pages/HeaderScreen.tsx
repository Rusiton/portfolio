import CallToAction from "@/components/ui/call-to-action";
import { useNavigate } from "react-router-dom";

export default function HeaderScreen() {
    const navigate = useNavigate();

    return (
        <div className="screen-container flex justify-center items-center">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold text-5xl leading-14">
                        Hey! <br />
                        <span className="font-bold">
                            I&apos;m <span className="text-primary">Santiago</span>
                        </span>
                    </h1>
                    <h2 className="text-muted-foreground text-3xl">
                        Fullstack Web Developer
                    </h2>
                </div>
                <div className="flex justify-center">
                    <CallToAction 
                        text="Check my creations" 
                        callback={() => navigate('/projects')} />
                </div>
            </div>
        </div>
    )
}