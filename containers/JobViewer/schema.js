import gql from 'graphql-tag'
import { F } from '../schemas'

const job = gql`
  query($id: ID!, $userHasLogin: Boolean!) {
    job(id: $id) {
      ${F.job}
      body
      author {
        ${F.author}
      }
      tags {
        ${F.tag}
      }
      communities {
        ${F.community}
      }
      commentsParticipators {
        ${F.author}
      }
      favoritedCount
      viewerHasViewed @include(if: $userHasLogin)
      viewerHasFavorited @include(if: $userHasLogin)
      favoritedCategoryId @include(if: $userHasLogin)
    }
  }
`
const jobReactionRes = gql`
  query($id: ID!) {
    job(id: $id) {
      id
      favoritedCount
      viewerHasFavorited
      favoritedCategoryId
    }
  }
`

// TODO: move below schema to fragment
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

const schema = {
  job,
  jobReactionRes,
  reaction,
  undoReaction,
  setTag,
  unsetTag,
}

export default schema
