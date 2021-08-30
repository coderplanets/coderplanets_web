import { SITE_URL } from '@/config'

import type { TCommunity, TThread } from '@/spec'
import { ROUTE } from '@/constant'

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

export const exploreSEO = (): TSEO => {
  return {
    url: `${SITE_URL}/${ROUTE.EXPLORE}`,
    title: '社区索引 | CP',
    description: 'coderplanets 子社区索引',
  }
}

export const worksSEO = (): TSEO => {
  return {
    url: `${SITE_URL}/${ROUTE.WORKS}`,
    title: '作品集市 | coderplanets',
    description: '有趣有爱的作品分享',
  }
}

export const membershipSEO = (): TSEO => {
  return {
    url: `${SITE_URL}/${ROUTE.MEMBERSHIP}`,
    title: '升舱 | CP',
    description: '升级高级账户',
  }
}

export const meetupsSEO = (): TSEO => {
  return {
    url: `${SITE_URL}/${ROUTE.MEETUPS}`,
    title: '小聚 | CP',
    description: '来和志同道合的朋友一起聊聊',
  }
}

export const sponsorSEO = (): TSEO => {
  return {
    url: `${SITE_URL}/${ROUTE.SPONSOR}`,
    title: '赞助商 | CP',
    description: '赞助商',
  }
}
