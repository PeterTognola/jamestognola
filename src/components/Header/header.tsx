import "./header.scss";

type IBlogPostProps = {
    // frontmatter: IFrontmatter;
    // children: ReactNode;
};

interface IMenuItem {
    link: string;
    title: string;
}

const MenuItem = (item: IMenuItem) => {
    return <li><a href={item.link}>{item.title}</a></li>;
}

export const Header = (props: IBlogPostProps) => {
    const items: IMenuItem[] = [
        {title: "Home", link: "/" },
        {title: "Projects", link: "/projects" },
        {title: "Posts", link: "/blog" },
    ];

    return <header>
        <div className={"logo"}>
            <a href="/">
                <span />
            </a>
        </div>

        <nav>
            <ul>
                {items.map((i, k) => <MenuItem {...i} key={k} />)}
            </ul>
        </nav>

        <div className={"icons"}>
            <span />
        </div>
    </header>;
}