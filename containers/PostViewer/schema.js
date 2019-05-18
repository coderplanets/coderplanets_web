import gql from 'graphql-tag'
import { F, P } from '@schemas'

const post = gql`
  query post($id: ID!, $userHasLogin: Boolean!) {
    post(id: $id) {
      ${F.post}
      body
      author {
        ${F.author}
      }
      tags {
        ${F.tag}
      }
      origialCommunity {
        ${F.community}
      }
      commentsParticipators {
        ${F.author}
      }
      commentsCount
      linkAddr
      insertedAt
      favoritedCount
      starredCount
      viewerHasViewed @include(if: $userHasLogin)
      viewerHasFavorited @include(if: $userHasLogin)
      viewerHasStarred @include(if: $userHasLogin)
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
      commentsParticipators {
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
