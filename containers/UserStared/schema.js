import gql from 'graphql-tag'

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
const staredVideos = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    staredVideos(userId: $userId, filter: $filter) {
      entries {
        id
        title
        poster
        desc
        duration
        source
        views
        originalAuthor
        originalAuthorLink
        author {
          id
          avatar
          nickname
        }
        insertedAt
        publishAt
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
  staredVideos,
}

export default schema
