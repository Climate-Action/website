import React from 'react'
import PropTypes from 'prop-types'
import styles from './ImageSection.module.css'
import themes from '../../styles/themes.css'
import SimpleBlockContent from '../atoms/SimpleBlockContent'
import imageUrl from '../atoms/imageUrl'

function ImageSection(props) {
  const {
    heading,
    theme,
    text,
    image,
    cta,
    ctaPosition,
    ctaSize,
    imageOnRight,
    smallImage
  } = props

  let themeStyle = '';
  if (theme === 'dark') {
    themeStyle = themes.themeDark;
  } else if (theme === 'light') {
    themeStyle = themes.themeLight;
  }

  let contentStyle = styles.content;
  if (image) {
    contentStyle = styles.contentWithImage;
    if (smallImage) {
      contentStyle = styles.smallImageContent;
    }
  }

  let ctaStyle = styles.cta;
  if (ctaPosition === 'center') {
    ctaStyle = styles.ctaCenter;
  } else if (ctaPosition === 'right') {
    ctaStyle = styles.ctaRight;
  }

  let buttonStyle = styles.button;
  if (ctaSize === 'small') {
    buttonStyle = styles.buttonSmall;
  }

  return (
    <div className={`${styles.root} ${imageOnRight ? styles.imageOnRight : ''} ${themeStyle}`}>
      <div className={contentStyle}>
        {image && (
          <img src={imageUrl(image, 600)} className={styles.image} alt={heading} />
        )}
        <div className={styles.text}>
          <h2 className={styles.title}>{heading}</h2>
          <div className={styles.text}>{text && <SimpleBlockContent blocks={text} />}</div>
        {cta && cta.route && (
          <div className={ctaStyle}>
            <a href={`/${cta.route.slug.current}`} className={buttonStyle}>{cta.title}</a>
          </div>
        )}
        {cta && cta.link && (
          <div className={ctaStyle}>
            <a href={`${cta.link}`} className={buttonStyle}>{cta.title}</a>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  theme: PropTypes.string,
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
  ctaPosition: PropTypes.string,
  ctaSize: PropTypes.string,
}

export default ImageSection
