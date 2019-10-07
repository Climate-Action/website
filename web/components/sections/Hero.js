import React from 'react'
import PropTypes from 'prop-types'
import styles from './Hero.module.css'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'
import imageUrl from '../imageUrl'

function Hero(props) {
  const {
    heading,
    tagline,
    ctas,
    backgroundImageSmall,
    backgroundImageMedium,
    backgroundImageLarge,
  } = props

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <div>{heading}</div>
          <AnimatedTitles />
        </h1>
        <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        {ctas && (
          <div className={styles.ctas}>
            {ctas.map(cta => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
      <div className={styles.images}>
        <span className={styles.hex} style={backgroundImage(backgroundImageSmall)} />
        <span className={styles.hex} style={backgroundImage(backgroundImageMedium)} />
        <span className={styles.hex} style={backgroundImage(backgroundImageLarge)} />
      </div>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImageSmall: PropTypes.object,
  backgroundImageMedium: PropTypes.object,
  backgroundImageLarge: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
}

const backgroundImage = img =>
  img
    ? {
        backgroundImage: `url("${imageUrl(img, 2000)}")`,
      }
    : {}

// eslint-disable-next-line react/prop-types
const AnimatedTitles = ({ titles = ['Engineer', 'Designer', 'Professional'] }) => (
  <span className={styles.animatedTitles}>{titles[0]}</span>
)

export default Hero
