import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../atoms/SimpleBlockContent'
import styles from './DataList.module.css'

const DataList = props => {
  const groups = {}

  for (const data of props.data) {
    const type = data.group
    if (type in groups) groups[type].push(data)
    else groups[type] = [data]
  }

  return (
    <section className={styles.root}>
      {Object.entries(groups).map(([name, group], index) => (
        <div className={styles.section} key={index}>
          <h2 className={styles.header}>{name}</h2>
          <ol>
            {group.map((data, index) => (
              <li key={index}>
                <Data {...data} />
              </li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  )
}

DataList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

const Data = ({ title, type, description, url, source, author }) => {
  return (
    <article className={styles.tool}>
      <div className={styles.content}>
        <header className={styles.header}>
          {type && <h2 className={styles.label}>{type.name}</h2>}

          <a href={source.url} className={styles.heading}>
            {title}
          </a>

          {author && (
            <span className={styles.author} key={author._key}>
              {author.name}
            </span>
          )}
        </header>

        <section>
          {description && <div className={styles.description}>{description}</div>}
          {url && (
            <a href={url.href} className={styles.button}>
              View
            </a>
          )}
        </section>
      </div>
    </article>
  )
}

Data.propTypes = {
  title: PropTypes.string,
  type: PropTypes.object,
  source: PropTypes.object,
  author: PropTypes.object,
  url: PropTypes.object,
  description: PropTypes.arrayOf(PropTypes.object),
}

export default DataList
