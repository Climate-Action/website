import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './Header.module.css'

const Header = props => {
  console.log('props', props)
  const { title, intro, links } = props
  return !title || !intro || !links ? (
    <div>Ooops! Something went wrong</div>
  ) : (
    <section className={styles.root}>
      <h1 className={styles.title}>{title}</h1>

      {intro && <SimpleBlockContent blocks={intro} />}

      <div className={styles.links}>
        {links.map((link, index) => (
          <a href="test" className={styles.link} key={index}>
            {index}
          </a>
        ))}
      </div>
    </section>
  )
}
Header.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.arrayOf(PropTypes.object),
  links: PropTypes.arrayOf(PropTypes.object),
}

export default Header
