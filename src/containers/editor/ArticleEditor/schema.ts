import { gql } from '@urql/core'

const createPost = gql`
  mutation (
    $title: String!
    $body: String!
    $communityId: ID!
    $linkAddr: String
    $isQuestion: Boolean
  ) {
    createPost(
      title: $title
      body: $body
      communityId: $communityId
      linkAddr: $linkAddr
      isQuestion: $isQuestion
    ) {
      id
      title
    }
  }
`

// viewer_has_subscribed
const community = gql`
  query ($raw: String) {
    community(raw: $raw) {
      id
      logo
      title
      raw
      desc
      subscribersCount
    }
  }
`

const schema = {
  community,
  createPost,
}

export default schema
