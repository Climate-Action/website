import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ImageSection.module.css'
import client from '../../client'
import SimpleBlockContent from '../atoms/SimpleBlockContent'
import Cta from '../atoms/Cta'
import imageUrl from '../atoms/imageUrl'

function ImageSection(props) {
  const { heading, text, image, cta } = props

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <img src={imageUrl(image, 600)} className={styles.image} alt={heading} />
        <div className={styles.text}>
          <h2 className={styles.title}>{heading}</h2>
          <div className={styles.text}>{text && <SimpleBlockContent blocks={text} />}</div>
        </div>
        {cta && cta.route && (
          <div className={styles.cta}>
            <Cta {...cta} />
          </div>
        )}
      </div>
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
