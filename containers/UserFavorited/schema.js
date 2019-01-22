import gql from 'graphql-tag'
import { F } from 'schemas'

const favoritedJobs = gql`
  query($userId: ID!, $categoryId: ID, $filter: PagedFilter!) {
    favoritedJobs(userId: $userId, categoryId: $categoryId, filter: $filter) {
      ${F.pagedJobs}
    }
  }
`
const favoritedVideos = gql`
  query($userId: ID!, $categoryId: ID, $filter: PagedFilter!) {
    favoritedVideos(userId: $userId, categoryId: $categoryId, filter: $filter) {
      ${F.pagedVideos}
    }
  }
`
const favoritedRepos = gql`
  query($userId: ID!, $categoryId: ID, $filter: PagedFilter!) {
    favoritedRepos(userId: $userId, categoryId: $categoryId, filter: $filter) {
      ${F.pagedRepos}
    }
  }
`
const favoritedPosts = gql`
  query($userId: ID!, $categoryId: ID, $filter: PagedFilter!) {
    favoritedPosts(userId: $userId, categoryId: $categoryId, filter: $filter) {
      ${F.pagedPosts}
    }
  }
`

const schema = {
  // post
  favoritedPosts,
  // job
  favoritedJobs,
  // video
  favoritedVideos,
  // repo
  favoritedRepos,
}

export default schema
