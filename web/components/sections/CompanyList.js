import React from 'react'
import PropTypes from 'prop-types'
import imageUrl from '../atoms/imageUrl'
import styles from './CompanyList.module.css'

const CompanyList = props => {
  return (
    <section className={styles.root}>
      <div className={styles.list}>
        {props.companies.map((company, i) => (
          <Company company={company} key={i} />
        ))}
      </div>
    </section>
  )
}

CompanyList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

const Company = ({ company }) => {
  const imageSrc = company.image ? imageUrl(company.image) : ''

  return (
    <article className={styles.item}>
      <a href={company.link}>
        <img src={imageSrc} className={styles.image} alt={company.name} />
      </a>
    </article>
  )
}

Company.propTypes = {
  company: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.object,
    country: PropTypes.string,
  }),
}

export default CompanyList
