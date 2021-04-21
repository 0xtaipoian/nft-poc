import Document, { DocumentContext, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';
import { normalize } from 'styled-normalize';
import Head from '../components/document-head';
import theme from '../theme';

const AppGlobalStyle = createGlobalStyle`
  ${normalize}

  button, html, input, select, textarea {
    font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji;
    font-size: 1.125rem;
  }

  input, button {
    outline: none;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    text-rendering: geometricPrecision;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.primary}!important;
    }
  }

  body, html {
    font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji;
    margin: 0;
    line-height: 1.15;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;
    text-size-adjust: 100%;
  }
`;

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheets.collectStyles(
              <>
                <AppGlobalStyle />
                <App {...props} />
              </>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
      };
    } finally {
      sheets.seal();
    }
  }

  public render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
