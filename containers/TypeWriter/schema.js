import gql from 'graphql-tag'

const createPost = gql`
  mutation(
    $title: String!
    $body: String!
    $digest: String!
    $length: Int!
    $linkAddr: String
    $copyRight: String
    $communityId: ID!
  ) {
    createPost(
      title: $title
      body: $body
      digest: $digest
      length: $length
      linkAddr: $linkAddr
      copyRight: $copyRight
      communityId: $communityId
    ) {
      id
      title
      body
    }
  }
`

const schema = {
  createPost,
}

export default schema
