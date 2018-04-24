import gql from 'graphql-tag'

const createPost = gql`
  mutation(
    $title: String!
    $body: String!
    $digest: String!
    $length: Int!
    $linkAddr: String
    $community: String!
  ) {
    createPost(
      title: $title
      body: $body
      digest: $digest
      length: $length
      linkAddr: $linkAddr
      community: $community
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
