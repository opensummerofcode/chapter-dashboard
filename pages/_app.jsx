import App, { Container } from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';
import AppHeader from '@/components/AppHeader';
import SideNav from '@/components/SideNav';
import GlobalStyle from '@/styles';
import EditionContext from '@/context/edition-context';

const ContentContainer = styled.div`
  display: flex;
`;

class MyApp extends App {
  state = {
    selectedEdition: '2019',
    ready: false
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    this.setState({ ready: true });
  }

  setSelectedEdition = edition => {
    this.setState({ selectedEdition: edition });
  };

  render() {
    const { ready } = this.state;
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
        {ready && (
          <EditionContext.Provider value={editionContext}>
            <AppHeader />
            <ContentContainer>
              <SideNav />
              <Component {...pageProps} />
            </ContentContainer>
          </EditionContext.Provider>
        )}
      </Container>
    );
  }
}

export default MyApp;
