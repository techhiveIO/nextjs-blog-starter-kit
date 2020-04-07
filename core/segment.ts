const isProduction = process.env.NODE_ENV.toLowerCase() === 'production';

export const trackPageView = url => {
  // if (isProduction) {
    // @ts-ignore
    window.analytics && window.analytics.page(url)
  // }
};

export const trackEvent = ({ action, category, label, value }) => {
  if (isProduction) {
    // @ts-ignore
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};
