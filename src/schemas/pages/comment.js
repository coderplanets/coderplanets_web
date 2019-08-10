import F from '../fragments'

export const pagedComments = `
  query pagedComments(
    $id: ID!
    $filter: CommentsFilter!
    $thread: CmsThread
    $userHasLogin: Boolean!
  ) {
    pagedComments(id: $id, filter: $filter, thread: $thread) {
      entries {
        ${F.comment}
        viewerHasLiked @include(if: $userHasLogin)
        viewerHasDisliked @include(if: $userHasLogin)
        replyTo {
          id
          body
          floor
          author {
            ${F.author}
          }
        }
        replies(filter: { first: 5 }) {
          id
          author {
            ${F.author}
          }
        }
        repliesCount
      }
      ${F.pagedCounts}
    }
  }
`

export const holder = 1
