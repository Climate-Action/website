import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../atoms/SimpleBlockContent'
import styles from './Header.module.css'

const Header = props => {
  const { title, intro, links } = props

  return !title || !intro ? (
    <div>Ooops! Something went wrong</div>
  ) : (
    <section className={styles.root}>
      <h1 className={styles.title}>{title}</h1>

      {intro && <SimpleBlockContent blocks={intro} className={styles.intro} />}

      {!!(links && links.length) && (
        <div className={styles.links}>
          {links.map((link, index) => (
            <a href="#juggalo" className={styles.link} key={index}>
              Link
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
Header.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.arrayOf(PropTypes.object),
  links: PropTypes.arrayOf(PropTypes.object),
}

export default Header
