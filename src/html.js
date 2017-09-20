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
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
