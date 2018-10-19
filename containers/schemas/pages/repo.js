import F from '../fragments'

export const repo = 1

export const pagedRepos = `
  query($filter: PagedArticleFilter) {
    pagedRepos(filter: $filter) {
      entries {
        id
        title
        ownerName
        desc
        license
        releaseTag
        insertedAt
        contributors {
          avatar
          htmlUrl
          nickname
        }
        starCount
        forkCount
        primaryLanguage {
          name
          color
        }
        views
        author {
          ${F.author}
        }
      }
      ${F.pagedCounts}
    }
  }
`
