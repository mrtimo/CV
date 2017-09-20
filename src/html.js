/* eslint-disable */

import React, { Component } from 'react';

const productionEnv = process.env.NODE_ENV === 'production';
let stylesStr;

if (productionEnv) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

class HTML extends Component {
  render() {
    let css;
    if (productionEnv) {
      css = <style dangerouslySetInnerHTML={{ __html: stylesStr }} />;
    }

    return (
      <html lang="en-GB">
        <head>
          <meta charset="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <title>Reece Lucas | CV</title>
          <meta
            name="description"
            content="Reece Lucas CV – Front End Developer based in London"
          />
          <link rel="canonical" href="https://www.cv.reecelucas.com/" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-16x16.png"
            sizes="16x16"
          />
          <link rel="manifest" href="/favicons/manifest.json" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#426591"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="Reece Lucas – CV" />
          <meta name="application-name" content="Reece Lucas | CV" />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#426591" />
          <meta property="og:title" content="Reece Lucas | CV" />
          <meta
            property="og:description"
            content="Reece Lucas CV – Front End Developer based in London"
          />
          <meta property="og:url" content="https://www.cv.reecelucas.com" />
          <meta name="twitter:card" content="summary" />
          <meta name="og:site_name" content="Reece Lucas | CV" />

          {this.props.headComponents}
          {css}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

export default HTML;
