import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../atoms/SimpleBlockContent'
import CallToAction from './CallToAction'

function ImageTextCta(props) {
  const { text, callToAction } = props

  if (text) {
    return <SimpleBlockContent blocks={text} />
  }

  if (callToAction) {
    return <CallToAction 
      cta={callToAction.cta} 
      verticalPadding={callToAction.verticalPadding}
      horizontalPadding={callToAction.horizontalPadding}
    />
  }

  return ''
}

ImageTextCta.propTypes = {
  callToAction: PropTypes.object,
  text: PropTypes.array,
}

export default ImageTextCta
