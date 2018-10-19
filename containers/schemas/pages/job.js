import F from '../fragments'

export const job = `
  query job($id: ID!) {
    job(id: $id) {
      ${F.job}
      body
      length
      author {
        ${F.author}
        bio
        location
        achievement {
          reputation
        }
        followersCount
        followingsCount
      }
      favoritedCount
      communities {
        ${F.community}
      }
      tags {
        ${F.tag}
      }
    }
  }
`
export const pagedJobs = `
  query($filter: PagedArticleFilter) {
    pagedJobs(filter: $filter) {
      entries {
        ${F.job}
        author {
          ${F.author}
        }
        communities {
          ${F.community}
        }
        tags {
          ${F.tag}
        }
      }
      ${F.pagedCounts}
    }
  }
`
