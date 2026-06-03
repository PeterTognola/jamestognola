import type {ISlimProject} from "./projects.tsx";

export const SlimProject = ({ snippet, link, name, technologyKeywords  }: ISlimProject) => {
    return <li>{snippet} @ <a href={link} target={"_blank"}>{name}</a> <em>({technologyKeywords.join(", ")})</em></li>
}