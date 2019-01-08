import gql from 'graphql-tag'
import { F } from '../schemas'

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
const setTag = gql`
  mutation($thread: String!, $id: ID!, $tagId: ID!, $communityId: ID!) {
    setTag(thread: $thread, id: $id, tagId: $tagId, communityId: $communityId) {
      id
      title
    }
  }
`
const unsetTag = gql`
  mutation($thread: String!, $id: ID!, $tagId: ID!, $communityId: ID!) {
    unsetTag(
      thread: $thread
      id: $id
      tagId: $tagId
      communityId: $communityId
    ) {
      id
      title
    }
  }
`
const postReactionRes = gql`
  query($id: ID!) {
    post(id: $id) {
      id
      favoritedCount
      starredCount
      viewerHasFavorited
      viewerHasStarred
      favoritedCategoryId
    }
  }
`

const schema = {
  post,
  postReactionRes,
  reaction,
  undoReaction,
  setTag,
  unsetTag,
}

export default schema
