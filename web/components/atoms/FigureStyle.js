function FigureStyle(image) {
let _styles = {}
if (image.maxWidth) {
    _styles.maxWidth = image.maxWidth
}
if (image.maxHeight) {
    _styles.maxHeight = image.maxHeight
    }
return _styles
}

export default FigureStyle