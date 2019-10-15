import React from 'react'
import PropTypes from 'prop-types'
import styles from './Footer.module.css'
import SimpleBlockContent from './SimpleBlockContent'
import Logo from './atoms/Logo'

function Footer(props) {
  const { logo, title, text } = props
  return (
    <div className={styles.root}>
      <Logo logo={logo} title={title} />
      <div className={styles.text}>
        <SimpleBlockContent blocks={text} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.shape({
    asset: PropTypes.shape({
      url: PropTypes.string,
    }),
    logo: PropTypes.string,
  }),
  text: PropTypes.arrayOf(PropTypes.object),
}

export default Footer
