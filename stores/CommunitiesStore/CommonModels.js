import { types as t } from 'mobx-state-tree'

const baseInfo = {
  title: t.string,
  desc: t.string,
  raw: t.string,
}
export const Map = t.model('Map', {
  ...baseInfo,
})

export const Posts = t.model('Posts', {
  ...baseInfo,
})

export const News = t.model('Posts', {
  ...baseInfo,
})

export const Meetups = t.model('Meetups', {
  ...baseInfo,
})

export const Users = t.model('Users', {
  ...baseInfo,
})

export const Videos = t.model('Videos', {
  ...baseInfo,
})

export const Tuts = t.model('Tuts', {
  ...baseInfo,
})

export const Jobs = t.model('Jobs', {
  ...baseInfo,
})
