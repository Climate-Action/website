import React from 'react'
import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import Link from 'next/link'

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
    // eslint-disable-next-line react/prop-types
    internalLink: ({ children, mark }) => (
      // eslint-disable-next-line react/prop-types
      <Link href={mark.path} key={mark._key}>
        {/* eslint-disable-next-line react/prop-types */}
        {children.join(' ')}
      </Link>
    ),
  },
}

export default SimpleBlockContent
