import gql from 'graphql-tag'

const post = gql`
  query post($id: ID!, $userHasLogin: Boolean!) {
    post(id: $id) {
      id
      title
      body
      views
      linkAddr
      insertedAt
      updatedAt
      favoritedCount
      starredCount
      viewerHasFavorited @include(if: $userHasLogin)
      viewerHasStarred @include(if: $userHasLogin)
    }
  }
`

const reactionResult = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      title
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

const schema = {
  post,
  // viewerReactions,
  reaction,
  undoReaction,
  reactionResult,
}

export default schema
