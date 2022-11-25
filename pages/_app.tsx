import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Meta from '../components/Meta';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
