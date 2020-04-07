import App from 'next/app';
import React from 'react';
import Router from 'next/router';

import './styles.css';

import { trackPageView } from '../core/segment';
import Footer from '../shared/components/footer.component';
import Header from '../shared/components/header.component';

Router.events.on('routeChangeComplete', url => trackPageView(url));

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default MyApp;
