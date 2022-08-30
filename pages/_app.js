import Router from 'next/router'

import { GA_TRACKING_ID, pageview } from '../lib/gtag'

if (GA_TRACKING_ID) {
  Router.events.on('routeChangeComplete', url => pageview(url))
}
const MyApp = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);
export default MyApp;
