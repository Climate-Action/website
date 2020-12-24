import React from 'react'
import PropTypes from 'prop-types'
import styles from './ImageSection.module.css'
import ModulePadding from '../atoms/ModulePadding'
import ThemeStyle from '../atoms/Theme'
import SimpleBlockContent from '../atoms/SimpleBlockContent'
import CallToAction from './CallToAction'
import imageUrl from '../atoms/imageUrl'

function ImageSection(props) {
  const {
    heading,
    theme,
    text,
    image,
    cta,
    imageOnRight,
    smallImage,
    modulePadding,
  } = props

  let contentStyle = styles.content;
  if (image) {
    contentStyle = styles.contentWithImage;
    if (smallImage) {
      contentStyle = styles.smallImageContent;
    }
  }

  return (
    <div 
      className={`${styles.root} ${imageOnRight ? styles.imageOnRight : ''} ${ThemeStyle(theme)}`}
      style={ModulePadding(modulePadding)}
    >
      <div className={contentStyle}>
        {image && (
          <img src={imageUrl(image, 600)} className={styles.image} alt={heading} />
        )}
        <div className={styles.text}>
          <h2 className={styles.title}>{heading}</h2>
          <div className={styles.text}>{text && <SimpleBlockContent blocks={text} />}</div>
          {cta && (<CallToAction cta={cta} />)}
        </div>
      </div>
    </div>
  )
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  theme: PropTypes.object,
  modulePadding: PropTypes.object,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  imageOnRight: PropTypes.bool,
  smallImage: PropTypes.bool,
  cta: PropTypes.object,
}

export default ImageSection
