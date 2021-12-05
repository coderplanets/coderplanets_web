import type { TGAEvent } from '@/spec'

import { Global } from './helper'

// see: https://github.com/vercel/next.js/discussions/14980
const gtag = (): void => {
  // @ts-ignore
  Global.dataLayer && Global.dataLayer.push(arguments)
}

// https://analytics.google.com/analytics/web/?hl=zh-CN&pli=1#/embed/report-home/a39874160w174341184p173551323

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url: string): void => {
  // @ts-ignore
  gtag?.('config', process.env.NEXT_PUBLIC_GA_TRACING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
/*
  report event like this:
  GA.event({
    action: 'submit_form',
    category: 'Contact',
    label: this.state.message
  })
*/
const event = (e: TGAEvent): void => {
  const { action, category, label, value } = e

  // @ts-ignore
  gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}

const GA = {
  pageview,
  event,
  TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACING_ID,
}

export default GA
