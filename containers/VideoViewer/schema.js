import gql from 'graphql-tag'
import { F, P } from '../schemas'

const video = gql`
  query($id: ID!, $userHasLogin: Boolean!) {
    video(id: $id) {
      ${F.video}
      link
      author {
        ${F.author}
      }
      favoritedCount
      starredCount
      viewerHasFavorited @include(if: $userHasLogin)
      viewerHasStarred @include(if: $userHasLogin)
      favoritedCategoryId @include(if: $userHasLogin)
    }
  }
`
const videoReactionRes = gql`
  query($id: ID!) {
    video(id: $id) {
      id
      favoritedCount
      starredCount
      viewerHasFavorited
      viewerHasStarred
    }
  }
`
const reaction = gql`
  ${P.reaction}
`
const undoReaction = gql`
  ${P.undoReaction}
`

const schema = {
  video,
  reaction,
  undoReaction,
  videoReactionRes,
}

export default schema
