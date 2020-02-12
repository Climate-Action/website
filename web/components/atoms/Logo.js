import styles from './Logo.module.css'
import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'
import Svg from 'react-inlinesvg'

const Logo = ({ logo, title }) => (
  <h1 className={styles.root}>
    <a href="/" title={title}>{renderLogo(logo)}</a>
  </h1>
)

const renderLogo = logo => {
  if (!logo || !logo.asset) {
    return null
  }

  if (logo.asset.extension === 'svg') {
    return <Svg src={logo.asset.url} className={styles.logo} />
  }

  return <img src={logo.asset.url} alt={logo.title} className={styles.logo} />
}
Logo.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.shape({
    asset: PropTypes.shape({
      url: PropTypes.string,
    }),
    logo: PropTypes.string,
  }),
}

export default Logo
