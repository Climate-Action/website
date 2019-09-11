import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

import client from '../client'

// injectGlobal`
//   body {
//     font-size: 1.6em;
//   }
// `

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // static async getInitialProps({ renderPage, ctx }) {
    // const sheet = new ServerStyleSheet()
    // const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    // const styleTags = sheet.getStyleElement()

    const initialProps = await Document.getInitialProps(ctx)

    return client.fetch('*[_id == "global-config"] {lang}.lang[0]').then(lang => {
      return { ...initialProps, lang }
      // return { ...page, styleTags, ...initialProps, lang }
    })
  }

  render() {
    return (
      <Html lang={this.props.lang || 'en'}>
        {/* <Head>{this.props.styleTags}</Head> */}
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
