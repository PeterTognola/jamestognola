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
                <li><a href={"#"}>Test 1</a></li>
                <li><a href={"#"}>Test 1</a></li>
                <li><a href={"#"}>Test 1</a></li>
            </ul>
        </nav>

        <div className={"icons"}>
            <span />
        </div>
    </header>;
}