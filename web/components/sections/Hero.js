import React from 'react'
import PropTypes from 'prop-types'
import styles from './Hero.module.css'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'
import imageUrl from '../imageUrl'

function Hero(props) {
  const { heading, tagline, ctas, image } = props

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.title}>
          <SimpleBlockContent blocks={heading} />
        </div>
        {ctas && (
          <div className={styles.ctas}>
            {ctas.map(cta => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
      <img
        src={imageUrl(image, 1200)}
        className={styles.image}
        // srcSet={`
        //   ${imageUrl(image, 320)} 320w,
        //   ${imageUrl(image, 800)} 800w,
        //   ${imageUrl(image, 1200)} 1200w
        // `}
        sizes="(min-width: 60rem) 80vw"
        alt="People working together"
      />
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
const AnimatedTitles = ({ titles = ['Workforce', 'Engineer', 'Designer', 'Professional'] }) => (
  <span className={styles.animatedTitles}>{titles[0]}</span>
)

export default Hero
