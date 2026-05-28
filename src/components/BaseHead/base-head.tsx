import '../../styles/global.scss';
import type { ImageMetadata } from 'astro';
import FallbackImage from '../../assets/blog-placeholder-1.jpg';
import { SITE_TITLE } from '../../consts';

interface Props {
    title: string;
    description: string;
    image?: ImageMetadata;
    site: URL | undefined;
    url: URL;
    generator: string;
}

export const BaseHead = ({ title, description, site, url, generator, image = FallbackImage }: Props) => {
    const canonicalURL = new URL(url.pathname, site);

    return <>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="sitemap" href="/sitemap-index.xml" />
        <link
            rel="alternate"
            type="application/rss+xml"
            title={SITE_TITLE}
            href={new URL('rss.xml', site).toString()}
        />
        <meta name="generator" content={generator} />

        {/*<Font cssVariable="--font-atkinson" preload />*/}

        <link rel="canonical" href={canonicalURL.toString()} />


        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url.toString()} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={new URL(image.src, url).toString()} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url.toString()} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={new URL(image.src, url).toString()} />
    </>
}