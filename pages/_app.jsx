import App, { Container } from 'next/app';
import Head from 'next/head';
import AppHeader from '../src/components/AppHeader';
import GlobalStyle from '../src/styles';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <Head>
          <title key="title">Dashboard | open Summer of code 2019</title>
        </Head>
        <AppHeader />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
