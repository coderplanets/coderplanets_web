import gql from 'graphql-tag'
import { F } from 'schemas'

const pagedComments = gql`
  query pagedComments(
    $id: ID!
    $filter: CommentsFilter!
    $thread: CmsThread
    $userHasLogin: Boolean!
  ) {
    pagedComments(id: $id, filter: $filter, thread: $thread) {
      entries {
        ${F.comment}
        viewerHasLiked @include(if: $userHasLogin)
        viewerHasDisliked @include(if: $userHasLogin)
        replyTo {
          id
          body
          floor
          author {
            ${F.author}
          }
        }
        replies(filter: { first: 5 }) {
          id
          author {
            ${F.author}
          }
        }
        repliesCount
      }
      ${F.pagedCounts}
    }
  }
`
const createComment = gql`
  mutation($community: String!, $thread: CmsThread, $id: ID!, $body: String!) {
    createComment(
      community: $community
      thread: $thread
      id: $id
      body: $body
    ) {
      id
      body
    }
  }
`
const replyComment = gql`
  mutation($thread: CmsThread, $id: ID!, $body: String!) {
    replyComment(thread: $thread, id: $id, body: $body) {
      id
      body
    }
  }
`
const deleteComment = gql`
  mutation($thread: CmsThread, $id: ID!) {
    deleteComment(thread: $thread, id: $id) {
      id
    }
  }
`

const likeComment = gql`
  mutation($thread: CmsThread, $id: ID!) {
    likeComment(thread: $thread, id: $id) {
      id
      viewerHasLiked
      likesCount
    }
  }
`
const undoLikeComment = gql`
  mutation($thread: CmsThread, $id: ID!) {
    undoLikeComment(thread: $thread, id: $id) {
      id
      viewerHasLiked
      likesCount
    }
  }
`
const dislikeComment = gql`
  mutation($thread: CmsThread, $id: ID!) {
    dislikeComment(thread: $thread, id: $id) {
      id
      viewerHasDisliked
      dislikesCount
    }
  }
`
const undoDislikeComment = gql`
  mutation($thread: CmsThread, $id: ID!) {
    undoDislikeComment(thread: $thread, id: $id) {
      id
      viewerHasDisliked
      dislikesCount
    }
  }
`
const searchUsers = gql`
  query($name: String!) {
    searchUsers(name: $name) {
      entries {
        ${F.author}
      }
    }
  }
`

const schema = {
  pagedComments,
  createComment,
  replyComment,
  deleteComment,
  likeComment,
  undoLikeComment,
  dislikeComment,
  undoDislikeComment,
  searchUsers,
}

export default schema
