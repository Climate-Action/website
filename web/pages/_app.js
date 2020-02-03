import React from 'react'
import BaseApp from 'next/app'
import * as Sentry from '@sentry/browser'

import client from '../client'
// import 'normalize.css'
import '../styles/shared.module.css'
import '../styles/layout.css'

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `

Sentry.init({
  dsn: 'https://4eb2ea14535448ef8f57c0bb353fdf6b@sentry.io/2205690',
})

class App extends BaseApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Add site config from sanity
    return client.fetch(siteConfigQuery).then(config => {
      if (!config) {
        return { pageProps }
      }
      if (config && pageProps) {
        pageProps.config = config
      }

      return { pageProps }
    })
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })

      Sentry.captureException(error)
    })

    super.componentDidCatch(error, errorInfo)
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default App
