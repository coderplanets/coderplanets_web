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
      ${F.pagi}
    }
  }
`

const pagedCommentReplies = gql`
  query($id: ID!, $filter: CommentsFilter!) {
    pagedCommentReplies(id: $id, filter: $filter) {
      entries {
        ${F.commentFields}

        replyTo {
          ${F.commentFields}
        }
      }
      ${F.pagi}
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
  mutation ($id: ID!, $body: String!) {
    updateComment(id: $id, body: $body) {
      id
      bodyHtml
      replyToId
    }
  }
`
const commentsState = gql`
  query ($id: ID!, $thread: Thread, $freshkey: String) {
    commentsState(id: $id, thread: $thread, freshkey: $freshkey) {
      totalCount
      isViewerJoined
      participantsCount

      participants {
        login
        nickname
        avatar
      }
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
  mutation ($id: ID!, $body: String!) {
    replyComment(id: $id, body: $body) {
      id
      bodyHtml
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

const pagedPublishedComments = gql`
  query pagedPublishedComments(
    $login: String!
    $thread: Thread,
    $filter: PagedFilter!
  ) {
    pagedPublishedComments(login: $login, thread: $thread, filter: $filter) {
      entries {
        ${F.comment}
        article {
          id
          title
          thread
          author {
            nickname
            login
          }
        }
      }
      ${F.pagi}
    }
  }
`

const schema = {
  pagedComments,
  pagedCommentReplies,
  createComment,
  oneComment,
  commentsState,
  updateComment,
  replyComment,
  deleteComment,
  searchUsers,
  upvoteComment,
  undoUpvoteComment,
  emotionToComment,
  undoEmotionToComment,
  pagedPublishedComments,
}

export default schema
