import Head from 'next/head';
import React, { Fragment, FunctionComponent } from 'react';
import { MetaTags } from '../../interfaces/meta-tags';

type Props = {
  tags: MetaTags;
};

const Meta: FunctionComponent<Props> = ({ tags }) => {
  return (
    <Fragment>
      <Head>
        <title key="title">{tags.title}</title>

        <meta name="description" key="description" content={tags.description} />

        {/* Begin OpenGraph Tag */}
        <meta property="og:type" key="og_type" content={tags.type} />
        {/* this meta tags helps Facebook appropriately title the page when shared within its social network */}
        <meta property="og:title" key="og_title" content={tags.title} />
        {/* Helps facebook describe the page */}
        <meta
          property="og:description"
          key="og_description"
          content={tags.description}
        />
        {/* The URL of the main page */}
        <meta
          property="og:url"
          key="og_URL"
          content={tags.og_URL ? tags.og_URL : tags.canonical}
        />
        {/* A url of an image for Facebook to use in a preview. */}
        <meta
          property="og:image"
          key="og_image"
          content={tags.og_image ? tags.og_image : tags.image}
        />
        <meta
          property="og:site_name"
          key="og_site_name"
          content={tags.og_site_name ? tags.og_site_name : tags.title}
        />
        {/* End of OpenGraph Tag */}

        {/*Twitter displayed card*/}
        <meta name="twitter:card" content="summary_large_image" />

        {/*this will define the description of the post*/}
        {tags.description ? (
          <meta
            name="twitter:description"
            key="twitter_description"
            content={tags.description}
          />
        ) : null}

        {/* Twitter account */}
        {tags.twitter_site ? (
          <meta
            name="twitter:site"
            key="twitter_site"
            content={tags.twitter_site}
          />
        ) : null}
        {/* Name of Website */}
        {tags.twitter_domain ? (
          <meta
            name="twitter:domain"
            key="twitter_domain"
            content={tags.twitter_domain}
          />
        ) : null}

        {/* Image preview of shared post */}
        {tags.twitter_site ? (
          <meta
            name="twitter:image:src"
            key="twitter_img"
            content={tags.image}
          />
        ) : null}

        {/* End of Twitter Display card */}

        <meta name="robots" content={`${tags.robots}`} />

        {/* The URL of the canonical tags */}
        <link rel="canonical" key="canonical" href={tags.canonical} />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-105976674-6"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-105976674-6');
          `
        }} />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function (d, u, h, s) {
              h = d.getElementsByTagName('head')[0];
              s = d.createElement('script');
              s.async = 1;
              s.src = u + new Date().getTime();
              h.appendChild(s);
              })(document, 'https://grow.clearbitjs.com/api/pixel.js?k=pk_bf733a77257a603226947567cb0af7be&v=');
            `
          }}
        />
        <script
          async
          src="//cdn.embedly.com/widgets/platform.js"
          charSet="UTF-8"
        ></script>
      </Head>
    </Fragment>
  );
};

export default Meta;

// <script type="application/ld+json">
//         {
//             "@context": "http://schema.org",
//             "@type": "BlogPosting",
//             "mainEntityOfPage": {
//                 "@type": "WebPage",
//                 "@id": "https://blog.apideck.com/platform-heroes-github-marketplace"
//             },
//             "headline": "Platform Heroes - GitHub Marketplace - Corey Hobbs",
//             "datePublished": "2018-11-19T13:13:29+01:00",
//             "dateModified": "2018-11-22T07:44:40+01:00",
//             "author": {
//                 "@type": "Person",
//                 "name": "Gertjan De Wilde"
//             },
//             "description": "The Gitub Marketplace is one of the most impressive B2D platform plays. Corey Hobbs shares his insights into their way of work and metrics.",
//             "image": {
//                 "@type": "ImageObject",
//                 "url": "https://images.storychief.com/account_7475/marketplace_c3eeca1a8099bf2ff67e07bf035e3a77_2000.png"
//                             ,
//             "width": 1200,
//                     "height": 628

//         },
//         "publisher": {
//             "@type": "Organization",
//             "name": "Apideck Blog",
//                 "logo": {
//                     "@type": "ImageObject",
//                     "url": "https://images.storychief.com/x94/filters:no_upscale()//account_7475/favicon_23bdac4979a5a03d974199f95d9600d3.png"
//                 }
//             }
//         }
//     </script>
