import type { AppProps } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
