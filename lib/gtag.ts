import gtag from 'ga-gtag';

// See: https://github.com/zeit/next.js/blob/v9.4.4/examples/with-google-analytics/lib/gtag.js
const GA_TRACKING_ID = process.env.GA_TRACKING_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url) => {
  gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action, category, label, value }) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

export { GA_TRACKING_ID, pageview, event }