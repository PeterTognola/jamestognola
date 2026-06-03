import type { ILargeProject } from "./projects.tsx";

export const LargeProject = ({ snippet, link, name, technologyKeywords, description, picture }: ILargeProject) => {
    return <li>
        <picture>
            <img src={picture} alt={name} />
        </picture>
        {snippet} @ <a href={link} target={"_blank"}>{name}</a> <em>({technologyKeywords.join(", ")})</em></li>
}