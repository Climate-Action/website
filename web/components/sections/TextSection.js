import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../atoms/SimpleBlockContent'
import styles from './TextSection.module.css'
import themes from '../../styles/themes.css'
import imageUrl from '../atoms/imageUrl'

function TextSection({ heading, items, white, theme, headingStyle, modulePadding }) {
  let styleHeading = styles.heading;
  if (headingStyle === 'serif') {
    styleHeading = styles.groupTitle;
  }

  let themeStyle = ''
  let headerBackgroundColor = ''
  if (theme && theme.style === 'dark') {
    themeStyle = themes.themeDark
  } else if (theme && theme.style === 'light') {
    themeStyle = themes.themeLight
    headerBackgroundColor = themes.themeLight
  } else if (theme && theme.style === 'white') {
    themeStyle = themes.themeWhite;
    headerBackgroundColor = theme.themeWhite
  }

  return (
    <div 
      className={`${styles.root} ${themeStyle}`}
      style={{
        padding: modulePadding,
      }}
    >
      <section className={styles.article}>
        <h2 
          className={`${styleHeading} ${headerBackgroundColor}`} 
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
  modulePadding: PropTypes.string,
  white: PropTypes.bool,
  theme: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object),
}

export default TextSection
