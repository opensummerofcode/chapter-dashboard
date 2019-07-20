import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link
            href="https://fonts.googleapis.com/css?font-display=swap&amp;family=Montserrat:400,500,600,700|Open+Sans:300,400"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="theme-color" content="‪#FFFFFF" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
