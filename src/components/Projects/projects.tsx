import "./projects.scss";
import { SlimProject } from "./slim-project.tsx";
import {LargeProject} from "./large-project.tsx";

interface Props {
    variant?: "slim" | "large";
    projects: ISlimProject[] | ILargeProject[];
}

export type ISlimProject = {
    name: string;
    link: string;
    snippet: string;
    technologyKeywords: string[];
}

export type ILargeProject = ISlimProject & {
    description: string;
    picture: string;
}

export const Projects = ({ variant = "slim", projects }: Props) => {
    return <ul className={`${variant}-project`}>
        {projects.map((p, i) =>
            variant === "slim"
                ? <SlimProject key={i} {...p} />
                : <LargeProject key={i} {...p} />
        )}
    </ul>;
}