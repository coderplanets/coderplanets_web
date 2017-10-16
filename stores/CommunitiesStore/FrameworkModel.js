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

const FrameworkModel = t.model('FrameworkModel', {
  title: t.string,
  desc: t.string,
  raw: t.string,
  parent: t.string,
  posts: Posts,
  map: Map,
  news: News,
  meetups: Meetups,
  users: Users,
  videos: Videos,
  tuts: Tuts,
  jobs: Jobs,
  // github: Github
})

export default FrameworkModel
