import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { initGA, logPageView } from './google-analytics.js'

import { LogoJsonLd } from 'next-seo'
import Header from './Header'
import Footer from './Footer'

class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    const { config, children } = this.props

    if (!config) {
      console.error('Missing config')
      return <div>Missing config</div>
    }

    const { title, mainNavigation, footerNavigation, footerText, logo, url } = config
    const logoUrl = logo && logo.asset && logo.asset.url

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, viewport-fit=cover"
          />
          <link rel="preconnect" href="https://cdn.sanity.io" />
          <link rel="shortcut icon" type="image/png" href="/static/images/favicon.png" />
        </Head>
        <div className="container">
          <Header title={title} navItems={mainNavigation} logo={logo} />
          <div className="content">{children}</div>
          <Footer navItems={footerNavigation} text={footerText} logo={logo} title={title} />
          {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />}
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  config: PropTypes.shape({
    title: PropTypes.string,
    mainNavigation: PropTypes.arrayOf(PropTypes.object),
    footerNavigation: PropTypes.arrayOf(PropTypes.object),
    footerText: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    url: PropTypes.string,
  }),
}

export default Layout
