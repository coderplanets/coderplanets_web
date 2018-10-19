import { post, job, video, tag, author, pagedCounts } from './base'

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
    ${video}
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
