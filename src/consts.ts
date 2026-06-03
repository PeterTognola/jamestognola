// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type {IMenuItem} from "./components/Header/header.tsx";
import type {ILargeProject} from "./components/Projects/projects.tsx";

export const SITE_TITLE = "James Tognola";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const MENU_ITEMS: IMenuItem[] = [
    {title: "Home", link: "/"},
    {title: "Projects", link: "/projects"},
    {title: "Posts", link: "/blog"},
];

export const LOGO_INITIALS: string = "JT";

export const GITHUB_LINK: string = "https://github.com/petertognola";

export const PROJECTS: ILargeProject[] = [
    {
        name: "Global Command",
        link: "https://github.com/PeterTognola/global-command/",
        snippet: "Debian based global search and terminal",
        technologyKeywords: ["C++", "React", "Javascript/Typescript"],
        description: "",
    },
    {
        name: "jamestogno.la",
        link: "https://jamestogno.la/",
        snippet: "A clean Astro blog template",
        technologyKeywords: ["Typescript", "Astro"],
        description: "",
    },
    {
        name: "York Prints",
        link: "https://yorkprints.co.uk/",
        snippet: "Personalised Maps and Prints",
        technologyKeywords: ["React SSR", "Typescript", "Puppet", "NodeJs", "C#", "Mongo"],
        description: "",
    },
    {
        name: "loup",
        link: "https://loup.in/",
        snippet: "Privacy focused e-receipt platform ",
        technologyKeywords: ["React Native", "Typescript", "NodeJs", "Express", "Apollo", "Mongo", "RabbitMQ", "TensorFlow"],
        description: "",
    },
    {
        name: "Create Your Business",
        link: "https://createyour.business/",
        snippet: "Yet another free e-commerce platform ",
        technologyKeywords: ["React SSR", "Typescript", "C#", "PostgreSQL"],
        description: "",
    }
];