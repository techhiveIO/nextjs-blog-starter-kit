import { NextPage } from 'next';
import React from 'react';
import Highlight from 'react-highlight';
import ReactMarkdown from 'react-markdown';
import { ContentfulService } from '../core/contentful';
import { MetaTags, PageType, RobotsContent } from '../interfaces/meta-tags';
import { BlogPost } from '../interfaces/post';
// import Card from '../shared/components/card.component';
import Layout from '../shared/components/layout.component';
import { BASE_URL } from '../template';

type Props = {
  article: BlogPost;
  suggestedArticles: BlogPost[];
};

// const renderCards = suggestions =>
//   suggestions.map((suggestion, index) => (
//     <Card key={index} info={suggestion} />
//   ));

const CodeBlock = ({ language, value }) => (
  <div className="mb-4 overflow-hidden rounded-lg shadow-md max-md:m-auto">
    <div className="flex items-center justify-between bg-ui-800">
      <div className="flex items-center px-6 py-3">
        <div
          className="w-3 h-3 mr-1 rounded-full"
          style={{ backgroundColor: '#FC605C' }}
        />
        <div
          className="w-3 h-3 mr-1 rounded-full"
          style={{ backgroundColor: '#FDBC40' }}
        />
        <div
          className="w-3 h-3 mr-4 rounded-full"
          style={{ backgroundColor: '#34C749' }}
        />
      </div>
      <div className="px-1 mr-4 text-xs font-medium bg-white rounded-md text-ui-500">
        {language}
      </div>
    </div>

    <Highlight language={'json'} className="px-6 py-4 text-sm bg-ui-600">
      {value}
    </Highlight>
  </div>
);

const PostPage: NextPage<Props> = props => {
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
        <h1 className="mb-2 text-xl font-bold md:text-4xl">
          {props.article.title}
        </h1>
        <div className="author">
          <p className="text-lg">Written by {props.article.author.name}</p>
        </div>
      </header>
      <article>
        <ReactMarkdown
          className="markdown"
          source={props.article.body}
          renderers={{ code: CodeBlock }}
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
