import F from '../fragments'

export const post = `
  query post($id: ID!, $userHasLogin: Boolean!) {
    post(id: $id) {
      ${F.article}
      ${F.articleDetail}
    }
  }
`
export const pagedPosts = `
  query($filter: PagedPostsFilter, $userHasLogin: Boolean!) {
    pagedPosts(filter: $filter) {
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
        viewerHasUpvoted @include(if: $userHasLogin)
      }
      ${F.pagi}
    }
  }
`
