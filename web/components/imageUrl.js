import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

const builder = imageUrlBuilder(client)

export default (image, height, width) => {
  const img = builder
    .image(image)
    .auto('format')
    .fit('min')
  if (height) builder.height(height)
  if (width) builder.width(width)

  return img.url()
}
