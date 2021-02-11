import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../atoms/SimpleBlockContent'
import ModulePadding from '../atoms/ModulePadding'
import ThemeStyle from '../atoms/Theme'
import styles from './TextSection.module.css'
import imageUrl from '../atoms/imageUrl'

function TextSection({ heading, items, theme, headingStyle, modulePadding }) {
  let styleHeading = styles.heading;
  if (headingStyle === 'serif') {
    styleHeading = styles.groupTitle;
  }

  return (
    <div 
      className={`${styles.root} ${ThemeStyle(theme)}`}
      style={ModulePadding(modulePadding)}
    >
      <section className={styles.article}>
        <h2 
          className={`${styleHeading}`} 
        >{heading}</h2>
        <div className={styles.items}>
          {items.map(({ title, image, text, _key }) => (
            <article className={styles.item} key={_key}>
              {image && (
                <img
                  src={imageUrl(image, 300)}
                  className={styles.image}
                  alt={image.alt || 'Illustration'}
                  title={image.caption}
                />
              )}
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
  headingStyle: PropTypes.string,
  modulePadding: PropTypes.object,
  theme: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object),
}

export default TextSection
