import gql from 'graphql-tag'
import { F } from '@schemas'

const publishedPosts = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    publishedPosts(userId: $userId, filter: $filter) {
      ${F.pagedPosts}
    }
  }
`
const publishedJobs = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    publishedJobs(userId: $userId, filter: $filter) {
      ${F.pagedJobs}
    }
  }
`
const publishedVideos = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    publishedVideos(userId: $userId, filter: $filter) {
      ${F.pagedVideos}
    }
  }
`
const publishedRepos = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    publishedRepos(userId: $userId, filter: $filter) {
      ${F.pagedRepos}
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
