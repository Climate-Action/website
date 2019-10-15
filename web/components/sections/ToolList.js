import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../atoms/SimpleBlockContent'
import styles from './Tools.module.css'
import imageUrl from '../atoms/imageUrl'

const ToolList = props => {
  const tools = props.tools

  return (
    <section className={styles.root}>
      {tools && tools.map((tool, index) => <Tool {...tool} key={index} />)}
    </section>
  )
}

ToolList.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.object),
}

const Tool = ({ heading, intro, image, fileUrl, url, authors, sources, typeName }) => {
  return (
    <article className={styles.tool}>
      <img
        src={imageUrl(image, null, 300)}
        alt={image.alt || 'Tool preview'}
        className={styles.image}
      />

      <div className={styles.content}>
        <header className={styles.header}>
          {typeName && <label className={styles.label}>{typeName}</label>}

          <h2 className={styles.heading}>{heading}</h2>

          {authors && (
            <div className={styles.authors}>By {authors.map(a => a.name).join(', ')}</div>
          )}
        </header>

        <section className={styles.body}>
          {intro && <SimpleBlockContent blocks={intro} className={styles.text} />}
          {url && (
            <a href={url.href} target="_blank" rel="noopener" className={styles.button}>
              Open
            </a>
          )}
          {fileUrl && (
            <a href={fileUrl} className={styles.button}>
              Download
            </a>
          )}
        </section>
      </div>
    </article>
  )
}

Tool.propTypes = {
  heading: PropTypes.string,
  typeName: PropTypes.string,
  image: PropTypes.object,
  fileUrl: PropTypes.string,
  url: PropTypes.object,
  intro: PropTypes.arrayOf(PropTypes.object),
  authors: PropTypes.arrayOf(PropTypes.object),
  sources: PropTypes.arrayOf(PropTypes.object),
}

export default ToolList
