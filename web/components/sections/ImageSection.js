import React from 'react'
import PropTypes from 'prop-types'
import styles from './ImageSection.module.css'
import themes from '../../styles/themes.css'
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

  let themeStyle = '';
  if (theme && theme.style === 'dark') {
    themeStyle = themes.themeDark;
  } else if (theme && theme.style === 'light') {
    themeStyle = themes.themeLight;
  } else if (theme && theme.style === 'white') {
    themeStyle = themes.themeWhite;
  }

  let contentStyle = styles.content;
  if (image) {
    contentStyle = styles.contentWithImage;
    if (smallImage) {
      contentStyle = styles.smallImageContent;
    }
  }

  let _styles = {}
  if (modulePadding) {
    _styles = {
      padding: `var(--spacing-${modulePadding.verticalPadding}) var(--spacing-${modulePadding.horizontalPadding})`
    }
  }

  return (
    <div 
      className={`${styles.root} ${imageOnRight ? styles.imageOnRight : ''} ${themeStyle}`}
      style={_styles}
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
