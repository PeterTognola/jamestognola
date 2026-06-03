import "./projects.scss";

interface Props {
    variant: "slim" | "large"; // todo large is for Projects page.
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
    // todo possibly picture.
}

export const Projects = ({ variant, projects }: Props) => { // todo implement large project.
    return <ul className={"slim-projects"}>
        {projects.map((p, i) => <li key={i}>
            {p.snippet} @ <a href={p.link} target={"_blank"}>{p.name}</a> <em>({p.technologyKeywords.join(", ")})</em>
        </li>)}
    </ul>;
}