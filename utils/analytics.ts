import type { GA_EVENT } from '@/spec'

import { Global } from './helper'

// https://analytics.google.com/analytics/web/?hl=zh-CN&pli=1#/embed/report-home/a39874160w174341184p173551323

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url: string): void => {
  // @ts-ignore
  Global.gtag('config', process.env.NEXT_PUBLIC_GA_TRACING_ID, {
    page_location: url,
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
const event = (e: GA_EVENT): void => {
  const { action, category, label, value } = e

  // @ts-ignore
  Global.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}

const GA = {
  pageview,
  event,
}

export default GA
