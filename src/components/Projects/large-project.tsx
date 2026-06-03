import type { ILargeProject } from "./projects.tsx";

export const LargeProject = ({ snippet, link, name, technologyKeywords, description, picture }: ILargeProject) => {
    return <li>
        <a href={link} target={"_blank"}>
            <picture>
                <img src={picture} alt={name}/>
            </picture>
            <h2>{name}</h2>
            <span className={"keywords"}>{technologyKeywords.join(", ")}</span>
            {/*<span className={"snippet"}>{technologyKeywords.join(", ")}</span>*/}
            <p>{description || snippet}</p>
        </a>
    </li>
}