export const community = `
  id
  title
  desc
  raw
  logo
  threads {
    title
    raw
  }
  subscribersCount
  editorsCount
  postsCount
`

export const partialTags = `
  id
  title
  color
  thread
`
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
