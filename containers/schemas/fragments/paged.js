import { post, job, tag, author, pagedCounts } from './base'

export const pagedPosts = `
  entries {
    ${post}
    digest
    commentsCount
    commentsParticipators(filter: { first: 5 }) {
      id
      nickname
      avatar
    }
    tags {
      ${tag}
    }
    author {
      ${author}
    }
  }
  ${pagedCounts}
`
export const pagedJobs = `
  entries {
    ${job}
    tags {
      ${tag}
    }
    author {
      ${author}
    }
   }
  ${pagedCounts}
`

export const pagedVideos = `
  entries {
    id
    title
    poster
    desc
    insertedAt
    publishAt
    duration
    source
    views
    originalAuthor
    originalAuthorLink
    author {
      ${author}
    }
  }
  ${pagedCounts}
`

export const pagedRepos = `
  entries {
    id
    title
    ownerName
    desc
    license
    releaseTag
    insertedAt
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
      ${author}
    }
  }
  ${pagedCounts}
`
