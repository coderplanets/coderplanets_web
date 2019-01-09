import gql from 'graphql-tag'
import { F } from '../schemas'

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

const schema = {
  video,
  videoReactionRes,
}

export default schema
