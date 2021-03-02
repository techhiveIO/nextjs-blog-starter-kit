import React, { FunctionComponent } from 'react';
import Router from 'next/router'
import Link from 'next/link';
import { getHref, getNavigationLink } from '../helpers/helper';
import { title } from 'process';

type Props = {
  info: {
    id: string;
    title: string;
    description: string;
    heroImage: string;
    publishedAt: Date;
    slug: string;
  };
};

const Card: FunctionComponent<Props> = ({ info }) => {
  const cardBGStyles = {
    backgroundImage: `url(${info.heroImage})`
  };

  return (
    <div className="card" onClick={(e) => Router.push('/' + info.slug)}>
      <div className="card__header" style={cardBGStyles} />
      <div className="card__body py-4">
        <h3 className="card__title my-4 text-md">{info.title.substr(0, 25)}{info.title.length > 25 && '..'}</h3>
        <p className="card__text text-sm">{info.description.substr(0, 200)}{info.description.length > 200 && '...'}</p>
      </div>

      <div className="card__footer">
        <Link href="[post]" as={`/${info.slug}`}>
          <a className="card__action">Explore</a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
