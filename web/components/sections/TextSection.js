import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import SimpleBlockContent from '../SimpleBlockContent'
import client from '../../client'
import styles from './TextSection.module.css'

const builder = imageUrlBuilder(client)

function TextSection(props) {
  const { heading, items } = props
  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.items}>
          {items.map(({ title, image, text, _key }) => (
            <article className={styles.item} key={_key}>
              {image &&
                <img
                  src={builder.image(image).auto('format').width(400).url()}
                  className={styles.image}
                  alt={image.alt}
                  title={image.caption}
                />}
              {title && <h3 className={styles.itemTitle}>{title}</h3>}
              {text && <SimpleBlockContent blocks={text} />}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
}

export default TextSection
