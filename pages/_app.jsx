import App, { Container } from 'next/app';
import Head from 'next/head';
import AppHeader from '../src/components/AppHeader';
import SideNav from '../src/components/SideNav';
import GlobalStyle from '../src/styles';
import EditionContext from '../src/context/edition-context';

class MyApp extends App {
  state = {
    selectedEdition: '2019'
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  setSelectedEdition = edition => {
    this.setState({ selectedEdition: edition });
  };

  render() {
    const { Component, pageProps } = this.props;

    const editionContext = {
      selectedEdition: this.state.selectedEdition,
      setAuthenticatedUser: this.setSelectedEdition
    };

    return (
      <Container>
        <GlobalStyle />
        <Head>
          <title key="title">Dashboard | open Summer of code 2019</title>
        </Head>
        <EditionContext.Provider value={editionContext}>
          <AppHeader />
          <SideNav />
          <Component {...pageProps} />
        </EditionContext.Provider>
      </Container>
    );
  }
}

export default MyApp;
