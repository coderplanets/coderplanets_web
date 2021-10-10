import { gql } from '@urql/core'

const post = gql`
  query ($id: ID!) {
    post(id: $id) {
      id
      commentsCount
      collectsCount
      upvotesCount
      viewerHasCollected
      viewerHasUpvoted
    }
  }
`
const job = gql`
  query ($id: ID!) {
    job(id: $id) {
      id
      collectsCount
      viewerHasCollected
    }
  }
`
const repo = gql`
  query ($id: ID!) {
    repo(id: $id) {
      id
      viewerHasCollected
      collectsCount
    }
  }
`

const schema = {
  post,
  job,
  repo,
}

export default schema
