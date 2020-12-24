function ModulePadding(modulePadding, attribute='padding') {
  let _styles = {}
  if (modulePadding) {
    _styles[attribute] = `var(--spacing-${modulePadding.verticalPadding}) var(--spacing-${modulePadding.horizontalPadding})`
  }
  return _styles
}

export default ModulePadding