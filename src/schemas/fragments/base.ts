import { values, flatten } from 'ramda'

import { EMOTION } from '@/constant'
import { titleCase } from '@/utils/helper'

export const community = `
  id
  title
  raw
  index
  desc
  logo
  subscribersCount
`
export const tag = `
  title
  raw
  color
  thread
  group
`
export const author = `
  login
  nickname
  avatar
  bio
`
export const article = `
  id
  isPinned
  title
  linkAddr
  copyRight
  insertedAt
  activeAt
  updatedAt
  views
  commentsCount
  upvotesCount
  commentsParticipantsCount
 
  author {
    ${author}
  }
  originalCommunity {
    ${community}
  }
  communities {
    ${community}
  }
  articleTags {
    ${tag}
  }
`
export const articleDetail = `
  meta {
    thread
    isEdited
    latestUpvotedUsers {
      login
      avatar
      nickname
    }
  }

  document {
    bodyHtml
  }

  commentsParticipants {
    ${author}
  }

  collectsCount
  archivedAt
  isArchived

  viewerHasCollected @include(if: $userHasLogin)
  viewerHasUpvoted @include(if: $userHasLogin)
`
export const pageArticleMeta = `
  meta {
    thread
    latestUpvotedUsers {
      login
      avatar
      nickname
    }
  }
`
export const post = `
  id
  title
  insertedAt
  updatedAt
  views
`
export const repo = `
  id
  views
  title
  ownerName
  desc
  insertedAt
  prsCount
  forkCount
  starCount
  license
  ownerUrl
  repoUrl
  homepageUrl
  releaseTag
  primaryLanguage {
    color
    name
  }
  contributors {
    avatar
    htmlUrl
    nickname
  }
`
export const userSocial = `
  qq
  weibo
  weichat
  github
  zhihu
  douban
  twitter
  facebook
  dribble
  instagram
  pinterest
  huaban
`

export const user = `
  sex
  ${author}
  bio
  location
  social {
    ${userSocial}
  }
  followersCount
  followingsCount
`
export const c11n = `
  bannerLayout
  contentDivider
  markViewed
  displayDensity
  theme
`
export const achievement = `
  reputation
  articlesUpvotesCount
  articlesCollectsCount
  donateMember
  seniorMember
  sponsorMember
`
export const userBackgrounds = `
  workBackgrounds {
    company
    title
  }
  educationBackgrounds {
    school
    major
  }
`
export const userContributes = `
  records {
    count
    date
  }
  startDate
  endDate
  totalCount
`

const emotionQuery = flatten(
  values(EMOTION).map((emotion) => {
    return [
      `${emotion}Count`,
      `viewerHas${titleCase(emotion)}ed`,
      `latest${titleCase(emotion)}Users { login nickname }`,
    ]
  }),
).join(' ')

// comment
export const comment = `
  id
  bodyHtml
  author {
    ${author}
  }

  meta {
    isArticleAuthorUpvoted
  }

  emotions {
    ${emotionQuery}
  }

  isPinned
  floor
  upvotesCount
  isArticleAuthor

  replyTo {
    id
    bodyHtml
    floor
    isArticleAuthor
    author {
      ${author}
    }
  }
  viewerHasUpvoted
  replies {
    id
    bodyHtml
    author {
      ${author}
    }
  }
  repliesCount
  insertedAt
  updatedAt
`
export const commentParent = `
  id
  title
  commentsCount
  author {
    ${author}
  }
  communities {
    ${community}
  }
  originalCommunity {
    ${community}
  }
`
export const pagedCounts = `
  totalPages
  totalCount
  pageSize
  pageNumber
`
