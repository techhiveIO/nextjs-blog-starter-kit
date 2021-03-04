import '../styles/a11y-dark.css';
import '../styles/index.css';
import '../styles/tailwind.css';

import { FOOTER_BG_COLOR, MASTHEAD_BG_COLOR } from '../template';

import App from 'next/app';
import Cta from '../shared/components/cta.component';
import Footer from '../shared/components/footer.component';
import Header from '../shared/components/header.component';
import React from 'react';
import Router from 'next/router';
import { trackPageView } from '../core/segment';

Router.events.on('routeChangeComplete', url => trackPageView(url));

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <style global jsx>{`
          header,
          nav {
            background-color: ${MASTHEAD_BG_COLOR};
          }
          footer {
            background-color: ${FOOTER_BG_COLOR};
          }
        `}</style>
        <Header />
        <Component {...pageProps} />
        <Cta />
        <Footer />
      </React.Fragment>
    );
  }
}

export default MyApp;
