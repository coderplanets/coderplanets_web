import F from '../fragments'

export const post = `
  query post($id: ID!, $userHasLogin: Boolean!) {
    post(id: $id) {
      ${F.article}
      document {
        bodyHtml
      }
      linkAddr
      collectsCount
      viewerHasCollected @include(if: $userHasLogin)
      upvotesCount
      viewerHasUpvoted @include(if: $userHasLogin)
    }
  }
`
export const pagedPosts = `
  query($filter: PagedPostsFilter, $userHasLogin: Boolean!) {
    pagedPosts(filter: $filter) {
      entries {
        ${F.article}
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
