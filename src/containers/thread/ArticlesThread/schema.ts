import { gql } from '@urql/core'
import { P, F } from '@/schemas'

import { plural } from '@/utils/helper'

const getPagedArticlesSchema = (thread) => {
  return gql`
    ${P[`paged${plural(thread, 'titleCase')}`]}
  `
}

const getArticleFreshSchema = (thread) => {
  // TODO: commentParticipants
  return gql`
    query post($id: ID!, $userHasLogin: Boolean!) {
      post(id: $id) {
        id
        views
        upvotesCount
        commentsCount
        viewerHasViewed @include(if: $userHasLogin)
        viewerHasUpvoted @include(if: $userHasLogin)
      }
    }
  `
}

const pagedArticleTags = gql`
  ${P.pagedArticleTags}
`

const schema = {
  pagedArticleTags,
  getPagedArticlesSchema,
  getArticleFreshSchema,
  getUpvoteSchema: F.getUpvoteSchema,
  getUndoUpvoteSchema: F.getUndoUpvoteSchema,
}

export default schema
