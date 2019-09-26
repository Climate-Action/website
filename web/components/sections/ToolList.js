import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './Header.module.css'

const ToolList = ({ tools }) => (
  <section className={styles.root}>
    {tools && tools.map((tool, index) => <Tool tool={tool} key={index} />)}
  </section>
)

ToolList.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.object),
}

const Tool = (props) => {
  console.log(props)
  const { heading, type, intro, description, image, file, url, authors, sources } = props
  return (
    <article className={styles.tool}>
      {/*<img src={image} className={styles.image} />*/}
      <header className={styles.header}>
        <label className={styles.label}>{type}</label>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.authors}>
          {authors && authors.map(author => (
            <span className={styles.author} key={author._key}>{author}</span>
          ))}
        </div>
      </header>
      <section>
        {intro && <SimpleBlockContent blocks={intro} />}
        {/*{url && <a href={url} className={styles.button}>View</a>}*/}
        {/*{file && <a href={file} className={styles.button}>Download</a>}*/}
      </section>
    </article>
  )
}

Tool.propTypes = {
  heading: PropTypes.string,
  type: PropTypes.object,
  image: PropTypes.object,
  file: PropTypes.object,
  url: PropTypes.object,
  intro: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.arrayOf(PropTypes.object),
  authors: PropTypes.arrayOf(PropTypes.object),
  sources: PropTypes.arrayOf(PropTypes.object),
}

export default ToolList
