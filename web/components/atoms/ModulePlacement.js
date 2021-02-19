function ModulePlacement(modulePlacement) {
  let _styles = {}
  if (modulePlacement) {
    _styles.alignSelf = modulePlacement.value
  }
  return _styles
}

export default ModulePlacement