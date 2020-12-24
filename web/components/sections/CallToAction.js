import React from 'react'
import PropTypes from 'prop-types'
import ModulePadding from '../atoms/ModulePadding'
import styles from './CallToAction.module.css'
import Link from 'next/link'

function CallToAction(props) {
  const { cta, modulePadding } = props

  const route = cta.route
  const link = cta.link
  const title = cta.title

  let rootStyle = styles.root;
  if (cta.position === 'left') {
    rootStyle = styles.rootLeft;
  } else if (cta.position === 'right') {
    rootStyle = styles.rootRight;
  }

  let buttonStyle = styles.button;
  if (cta.size === 'small') {
    buttonStyle = styles.buttonSmall;
  }

  if (route && route.slug && route.slug.current) {
    return (
      <div className={rootStyle} style={ModulePadding(modulePadding)}>
        <Link
          href={{
            pathname: '/LandingPage',
            query: { slug: route.slug.current },
          }}
          as={`/${route.slug.current}`}
        >
          <a className={buttonStyle}>{title}</a>
        </Link>
      </div>
    )
  }

  if (cta.link) {
    return (
      <div className={rootStyle}>
        <a className={buttonStyle} href={link}>{title}</a>
      </div>
    )
  }

  return <div className={rootStyle}><a className={buttonStyle}>{title}</a></div>
}

CallToAction.propTypes = {
  cta: PropTypes.object,
  modulePadding: PropTypes.object,
}

export default CallToAction
