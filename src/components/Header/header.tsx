import {SITE_TITLE} from "../../consts.ts";
import "./header.scss";

type IBlogPostProps = {
    // frontmatter: IFrontmatter;
    // children: ReactNode;
};

export const Header = (props: IBlogPostProps) => {
    return <header>

        <div className={"logo"}>
            <span />
        </div>

        <nav>
            <ul>
                <li><a href={"/"}>Landing</a></li>
                <li><a href={"#"}>Projects</a></li>
                <li><a href={"#"}>Posts</a></li>
            </ul>
        </nav>

        <div className={"icons"}>
            <span />
        </div>
    </header>;
}