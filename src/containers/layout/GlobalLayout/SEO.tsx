/*
 *
 * SEO for different pages
 *
 */

import { FC } from 'react'
import Head from 'next/head'

import type { TMetric } from '@/spec'
// import { METRIC } from '@/constant'

type TProps = {
  metric: TMetric
  config: any
}

const SEO: FC<TProps> = ({ metric, config }) => {
  // switch (metric) {
  //   case METRIC.ARTICLE: {
  return (
    <Head>
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:url" content={config.url} />
      <meta property="og:type" content="website" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    // <BlogJsonLd
    //   url={config.url}
    //   title={config.title}
    //   datePublished={config.datePublished}
    //   dateModified={config.dateModified}
    //   authorName={config.authorName}
    //   description={config.description}
    //   images={config.images}
    // />
  )
}

export default SEO
