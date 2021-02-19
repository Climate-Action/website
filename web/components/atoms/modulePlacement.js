function ModulePlacement(modulePlacement) {
    let _styles = {}
    if (modulePlacement) {
      _styles['align-self'] = modulePlacement.value
    }
    return _styles
  }
  
  export default ModulePlacement