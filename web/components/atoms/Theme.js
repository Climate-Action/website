import themes from '../../styles/themes.css'

function ThemeStyle(theme) {
  let themeStyle = ''
  if (theme && theme.style === 'dark') {
    themeStyle = themes.themeDark
  } else if (theme && theme.style === 'light') {
    themeStyle = themes.themeLight
  } else if (theme && theme.style === 'white') {
    themeStyle = themes.themeWhite
  }
  return themeStyle
}

export default ThemeStyle