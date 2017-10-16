import { types as t } from 'mobx-state-tree'

import {
  Map,
  Posts,
  News,
  Meetups,
  Users,
  Videos,
  Tuts,
  Jobs,
} from './CommonModels'

const PlModel = t.model('PlModel', {
  title: t.string,
  desc: t.string,
  raw: t.string,
  map: Map,
  posts: Posts,
  news: News,
  meetups: Meetups,
  users: Users,
  videos: Videos,
  tuts: Tuts,
  jobs: Jobs,
})

export default PlModel
