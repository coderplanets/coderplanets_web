import { SITE_URL } from '@/config'

import type { TCommunity, TThread } from '@/spec'
import { thread2URLpath } from './route'

type TSEO = {
  url: string
  title: string
  description: string
}

export const communitySEO = (community: TCommunity, thread: TThread): TSEO => {
  const { raw, title, desc } = community

  return {
    url: `${SITE_URL}/${raw}/${thread2URLpath(thread)}`,
    title: raw === 'home' ? 'CoderPlanets' : `${title} | CP`,
    description: `${desc}`,
  }
}

export const holder = 1
