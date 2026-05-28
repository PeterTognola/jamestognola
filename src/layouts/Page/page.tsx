import "./page.scss";
import { BaseHead } from '../../components/BaseHead/base-head.tsx';
import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer';
import {RecentPosts} from "../../components/RecentPosts/recent-posts.tsx";
import {Profile} from "../../components/Profile/profile.tsx";
import React from "react";

interface Props {
    children: React.ReactNode[];
    title: string;
    description: string;
    heroImage?: ImageMetadata | undefined;
    site: URL | undefined;
    url: URL;
    generator: string;
    head?: React.ReactNode;
}

export const Page = ({title, description, heroImage, site, url, generator, children, head}: Props) => {
    return <html lang="en">
    <head>
        <BaseHead
            title={title}
            description={description}
            site={site}
            url={url}
            generator={generator}
        />
        {head}
        <style lang="scss">

        </style>
    </head>

    <body>
    <Header/>

    <div className="content">
        <div className="meta">
            <h2>Recent Posts</h2>

            <RecentPosts/>
        </div>

        <div className="inner-content">
            <main>
                <div className="hero-image">
                    {heroImage && <img width={1020} height={510} src={heroImage.src} alt=""/>}
                </div>

                <h1>{title}</h1>

                {children}
            </main>

            <Footer/>
        </div>

        <div className="meta">
            <Profile /> {/* todo this is broken now. */}
        </div>
    </div>
    </body>
    </html>;
}