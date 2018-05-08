import gql from 'graphql-tag'

const comments = gql`
  query comments($id: ID!, $filter: CommentsFilter!) {
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

const schema = {
  comments,
  createComment,
  replyComment,
}

export default schema
