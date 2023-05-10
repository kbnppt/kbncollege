// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";
// import HeadCustom from "../next_custom/customHead.js";
// import NextScriptCustom from "../next_custom/customScript.js";
import { ServerStyleSheets } from "@material-ui/core/styles";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* <HeadCustom /> */}
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* <NextScriptCustom /> */}
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
     
    ],
  };
};
export default MyDocument;
