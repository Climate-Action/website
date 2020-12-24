import React from 'react'
import PropTypes from 'prop-types'
import styles from './SplitView.module.css'
import ImageTextCta from './ImageTextCta'

function SplitView(props) {
  const { itc, theme, modulePadding } = props

  let themeStyle = styles.theme
  if (theme && theme.style === 'white') {
    themeStyle = styles.themeWhite
  }

  let _styles = {}
  if (modulePadding) {
    _styles = {
      gridGap: `var(--spacing-${modulePadding.verticalPadding}) var(--spacing-${modulePadding.horizontalPadding})`
    }
  }
  
  return <div 
    className={`${styles.root} ${themeStyle}`}
    style={_styles}
  >
    {itc.map(_itc => (
      <ImageTextCta itc={_itc} key={_itc._key} />
    ))}
  </div>
}

SplitView.propTypes = {
  theme: PropTypes.object,
  modulePadding: PropTypes.object,
  itc: PropTypes.arrayOf(PropTypes.object),
}

export default SplitView
