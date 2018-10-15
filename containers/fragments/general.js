export const communityFragment = `
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

export const partialTagsFragment = `
  id
  title
  color
  thread
`
