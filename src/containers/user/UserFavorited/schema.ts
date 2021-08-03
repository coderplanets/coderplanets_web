import { gql } from '@urql/core'
import { F } from '@/schemas'

const favoritedJobs = gql`
  query($userId: ID!, $categoryId: ID, $filter: PagedFilter!) {
    favoritedJobs(userId: $userId, categoryId: $categoryId, filter: $filter) {
      ${F.pagedJobs}
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
  // repo
  favoritedRepos,
}

export default schema
