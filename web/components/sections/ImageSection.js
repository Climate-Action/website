import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ImageSection.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

const builder = imageUrlBuilder(client)

function ImageSection(props) {
  const { heading, text, image, cta } = props

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{heading}</h2>
      <figure className={styles.content}>
        <img
          src={builder
            .image(image)
            .auto('format')
            .width(800)
            .url()}
          className={styles.image}
          alt={heading}
        />
        <figcaption>
          <div className={styles.caption}>
            <div className={styles.captionBox}>
              {text && <SimpleBlockContent blocks={text} />}
            </div>
          </div>
        </figcaption>
      </figure>
      {cta && cta.route && <Cta {...cta} />}
    </div>
  )
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
}

export default ImageSection
