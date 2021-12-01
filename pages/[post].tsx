import { MetaTags, PageType, RobotsContent } from '../interfaces/meta-tags';

import { BASE_URL } from '../template';
import { BlogPost } from '../interfaces/post';
import Card from '../shared/components/card.component';
import { ContentfulService } from '../core/contentful';
import Layout from '../shared/components/layout.component';
import { NextPage } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  article: BlogPost;
  suggestedArticles: BlogPost[];
};

const renderCards = suggestions =>
  suggestions.map((suggestion, index) => (
    <Card key={index} info={suggestion} />
  ));

const PostPage: NextPage = (props: Props) => {
  if (!props.article) return <p>Not found</p>;

  const postMetaTags: MetaTags = {
    canonical: BASE_URL + props.article.slug,
    description: `${props.article.description}`,
    // contentful does not set the http or https before an image link, so we need to add it ourselves
    image: `https:${props.article.heroImage.url}`,
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `${props.article.title}`,
    type: PageType.article
  };

  return (
    <Layout metaTags={postMetaTags}>
      <header className="post">
        <h1 className="md:text-4xl sm:text-xl">{props.article.title}</h1>
        <div className="author">
          <p>Written by {props.article.author.name}</p>
        </div>
      </header>
      <article>
        <ReactMarkdown
          className="markdown"
          children={props.article.body}
          components={{
            a: ({ node, ...props }: any) => {
              const isYouTubeLink = props.href.includes('youtube');

              return (
                <a
                  {...props}
                  className={isYouTubeLink ? 'embedly-card' : ''}
                  data-card-embed={isYouTubeLink}
                />
              );
            }
          }}
        />
      </article>
      {/* <div className="suggestions">{renderCards(props.suggestedArticles)}</div> */}
    </Layout>
  );
};

PostPage.getInitialProps = async ({ query, res }) => {
  const contentfulService = new ContentfulService();
  let suggestedArticles = [];

  const { post } = query;
  const article = await contentfulService.getPostBySlug(post);

  if (article) {
    const tags = article.tags ? article.tags.map(tag => tag.sys.id) : [];

    let suggestedArticles = await contentfulService.fetchSuggestions(
      tags,
      article.slug
    );
  } else {
    if (res) res.statusCode = 404;
  }

  return { article, suggestedArticles };
};

export default PostPage;
