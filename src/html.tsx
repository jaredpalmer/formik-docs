/* tslint:disable no-var-requires */
/* tslint:disable no-console */

import * as React from 'react';

// Load production style
let styles: string;
if (process.env.NODE_ENV === `production`) {
  try {
    styles = require('!raw-loader!../public/styles.css');
  } catch (err) {
    console.log(err);
  }
}

interface HtmlProps {
  body: any;
  postBodyComponents: any;
  headComponents: any;
}

// Use `module.exports` to be compliante with `webpack-require` import method
class HTML extends React.Component<HtmlProps, {}> {
  constructor(props: HtmlProps, context: any) {
    super(props, context);
  }

  render() {
    const css =
      process.env.NODE_ENV === `production` ? (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      ) : null;
    return (
      <html lang="en">
        <head>
          {this.props.headComponents}
          <title>Formik</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />

          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

module.exports = HTML;
