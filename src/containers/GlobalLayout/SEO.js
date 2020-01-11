/*
 *
 * SEO for different pages
 *
 */

import React from 'react'
import T from 'prop-types'
import { NextSeo } from 'next-seo'

const SEO = (page, config) => {
  switch (page) {
    case 'user': {
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
  page: T.string.isRequired,
  seoConfig: T.object.isRequired, // TODO:
}

export default SEO
