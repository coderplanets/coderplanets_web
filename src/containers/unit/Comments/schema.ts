import { gql } from '@urql/core'
import { F } from '@/schemas'

// viewerHasLiked @include(if: $userHasLogin)
// viewerHasDisliked @include(if: $userHasLogin)

const pagedComments = gql`
  query pagedComments(
    $id: ID!
    $thread: Thread,
    $mode: CommentsMode,
    $filter: CommentsFilter!
  ) {
    pagedComments(id: $id, thread: $thread, mode: $mode, filter: $filter) {
      entries {
        ${F.comment}
      }
      ${F.pagedCounts}
    }
  }
`
const createComment = gql`
  mutation ($thread: Thread!, $id: ID!, $body: String!) {
    createComment(thread: $thread, id: $id, body: $body) {
      id
      bodyHtml
    }
  }
`
const updateComment = gql`
  mutation ($thread: CmsThread!, $id: ID!, $body: String!) {
    updateComment(thread: $thread, id: $id, body: $body) {
      id
      body
    }
  }
`
const oneComment = gql`
  query ($id: ID!) {
    oneComment(id: $id) {
      id
      body
    }
  }
`

const replyComment = gql`
  mutation replyComment(
    $community: String!
    $thread: CmsThread
    $id: ID!
    $body: String!
    $mentionUsers: [Ids]
  ) {
    replyComment(
      community: $community
      thread: $thread
      id: $id
      body: $body
      mentionUsers: $mentionUsers
    ) {
      id
      body
    }
  }
`
const deleteComment = gql`
  mutation ($thread: CmsThread, $id: ID!) {
    deleteComment(thread: $thread, id: $id) {
      id
    }
  }
`

const upvoteComment = gql`
  mutation ($id: ID!) {
    upvoteComment(id: $id) {
      id
      meta {
        isArticleAuthorUpvoted
      }
      upvotesCount
      viewerHasUpvoted
      replyToId
    }
  }
`
const undoUpvoteComment = gql`
  mutation ($id: ID!) {
    undoUpvoteComment(id: $id) {
      id
      meta {
        isArticleAuthorUpvoted
      }
      upvotesCount
      viewerHasUpvoted
      replyToId
    }
  }
`
const emotionToComment = gql`
  mutation ($id: ID!, $emotion: CommentEmotion!) {
    emotionToComment(id: $id, emotion: $emotion) {
      id
      replyToId
      emotions {
        ${F.emotionQuery}
      }
    }
  }
`
const undoEmotionToComment = gql`
  mutation ($id: ID!, $emotion: CommentEmotion!) {
    undoEmotionToComment(id: $id, emotion: $emotion) {
      id
      replyToId
      emotions {
        ${F.emotionQuery}
      }
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
  oneComment,
  updateComment,
  replyComment,
  deleteComment,
  searchUsers,
  upvoteComment,
  undoUpvoteComment,
  emotionToComment,
  undoEmotionToComment,
}

export default schema
