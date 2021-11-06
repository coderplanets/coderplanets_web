import { article, repo, author, pagi } from './base'

export const pagedPosts = `
  entries {
    ${article}
    commentsParticipants {
      ${author}
    }
  }
  ${pagi}
`
export const pagedJobs = `
  entries {
    ${article}
    company
    companyLink
   }
  ${pagi}
`

export const pagedRepos = `
  entries {
    ${repo}
    views
    author {
      ${author}
    }
  }
  ${pagi}
`
