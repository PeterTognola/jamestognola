import "./recent-posts.scss";
import {getCollection} from "astro:content";

type IBlogPostProps = {};

interface Post {
    date: Date;
    title: string;
    link: string;
}

const ListItem = ({title, link, date}: Post) => {
    return <li key={link}>{title}</li>;
};

// Server side.
const POSTS =
    (await getCollection('blog'))
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
        .map(p => ({date: p.data.pubDate, title: p.data.title, link: p.id}));

export const RecentPosts = (props: IBlogPostProps) => {
    return <ul className="blog-posts">
        {POSTS.map((post) => <ListItem {...post} />)}
    </ul>;
}