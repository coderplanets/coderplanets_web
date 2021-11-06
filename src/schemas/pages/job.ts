import F from '../fragments'

export const job = `
  query job($id: ID!, $userHasLogin: Boolean!) {
    job(id: $id) {
      ${F.article}
      ${F.articleDetail}
      company
      companyLink
    }
  }
`
export const pagedJobs = `
  query($filter: PagedJobsFilter, $userHasLogin: Boolean!) {
    pagedJobs(filter: $filter) {
      entries {
        ${F.article}
        ${F.pageArticleMeta}
        digest
        linkAddr
        company
        companyLink
        viewerHasViewed @include(if: $userHasLogin)
        viewerHasUpvoted @include(if: $userHasLogin)
      }
      ${F.pagi}
    }
  }
`

export const pagedPublishedJobs = `
  query($login: String!, $filter: PagedFilter!, $userHasLogin: Boolean!) {
    pagedPublishedJobs(login: $login, filter: $filter) {
      entries {
        ${F.article}
        ${F.pageArticleMeta}
        digest
        linkAddr
        company
        companyLink
        viewerHasViewed @include(if: $userHasLogin)
        viewerHasUpvoted @include(if: $userHasLogin)
      }
      ${F.pagi}
    }
  }
`
