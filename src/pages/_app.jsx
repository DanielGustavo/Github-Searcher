import Head from 'next/head';

import Header from '../components/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Github Searcher</title>
        <meta
          name="description"
          content="Github Searcher is a project made with NextJs and uses the Github API to fetch data from a Github user and display it in a handsome and responsive design."
        />
      </Head>

      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
