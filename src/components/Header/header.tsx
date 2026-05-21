import {SITE_TITLE} from "../../consts.ts";
import "./header.scss";

type IBlogPostProps = {
    // frontmatter: IFrontmatter;
    // children: ReactNode;
};

export const Header = (props: IBlogPostProps) => {
    return <header>

        <div className={"logo"}>
            <a href="/">
                <span />
            </a>
        </div>

        <nav>
            <ul>
                <li><a href={"/"}>Landing</a></li>
                <li><a href={"/projects"}>Projects</a></li>
                <li><a href={"/blog"}>Posts</a></li>
            </ul>
        </nav>

        <div className={"icons"}>
            <span />
        </div>
    </header>;
}