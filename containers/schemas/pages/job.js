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
      pagedCommentsParticipators {
        entries {
          ${F.author}
        }
        totalCount
      }
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
  query($filter: PagedArticleFilter, $userHasLogin: Boolean!) {
    pagedJobs(filter: $filter) {
      entries {
        ${F.job}
        pin
        author {
          ${F.author}
        }
        communities {
          ${F.community}
        }
        tags {
          ${F.tag}
        }
        viewerHasViewed @include(if: $userHasLogin)
      }
      ${F.pagedCounts}
    }
  }
`
