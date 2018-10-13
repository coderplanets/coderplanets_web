import gql from 'graphql-tag'

const simpleMutation = gql`
  mutation($id: ID!) {
    post(id: $id) {
      id
    }
  }
`
const publishedPosts = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    publishedPosts(userId: $userId, filter: $filter) {
      entries {
        id
        title
        digest
        insertedAt
        updatedAt
        views
        author {
          id
          avatar
          nickname
        }
        commentsParticipatorsCount
        commentsParticipators(filter: { first: 5 }) {
          id
          nickname
          avatar
        }
      }
      totalPages
      totalCount
      pageSize
      pageNumber
    }
  }
`

const schema = {
  simpleMutation,
  publishedPosts,
}

export default schema
