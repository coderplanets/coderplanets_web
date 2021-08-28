import { article, repo, author, pagedCounts } from './base'

export const pagedPosts = `
  entries {
    ${article}
    commentsParticipants {
      ${author}
    }
  }
  ${pagedCounts}
`
export const pagedJobs = `
  entries {
    ${article}
    company
    companyLink
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
