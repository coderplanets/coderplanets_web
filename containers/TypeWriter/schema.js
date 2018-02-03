import gql from 'graphql-tag'

const createPostRes = 'createPost'
const createPost = gql`
  mutation(
    $title: String!
    $body: String!
    $digest: String!
    $length: Int!
    $linkAddr: String
  ) {
    createPost(
      title: $title
      body: $body
      digest: $digest
      length: $length
      linkAddr: $linkAddr
    ) {
      id
      title
      body
    }
  }
`

const schema = {
  createPost,
  createPostRes,
}

export default schema
