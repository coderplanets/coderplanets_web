import { post, job, repo, tag, author, pagedCounts } from './base'

export const pagedPosts = `
  entries {
    ${post}
    digest
    commentsCount
    commentsParticipators(filter: { first: 5 }) {
      ${author}
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

export const pagedRepos = `
  entries {
    ${repo}
    views
    author {
      ${author}
    }
  }
  ${pagedCounts}
`
