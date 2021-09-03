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
  id
  login
  nickname
  avatar
`
export const article = `
  id
  isPinned
  title
  linkAddr
  copyRight
  insertedAt
  activeAt
  views
  commentsCount
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
  updatedAt

  document {
    bodyHtml
  }

  linkAddr
  collectsCount
  upvotesCount
  archivedAt
  isArchived

  viewerHasCollected @include(if: $userHasLogin)
  viewerHasUpvoted @include(if: $userHasLogin)
`
export const pageArticleMeta = `
  meta {
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

// comment
export const comment = `
  id
  body
  floor
  author {
    id
    nickname
    avatar
    login
  }
  likesCount
  dislikesCount
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
