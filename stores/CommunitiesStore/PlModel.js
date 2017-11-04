import { types as t } from 'mobx-state-tree'

import {
  Posts,
  Map,
  News,
  Meetups,
  Users,
  Videos,
  Tuts,
  CheatSheet,
  Jobs,
} from './CommonModels'

const PlModel = t.model('PlModel', {
  title: t.string,
  desc: t.string,
  raw: t.string,
  posts: Posts,
  news: News,
  tuts: Tuts,
  map: Map,
  meetups: Meetups,
  users: Users,
  videos: Videos,
  cheatsheet: CheatSheet,
  jobs: Jobs,
})

export default PlModel
