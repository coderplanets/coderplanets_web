/*
 *
 * SEO for different pages
 *
 */

import React from 'react'
import T from 'prop-types'
import { NextSeo, BlogJsonLd, SocialProfileJsonLd } from 'next-seo'

import { METRIC } from '@/constant'

const SEO = (metric, config) => {
  switch (metric) {
    case METRIC.ARTICLE: {
      return (
        <BlogJsonLd
          url={config.url}
          title={config.title}
          datePublished={config.datePublished}
          dateModified={config.dateModified}
          authorName={config.authorName}
          description={config.description}
          images={config.images}
        />
      )
    }

    case METRIC.USER: {
      return (
        <SocialProfileJsonLd
          type="Person"
          name={config.name}
          url={config.url}
          sameAs={[]}
        />
      )
    }

    default: {
      return (
        <NextSeo
          title={config.title}
          description={config.description}
          openGraph={{
            url: config.url,
            title: config.title,
            description: config.description,
          }}
          additionalMetaTags={[
            {
              name: 'keywords',
              content: 'codeing,community',
            },
          ]}
        />
      )
    }
  }
}

SEO.propTypes = {
  metric: T.string.isRequired,
  config: T.object.isRequired, // TODO:
}

export default SEO
