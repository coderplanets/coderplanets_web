import { gql } from '@urql/core'
import { F, P } from '@/schemas'

const post = gql`
  query post($id: ID!, $userHasLogin: Boolean!) {
    post(id: $id) {
      ${F.article}
      body
      commentsParticipants {
        ${F.author}
      }
      collectsCount
      upvotesCount
      viewerHasViewed @include(if: $userHasLogin)
      viewerHasCollected @include(if: $userHasLogin)
      viewerHasUpvoted @include(if: $userHasLogin)
      favoritedCategoryId @include(if: $userHasLogin)
    }
  }
`
const setTag = gql`
  ${P.setTag}
`
const unsetTag = gql`
  ${P.unsetTag}
`

const postComment = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      commentsParticipants {
        ${F.author}
      }
      commentsCount
    }
  }
`

const schema = {
  post,
  setTag,
  unsetTag,
  postComment,
}

export default schema
