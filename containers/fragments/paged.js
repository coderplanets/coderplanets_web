export const pagedPosts = `
  entries {
    id
    title
    digest
    insertedAt
    updatedAt
    views
    tags {
      title
      color
      id
    }
    author {
      id
      avatar
      nickname
    }
    commentsCount
    commentsParticipators(filter: { first: 5 }) {
      id
      nickname
      avatar
    }
  }
  totalCount
  pageSize
  pageNumber
`
export const pagedJobs = `
  entries {
    id
    title
    company
    companyLogo
    tags {
      id
      title
      color
    }
    author {
      id
      nickname
      avatar
    }
    views
    insertedAt
    updatedAt
   }
   totalCount
   pageSize
   pageNumber
`

export const pagedVideos = `
  entries {
    id
    title
    poster
    desc
    duration
    source
    views
    originalAuthor
    originalAuthorLink
    author {
      id
      avatar
      nickname
    }
    insertedAt
    publishAt
  }
  totalPages
  totalCount
  pageSize
  pageNumber
`

export const pagedRepos = `
  entries {
    id
    title
    ownerName
    desc
    license
    releaseTag
    contributors {
      avatar
      htmlUrl
      nickname
    }
    starCount
    forkCount
    primaryLanguage {
      name
      color
    }
    views
    author {
      id
      avatar
      nickname
    }
    insertedAt
  }
  totalPages
  totalCount
  pageSize
  pageNumber
`

export const pagedCounts = `
  totalPages
  totalCount
  pageSize
  pageNumber
`
