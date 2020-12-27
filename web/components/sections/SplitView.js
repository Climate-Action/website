import React from 'react'
import PropTypes from 'prop-types'
import ModulePadding from '../atoms/ModulePadding'
import ModuleWidth from '../atoms/ModuleWidth'
import ThemeStyle from '../atoms/Theme'
import styles from './SplitView.module.css'
import ImageTextCta from './ImageTextCta'

function SplitView(props) {
  const { itc, theme, modulePadding, moduleWidth } = props

  const paddingType = itc.length > 1 ? 'gridGap' : 'padding'

  return <div 
    className={ThemeStyle(theme)}
    style={ModulePadding(modulePadding, paddingType)}
  >
    <div className={styles.content} style={{
      maxWidth: ModuleWidth(moduleWidth),
    }}>
      {itc.map(_itc => (
        <ImageTextCta {..._itc} key={_itc._key} />
      ))}
    </div>
  </div>
}

SplitView.propTypes = {
  theme: PropTypes.object,
  modulePadding: PropTypes.object,
  moduleWidth: PropTypes.object,
  itc: PropTypes.arrayOf(PropTypes.object),
}

export default SplitView
