/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import Link from 'next/link'
import imageUrl from './imageUrl'

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
    internalLink: ({ children, mark }) => (
      <Link href={mark.path} key={mark._key}>
        {children.join(' ')}
      </Link>
    ),
  },
  types: {
    embedHTML: ({ node }) => {
      if (node && node.html) return <span dangerouslySetInnerHTML={{ __html: node.html }} />
      return null
    },
    image: ({ node }) => {
      console.log('image', node)
      const url = imageUrl(node.asset)
      return (
        <>
          <img src={url} alt="image" />
          {node.downloadable && (
            <div>
              <small>
                <a href={url} download target="_blank">
                  Download
                </a>
              </small>
            </div>
          )}
        </>
      )
    },
  },
}

const serializerPropType = {
  children: PropTypes.array,
  mark: PropTypes.object,
  node: PropTypes.object,
}

serializers.marks.internalLink.propTypes = serializerPropType
serializers.types.embedHTML.propTypes = serializerPropType
serializers.types.image.propTypes = serializerPropType

export default SimpleBlockContent
