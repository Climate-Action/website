import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

const builder = imageUrlBuilder(client)

export default (image, width, height) => {
  let img = builder
    .image(image)
    .auto('format')
    .fit('min')
  if (height) img = img.height(height)
  if (width) img = img.width(width)

  return img.url()
}
