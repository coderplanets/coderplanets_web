import F from '../fragments'

export const job = `
  query job($id: ID!, $userHasLogin: Boolean!) {
    job(id: $id) {
      ${F.article}
      body
      linkAddr
      collectsCount
      viewerHasCollected @include(if: $userHasLogin)
      favoritedCategoryId @include(if: $userHasLogin)
      pagedCommentsParticipators {
        entries {
          ${F.author}
        }
        totalCount
      }
    }
  }
`
export const pagedJobs = `
  query($filter: PagedJobsFilter, $userHasLogin: Boolean!) {
    pagedJobs(filter: $filter) {
      entries {
        ${F.article}
        linkAddr
        company
        companyLink
        viewerHasViewed @include(if: $userHasLogin)
      }
      ${F.pagedCounts}
    }
  }
`
