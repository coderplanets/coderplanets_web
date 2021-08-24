import F from '../fragments'

export const pagedArticleTags = `
  query($filter: ArticleTagsFIlter) {
    pagedArticleTags(filter: $filter) {
      ${F.tag}
    }
  }
`

export const pagedCategories = `
  query($filter: PagedFilter!) {
    pagedCategories(filter: $filter) {
      entries {
        id
        title
        raw
        index
      }
      ${F.pagedCounts}
    }
  }
`
