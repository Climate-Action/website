import React from 'react'
import PropTypes from 'prop-types'
import styles from './Hero.module.css'
import SimpleBlockContent from '../atoms/SimpleBlockContent'
import Cta from '../atoms/Cta'
import imageUrl from '../atoms/imageUrl'

function Hero(props) {
  const { heading, ctas, image } = props

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
        src={imageUrl(image, 600)}
        className={styles.image}
        // sizes="(min-width: 60rem) 80vw"
        alt="People working together"
      />
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.array,
  image: PropTypes.object,
  ctas: PropTypes.arrayOf(PropTypes.object),
}

export default Hero
