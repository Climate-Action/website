function ModuleWidth(moduleWidth) {
  let _styles = {}
  if (moduleWidth) {
    _styles['max-width'] = `var(--width-${moduleWidth.max})`
  }
  return _styles
}

export default ModuleWidth