import "./footer.scss";
import {useState} from "react";

interface IMenuItem {
    link: string;
    title: string;
}

const MenuItem = (item: IMenuItem) => {
    return <li><a href={item.link}>{item.title}</a></li>;
}

export const Footer = () => {
    const items: IMenuItem[] = [
        {title: "Home", link: "/" },
        {title: "Projects", link: "/projects" },
        {title: "Posts", link: "/blog" },
    ];

    const [date,] = useState<Date>(new Date());

    return <footer>
        &copy; {date.getFullYear()} Your name here. All rights reserved.
    </footer>;
}