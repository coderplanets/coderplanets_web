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

const blogRssInfo = gql`
  query ($rss: String!) {
    blogRssInfo(rss: $rss) {
      title
      subtitle
      link
      updated
      author {
        name
        intro
        github
        twitter
      }
      historyFeed {
        title
        digest
        linkAddr
        content
        published
        updated
      }
    }
  }
`

const schema = {
  post,
  job,
  repo,
  blogRssInfo,
}

export default schema
