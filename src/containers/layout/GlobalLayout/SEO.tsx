/*
 *
 * SEO for different pages
 *
 */

import { FC } from 'react'
import { NextSeo, BlogJsonLd, SocialProfileJsonLd } from 'next-seo'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'

type TProps = {
  metric: TMetric
  config: any
}

const SEO: FC<TProps> = ({ metric, config }) => {
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

export default SEO
