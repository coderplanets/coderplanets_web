import gql from 'graphql-tag'

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
const publishedJobs = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    publishedJobs(userId: $userId, filter: $filter) {
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
const publishedVideos = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    publishedVideos(userId: $userId, filter: $filter) {
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
const publishedRepos = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    publishedRepos(userId: $userId, filter: $filter) {
      entries {
        id
        title
        ownerName
        desc
        license
        releaseTag
        contributors {
          avatar
          htmlUrl
          nickname
        }
        starCount
        forkCount
        primaryLanguage {
          name
          color
        }
        views
        author {
          id
          avatar
          nickname
        }
        insertedAt
      }
      totalPages
      totalCount
      pageSize
      pageNumber
    }
  }
`

const schema = {
  publishedPosts,
  publishedJobs,
  publishedVideos,
  publishedRepos,
}

export default schema
