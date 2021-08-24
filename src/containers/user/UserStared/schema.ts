import { gql } from '@urql/core'
import { F } from '@/schemas'

const staredPosts = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    staredPosts(userId: $userId, filter: $filter) {
      entries {
        id
        title
        digest
        insertedAt
        updatedAt
        views
        author {
          ${F.author}
        }
        commentsParticipantsCount
        commentsParticipants(filter: { first: 5 }) {
          ${F.author}
        }
      }
      totalPages
      totalCount
      pageSize
      pageNumber
    }
  }
`

const staredJobs = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    staredJobs(userId: $userId, filter: $filter) {
      entries {
        id
        title
        company
        companyLogo
        tags {
          id
          title
          color
        }
        author {
          id
          nickname
          avatar
        }
        views
        insertedAt
        updatedAt
      }
      totalPages
      totalCount
      pageSize
      pageNumber
    }
  }
`

const schema = {
  staredPosts,
  staredJobs,
}

export default schema
