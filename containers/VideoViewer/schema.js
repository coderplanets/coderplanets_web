import gql from 'graphql-tag'

const video = gql`
  query($id: ID!, $userHasLogin: Boolean!) {
    video(id: $id) {
      id
      title
      poster
      desc
      duration
      author {
        id
        nickname
        avatar
      }
      source
      link
      originalAuthor
      originalAuthorLink
      views
      publishAt
      insertedAt
      updatedAt
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

const schema = {
  video,
  reaction,
  undoReaction,
  videoReactionRes,
}

export default schema
