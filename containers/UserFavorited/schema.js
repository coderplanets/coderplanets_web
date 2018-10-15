import gql from 'graphql-tag'

const favoritedPostsRaw = `
  query($userId: ID!, $categoryId: ID, $filter: PagedFilter!) {
    favoritedPosts(userId: $userId, categoryId: $categoryId, filter: $filter) {
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
      totalCount
      pageSize
      pageNumber
    }
  }
`

const favoritedJobsRaw = `
  query($userId: ID!, $categoryId: ID, $filter: PagedFilter!) {
    favoritedJobs(userId: $userId, categoryId: $categoryId, filter: $filter) {
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
const favoritedVideosRaw = `
  query($userId: ID!, $categoryId: ID, $filter: PagedFilter!) {
    favoritedVideos(userId: $userId, categoryId: $categoryId, filter: $filter) {
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

const favoritedPosts = gql`
  ${favoritedPostsRaw}
`
const favoritedJobs = gql`
  ${favoritedJobsRaw}
`
const favoritedVideos = gql`
  ${favoritedVideosRaw}
`
const schema = {
  // post
  favoritedPosts,
  favoritedPostsRaw,
  // job
  favoritedJobs,
  favoritedJobsRaw,
  // video
  favoritedVideos,
  favoritedVideosRaw,
}

export default schema
