import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../atoms/SimpleBlockContent'
import imageUrl from '../atoms/imageUrl'
import styles from './MemberList.module.css'

const MemberList = props => {
  return (
    <section className={styles.root}>
      <div className={styles.list}>
        {props.participants.map((member, i) => (
          <Member member={member} key={i} />
        ))}
      </div>
    </section>
  )
}

MemberList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

/*
country: "norway"
image: {_type: "image", asset: {…}}
link: "https://www.linkedin.com/in/paulina-buvinic-996960117/"
name: "Paulina Buvinic"
title: "Designer"
*/

const Member = ({member}) => {
  const imageSrc = member.image ? imageUrl(member.image, 100, 100) : ""
  console.log(member)

  return (
    <article className={styles.item}>
      <img src={imageSrc} className={styles.image} alt={"hive member photo"} />
      <div className={styles.content}>
        <header className={styles.header}>
          <a href={member.link} className={styles.title}>
            {member.name}
          </a>
        </header>
        {member.title && <div className={styles.label}>{member.title}</div>}
      </div>
    </article>
  )
}

Member.propTypes = {
  title: PropTypes.string,
  source: PropTypes.string,
  url: PropTypes.object,
  description: PropTypes.string,
}

export default MemberList
