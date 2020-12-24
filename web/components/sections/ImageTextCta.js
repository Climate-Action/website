import React from 'react'
import PropTypes from 'prop-types'
import CallToAction from './CallToAction'

function ImageTextCta(props) {
  const { itc } = props

  if (itc.callToAction) {
    return <CallToAction 
      cta={itc.callToAction.cta} 
      verticalPadding={itc.callToAction.verticalPadding}
      horizontalPadding={itc.callToAction.horizontalPadding}
    />
  }

  return ''
}

ImageTextCta.propTypes = {
  itc: PropTypes.object,
  theme: PropTypes.string,
}

export default ImageTextCta
