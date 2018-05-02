import gql from 'graphql-tag'

const comments = gql`
  query comments($id: ID!, $filter: PagedFilter!) {
    comments(id: $id, filter: $filter) {
      entries {
        id
        body
        author {
          id
          nickname
          avatar
        }
        replyTo {
          id
          body
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

const schema = {
  comments,
  createComment,
}

export default schema
