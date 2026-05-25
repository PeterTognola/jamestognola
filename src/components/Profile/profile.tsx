import "./profile.scss";
import {getCollection} from "astro:content";

type IBlogPostProps = {};

interface Post {
    date: Date;
    title: string;
    link: string;
}

const ListItem = ({title, link, date}: Post) => {
    return <li><a href={link}>{title}</a></li>;
};

// Server side.
const POSTS =
    (await getCollection('blog'))
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
        .map(p => ({date: p.data.pubDate, title: p.data.title, link: `/blog/${p.id}`}));

export const Profile = (props: IBlogPostProps) => {
    return <div>
        <h2>Profile</h2>
    </div>;
}