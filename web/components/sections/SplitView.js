import React from 'react'
import PropTypes from 'prop-types'
import ModulePadding from '../atoms/ModulePadding'
import ThemeStyle from '../atoms/Theme'
import styles from './SplitView.module.css'
import ImageTextCta from './ImageTextCta'

function SplitView(props) {
  const { itc, theme, modulePadding } = props

  return <div 
    className={`${styles.root} ${ThemeStyle(theme)}`}
    style={ModulePadding(modulePadding, 'gridGap')}
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
