import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSection.module.css'

function TextSection(props) {
  const { heading, items } = props
  console.log("yayaya", items)
  
  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <h2 className={styles.heading}>{heading}</h2>
        {/*text && <SimpleBlockContent blocks={text} /> */}
      </section>
    </div>
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
}

export default TextSection
