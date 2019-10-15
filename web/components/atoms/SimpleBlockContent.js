import React from 'react'
import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'

const { projectId, dataset } = client.config()

function SimpleBlockContent(props) {
  const { blocks } = props

  if (!blocks) {
    console.error('Missing blocks')
    return null
  }

  return (
    <BlockContent
      className={props.className}
      blocks={blocks}
      projectId={projectId}
      dataset={dataset}
      serializers={serializers}
    />
  )
}

SimpleBlockContent.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.any,
}

const serializers = {
  marks: {
    undefined: props => {
      console.warn('undefined serializer', props)
    },
    internalLink: props => {
      // console.warn('make link', props)
      return (
        <a href={props.mark._ref} id={props.mark._key}>
          {props.mark.children}
        </a>
      )
    },
  },
}

export default SimpleBlockContent
