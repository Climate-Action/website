import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { NextSeo } from 'next-seo'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import Layout from '../components/Layout'
import client from '../client'
import RenderSections from '../components/RenderSections'

const builder = imageUrlBuilder(client)

const contentQuery = `
  content[] {
      ...,
      cta { ..., route-> },
      ctas[] { ..., route-> },
      _type == "toolList" => {"tools":  *[_type == "tool"] | order(priority desc, _updatedAt desc) {
        ...,
        "fileUrl": file.asset->url,
        authors[] -> { name }, 
        sources[] -> { name, link }, 
        "typeName": type->name,
      }},
      _type == "participantList" => {"participants":  *[_type == "person" && ambassador != false] | order(_createdAt desc)},
      _type == "dataList" => {"data":  *[_type == "data"]{
        ...,
        "group": type->name
      }},
    }
`

const pageQuery = groq`*[_type == "route" && slug.current == $slug][0]{
  page -> { ..., ${contentQuery} }
}`

const frontPageQuery = groq`*[_id == "global-config"][0]{
  frontpage -> { ..., ${contentQuery} }
}`

class LandingPage extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    // TODO: improve types
    disallowRobots: PropTypes.any,
    openGraphImage: PropTypes.any,
    content: PropTypes.any,
    config: PropTypes.any,
    slug: PropTypes.any,
  }

  static async getInitialProps({ query }) {
    const { slug } = query
    if (!query) {
      console.error('no query')
      return
    }

    if (slug) {
      if (slug !== '/') {
        return client.fetch(pageQuery, { slug }).then(res => ({ ...res.page, slug }))
      }

      // FrontPage
      if (slug === '/') {
        return client.fetch(frontPageQuery).then(res => ({ ...res.frontpage, slug }))
      }
    }

    return null
  }

  render() {
    const {
      title = 'Missing title',
      description,
      disallowRobots,
      openGraphImage,
      content = [],
      config = {},
      slug,
    } = this.props

    const openGraphImages = generateOGImages(openGraphImage, title, description)

    return (
      <Layout config={config}>
        <NextSeo
          title={title}
          titleTemplate={`${config.title} | %s`}
          description={description}
          canonical={config.url && `${config.url}/${slug}`}
          openGraph={{ images: openGraphImages }}
          noindex={disallowRobots}
        />
        {content && <RenderSections sections={content} />}
      </Layout>
    )
  }
}

const generateOGImages = (openGraphImage, title) =>
  openGraphImage
    ? [
        {
          url: builder
            .image(openGraphImage)
            .width(800)
            .height(600)
            .url(),
          width: 800,
          height: 600,
          alt: title,
        },
        {
          // Facebook recommended size
          url: builder
            .image(openGraphImage)
            .width(1200)
            .height(630)
            .url(),
          width: 1200,
          height: 630,
          alt: title,
        },
        {
          // Square 1:1
          url: builder
            .image(openGraphImage)
            .width(600)
            .height(600)
            .url(),
          width: 600,
          height: 600,
          alt: title,
        },
      ]
    : []

export default LandingPage
