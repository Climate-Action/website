import React from 'react'
import PropTypes from 'prop-types'
import styles from './Hero.module.css'
import SimpleBlockContent from '../atoms/SimpleBlockContent'
import Cta from '../atoms/Cta'
import imageUrl from '../atoms/imageUrl'

function Hero(props) {
  const { heading, ctas, image, imageAltText, swap } = props
  const showCta = ctas && ctas.length !== 0

  return (
    <div className={swap ? styles.alternative : styles.root}>
      <div className={styles.content}>
        <div className={swap ? styles.altTitle : styles.title}>
          <SimpleBlockContent blocks={heading} />
        </div>
        {showCta && (
          <div className={styles.ctas}>
            {ctas.map(cta => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
      <img
        src={imageUrl(image, 600)}
        className={swap ? styles.altImage : styles.image}
        // sizes="(min-width: 60rem) 80vw"
        alt={imageAltText || ''}
      />
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.array,
  image: PropTypes.object,
  imageAltText: PropTypes.string,
  swap: PropTypes.bool,
  ctas: PropTypes.arrayOf(PropTypes.object),
}

export default Hero
