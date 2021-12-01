import Link from 'next/link';
import React, { FunctionComponent } from 'react';

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
    <Link href={`/${info.slug}`}>
      <a className="mx-4 ease-in-out transform card hover:no-underline sm:mx-0 ">
        <div className="card__header" style={cardBGStyles} />
        <div className="py-4 card__body">
          <h3 className="my-2 font-bold card__title text-md">
            {info.title.substr(0, 25)}
            {info.title.length > 25 && '..'}
          </h3>
          <p className="text-sm card__text h-24">
            {info.description.substr(0, 190)}
            {info.description.length > 190 && '...'}
          </p>
        </div>

        <div className="card__footer">
          <a
            href=""
            className="text-base font-semibold text-ui-400 hover:no-underline hover:text-ui-300 card__action"
          >
            Read full story
          </a>
        </div>
      </a>
    </Link>
  );
};

export default Card;
