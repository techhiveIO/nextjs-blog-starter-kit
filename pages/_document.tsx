import React, { Fragment } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import * as snippet from '@segment/snippet'

type Props = {
  isProduction: boolean;
};
export default class extends Document<Props> {
  static async getInitialProps(ctx) {
    const isProduction = process.env.NODE_ENV.toLowerCase() === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isProduction };
  }

  renderSegmentSnippet () {
    const opts = {
      apiKey: 'rIExQ9Ulg8mAqZKNWGJH6yShQg2F1usQ',
      page: false // Set this to `false` if you want to manually fire `analytics.page()` from within your pages.
    }

    if (process.env.NODE_ENV.toLowerCase() === 'production') {
      return snippet.max(opts)
    }

    return snippet.min(opts)
  }

  render() {
    const language = 'en';
    const { isProduction } = this.props;

    return (
      <html lang={language}>
        <Head>
          {/*Global meta tags*/}
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <base href="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel='icon' href='/static/favicon.ico' />

          <script src="https://config.metomic.io/config.js?id=prj:97d085e6-af9d-4990-8fa2-6fbd04940e49" />
          <script src="https://consent-manager.metomic.io/embed.js" />

          {/* {isProduction && ( */}
            <script
              dangerouslySetInnerHTML={{ __html: this.renderSegmentSnippet() }}
            />
          {/* )} */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
