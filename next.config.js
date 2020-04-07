// next.config.js

const withCSS = require('@zeit/next-css');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { generateAllArticles } = require('./utils/helpers');

const next_config = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    // Here is the magic
    // We push our config into the resolve.modules array
    config.resolve.modules.push(path.resolve('./'))

    config.resolve.alias['template'] = path.join(__dirname, 'template')

    return config;
  },

  env: {
    'CONTENTFUL_SPACE': process.env.CONTENTFUL_SPACE,
    'CONTENTFUL_TOKEN': process.env.CONTENTFUL_TOKEN
  },

  exportPathMap: async () => {
    const articles = await generateAllArticles();

    const insights = articles.reduce(
      (pages, entry) =>
        Object.assign({}, pages, {
          [`/post/${entry.slug}`]: {
            page: '/post',
            query: { post: entry.slug }
          }
        }),
      {}
    );

    const pages = {
      '/': { page: '/' },
      '/post': { page: '/post' }
    };

    return Object.assign({}, pages, insights);
  }
};

module.exports = withCSS({ ...next_config });
