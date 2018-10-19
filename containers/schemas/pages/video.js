import F from '../fragments'

export const video = 1

export const pagedVideos = `
  query($filter: PagedArticleFilter) {
    pagedVideos(filter: $filter) {
      entries {
        id
        title
        poster
        desc
        insertedAt
        publishAt
        duration
        source
        views
        originalAuthor
        originalAuthorLink
        author {
          ${F.author}
        }
      }
      ${F.pagedCounts}
    }
  }
`
