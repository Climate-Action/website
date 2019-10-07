import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './LargeTextSection.module.css'

function LargeTextSection(props) {
  const { text } = props
  return (
    <div className={styles.root}>
      <section className={styles.content}>
        <h2 className={styles.heading}>{text && <SimpleBlockContent blocks={text} />}</h2>
      </section>
    </div>
  )
}

LargeTextSection.propTypes = {
  text: PropTypes.array,
}

export default LargeTextSection
