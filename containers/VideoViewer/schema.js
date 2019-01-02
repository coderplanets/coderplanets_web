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
const reaction = gql`
  mutation($id: ID!, $action: String!, $thread: CmsThread!) {
    reaction(id: $id, action: $action, thread: $thread) {
      id
    }
  }
`
const undoReaction = gql`
  mutation($id: ID!, $action: String!, $thread: CmsThread!) {
    undoReaction(id: $id, action: $action, thread: $thread) {
      id
    }
  }
`
const pinVideo = gql`
  mutation($id: ID!, $communityId: ID!) {
    pinVideo(id: $id, communityId: $communityId) {
      id
    }
  }
`
const undoPinVideo = gql`
  mutation($id: ID!, $communityId: ID!) {
    undoPinVideo(id: $id, communityId: $communityId) {
      id
    }
  }
`

const schema = {
  video,
  reaction,
  undoReaction,
  videoReactionRes,
  pinVideo,
  undoPinVideo,
}

export default schema
