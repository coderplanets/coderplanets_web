import gql from 'graphql-tag'

const comments = gql`
  query comments($id: ID!, $filter: CommentsFilter!, $userHasLogin: Boolean!) {
    comments(id: $id, filter: $filter) {
      entries {
        id
        body
        floor
        author {
          id
          nickname
          avatar
        }
        viewerHasLiked @include(if: $userHasLogin)
        viewerHasDisliked @include(if: $userHasLogin)
        replyTo {
          id
          body
          floor
          author {
            id
            avatar
            nickname
          }
        }
        replies(filter: { first: 5 }) {
          id
          author {
            id
            avatar
            nickname
          }
        }
        repliesCount
        likesCount
        dislikesCount
        insertedAt
        updatedAt
      }
      pageNumber
      pageSize
      totalCount
      totalPages
    }
  }
`
const createComment = gql`
  mutation($part: CmsPart, $id: ID!, $body: String!) {
    createComment(part: $part, id: $id, body: $body) {
      id
      body
    }
  }
`
const replyComment = gql`
  mutation($part: CmsPart, $id: ID!, $body: String!) {
    replyComment(part: $part, id: $id, body: $body) {
      id
      body
    }
  }
`
const deleteComment = gql`
  mutation($part: CmsPart, $id: ID!) {
    deleteComment(part: $part, id: $id) {
      id
    }
  }
`

const likeComment = gql`
  mutation($part: CmsPart, $id: ID!) {
    likeComment(part: $part, id: $id) {
      id
      viewerHasLiked
      likesCount
    }
  }
`
const undoLikeComment = gql`
  mutation($part: CmsPart, $id: ID!) {
    undoLikeComment(part: $part, id: $id) {
      id
      viewerHasLiked
      likesCount
    }
  }
`
const dislikeComment = gql`
  mutation($part: CmsPart, $id: ID!) {
    dislikeComment(part: $part, id: $id) {
      id
      viewerHasDisliked
      dislikesCount
    }
  }
`
const undoDislikeComment = gql`
  mutation($part: CmsPart, $id: ID!) {
    undoDislikeComment(part: $part, id: $id) {
      id
      viewerHasDisliked
      dislikesCount
    }
  }
`

const schema = {
  comments,
  createComment,
  replyComment,
  deleteComment,
  likeComment,
  undoLikeComment,
  dislikeComment,
  undoDislikeComment,
}

export default schema
