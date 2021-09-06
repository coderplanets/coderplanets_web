import F from '../fragments'

export const radar = `
  query radar($id: ID!, $userHasLogin: Boolean!) {
    radar(id: $id) {
      ${F.article}
      ${F.articleDetail}
    }
  }
`
export const pagedRadars = `
  query($filter: PagedRadarsFilter, $userHasLogin: Boolean!) {
    pagedRadars(filter: $filter) {
      entries {
        ${F.article}
        ${F.pageArticleMeta}
        digest
        linkAddr
        viewerHasViewed @include(if: $userHasLogin)
      }
      ${F.pagedCounts}
    }
  }
`
