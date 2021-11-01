import { gql } from '@urql/core'
import { P } from '@/schemas'

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

const blogRssInfo = gql`
  ${P.blogRssInfo}
`

const schema = {
  post,
  job,
  repo,
  blogRssInfo,
}

export default schema
