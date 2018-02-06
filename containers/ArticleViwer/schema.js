import gql from 'graphql-tag'

const post = gql`
  query post($id: ID!) {
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
    }
  }
`
const viewerReactions = gql`
  query post($id: ID!) {
    post(id: $id) {
      viewerHasFavorited
      viewerHasStarred
    }
  }
`
const reactionResult = gql`
  query post($id: ID!) {
    post(id: $id) {
      viewerHasFavorited
      viewerHasStarred
      favoritedCount
      starredCount
    }
  }
`

const reaction = gql`
  mutation($id: ID!, $action: String!, $type: String!) {
    reaction(id: $id, action: $action, type: $type) {
      id
      title
    }
  }
`

const undoReaction = gql`
  mutation($id: ID!, $action: String!, $type: String!) {
    undoReaction(id: $id, action: $action, type: $type) {
      id
      title
    }
  }
`

const schema = {
  post,
  viewerReactions,
  reaction,
  undoReaction,
  reactionResult,
}

export default schema
