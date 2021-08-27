import F from '../fragments'

export const job = `
  query job($id: ID!, $userHasLogin: Boolean!) {
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
      collectsCount
      viewerHasCollected @include(if: $userHasLogin)
      favoritedCategoryId @include(if: $userHasLogin)
      pagedCommentsParticipators {
        entries {
          ${F.author}
        }
        totalCount
      }
      originalCommunity {
        ${F.community}
      }
      communities {
        ${F.community}
      }
      articleTags {
        ${F.tag}
      }
    }
  }
`
export const pagedJobs = `
  query($filter: PagedJobsFilter, $userHasLogin: Boolean!) {
    pagedJobs(filter: $filter) {
      entries {
        ${F.job}
        isPinned
        author {
          ${F.author}
        }
        communities {
          ${F.community}
        }
        articleTags {
          ${F.tag}
        }
        originalCommunity {
          ${F.community}
          subscribersCount
        }
        viewerHasViewed @include(if: $userHasLogin)
      }
      ${F.pagedCounts}
    }
  }
`
