function FigureStyle(image) {
    let _styles = {}
    if (image.maxWidth) {
      _styles['max-width'] = image.maxWidth
    }
    if (image.maxHeight) {
        _styles['max-height'] = image.maxHeight
      }
    return _styles
  }
  
  export default FigureStyle