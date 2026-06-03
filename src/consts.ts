// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type {IMenuItem} from "./components/Header/header.tsx";

export const SITE_TITLE = "James Tognola";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const MENU_ITEMS: IMenuItem[] = [
    {title: "Home", link: "/"},
    {title: "Projects", link: "/projects"},
    {title: "Posts", link: "/blog"},
];

export const LOGO_INITIALS: string = "JT";

export const GITHUB_LINK: string = "https://github.com/petertognola";