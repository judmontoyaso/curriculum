import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gray-100 dark:bg-gray-900 transition-color duration-1000">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
