import { gql } from '@urql/core'
import { F } from '@/schemas'

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
  publishedRepos,
}

export default schema
