import React, { Fragment } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import * as snippet from '@segment/snippet'
import { FAVICON, SEGMENT_API_KEY, METOMIC_PROJECT_ID } from '../template'

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
      apiKey: SEGMENT_API_KEY,
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

          <link rel='icon' href={FAVICON} />

          <script src={`https://config.metomic.io/config.js?id=prj:${METOMIC_PROJECT_ID}`} />
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
