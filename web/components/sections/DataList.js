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
          <h2 className={styles.groupTitle}>{name}</h2>
          <ol className={styles.list}>
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

const Data = ({ title, description, url, source }) => {
  return (
    <article className={styles.item}>
      <div className={styles.content}>
        <header className={styles.header}>
          <a href={url.href} className={styles.title} title={url.text}>
            <span>{title}</span>
            {source && <label className={styles.label}>{source}</label>}
          </a>
        </header>

        <section>{description && <div className={styles.description}>{description}</div>}</section>
      </div>
    </article>
  )
}

Data.propTypes = {
  title: PropTypes.string,
  source: PropTypes.string,
  url: PropTypes.object,
  description: PropTypes.string,
}

export default DataList
