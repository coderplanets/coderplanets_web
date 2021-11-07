import F from '../fragments'

export const pagedArticleTags = `
  query($filter: ArticleTagsFilter) {
    pagedArticleTags(filter: $filter) {
      entries{
        ${F.tag}
      }
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
      ${F.pagi}
    }
  }
`
