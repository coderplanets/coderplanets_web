export const community = `
  id
  title
  raw
  desc
  logo
`
export const post = `
  id
  title
  insertedAt
  updatedAt
  views
`
// TODO: more info
export const job = `
  id
  title
  company
  companyLogo
  views
  insertedAt
  updatedAt
`
export const tag = `
  id
  title
  color
`
export const author = `
  id
  avatar
  nickname
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
    id
    nickname
    avatar
  }
  communities {
    id
    title
    logo
    raw
  }
`

export const pagedCounts = `
  totalPages
  totalCount
  pageSize
  pageNumber
`
