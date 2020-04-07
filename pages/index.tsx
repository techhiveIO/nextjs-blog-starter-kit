import React, { FunctionComponent, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { defaultMetaTags } from '../core/constants';
import Layout from '../shared/components/layout.component';
import { ContentfulService } from '../core/contentful';
import { BlogPost } from '../interfaces/post';
import Card from '../shared/components/card.component';
import Paginator from '../shared/components/paginator/paginator.component';
import TagFilters from '../shared/components/tag-filters/tag-filters.component';
import { TWITTER_URL } from '../template'

const calculateRange = length => Array.from({ length }, (v, k) => k + 1);

type Props = {
  entries: BlogPost[];
  tags: { id: string; name: string }[];
  url: any;
  total: number;
  skip: number;
  limit: number;
  page?: number;
};

const cards = entries =>
  entries.map((entry, index) => <Card info={entry} key={index} />);

const IndexPage: NextPage = (props: Props) => {
  const router = useRouter();
  const entries = props.entries.length ? props.entries : [];
  const tags = props.tags || [];
  const total = props.total;

  const limit = props.limit;
  const rangeLimit = Math.ceil(total / limit);
  const range = calculateRange(rangeLimit);

  // const [page, updatePage] = useState(!!props.page ? props.page : 1);
  const [tag, updateTag] = useState('');

  useEffect(() => {
    void router.push({ pathname: '/', query: { tag: tag } });
  }, [tag]);

  const handleTagChosen = tag => {
    // updatePage(1);
    updateTag(tag);
  };

  return (
    <Layout metaTags={defaultMetaTags}>
      <header>
        <h1>Blog</h1>
        <h2>Company Updates, Interviews, Ecosystem Breakdowns & Technology Articles</h2>
        <a className='text-white' href={TWITTER_URL}>Follow Us On Twitter</a>
      </header>
      <div className="container md:px-10">
        <div className="grid-container">
          <div className="blogposts">
            <div className="cards-deck">{cards(entries)}</div>
          </div>
          {/* <div className="sidenav">
            <TagFilters
              tags={tags}
              updatePage={handleTagChosen}
              selectedTagId={tag}
            />
          </div> */}
          {/* <div className="pagination">
            <Paginator
              handlePaginationChange={event => updatePage(event)}
              range={range}
              skip={page}
            />
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

IndexPage.getInitialProps = async ({ query }) => {
  const contentfulService = new ContentfulService();
  let page: number = 1;

  if (query.page) {
    page = parseInt(query.page + '');
  }

  const {
    entries,
    total,
    skip,
    limit
  } = await contentfulService.getBlogPostEntries({
    tag: query.tag ? query.tag.toString() : '',
    skip: (page - 1) * 3,
    limit: 100
  });

  // TODO: need to move outside
  const { tags } = await contentfulService.getAllTags();

  return { page, tags, entries, total, skip, limit };
};

export default IndexPage;
