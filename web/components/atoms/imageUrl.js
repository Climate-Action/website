import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

const builder = imageUrlBuilder(client)

const imageUrl = (image, width, height, download) => {
  let img = builder
    .image(image)
    .auto('format')
    .fit('min')
  if (height) img = img.height(height)
  if (width) img = img.width(width)
  if (download) img = img.forceDownload(download)

  return img.url()
}

export default imageUrl