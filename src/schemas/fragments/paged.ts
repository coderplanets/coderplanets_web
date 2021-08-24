import { post, job, repo, tag, author, pagedCounts } from './base'

export const pagedPosts = `
  entries {
    ${post}
    digest
    commentsCount
    commentsParticipants {
      ${author}
    }
    articleTags {
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
    articleTags {
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
