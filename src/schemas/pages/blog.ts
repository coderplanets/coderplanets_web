import F from '../fragments'

export const blog = `
  query blog($id: ID!, $userHasLogin: Boolean!) {
    blog(id: $id) {
      ${F.article}
      ${F.articleDetail}
    }
  }
`
export const pagedBlogs = `
  query($filter: PagedBlogsFilter, $userHasLogin: Boolean!) {
    pagedBlogs(filter: $filter) {
      entries {
        ${F.article}
        meta {
          thread
        }
        digest
        linkAddr
        commentsParticipants {
          ${F.author}
        }
        viewerHasViewed @include(if: $userHasLogin)
      }
      ${F.pagedCounts}
    }
  }
`
