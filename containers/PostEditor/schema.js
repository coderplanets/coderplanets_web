import gql from 'graphql-tag'
import { F } from '../schemas'

const createPost = gql`
  mutation(
    $body: String!
    $digest: String!
    $length: Int!
    $linkAddr: String
    $copyRight: String
    $communityId: ID!
    $tags: [Ids]
    $mentionUsers: [Ids]
    $topic: String
  ) {
    createPost(
      title: $title
      body: $body
      digest: $digest
      length: $length
      linkAddr: $linkAddr
      copyRight: $copyRight
      communityId: $communityId
      tags: $tags
      mentionUsers: $mentionUsers
      topic: $topic
    ) {
      id
      title
      body
    }
  }
`

const updatePost = gql`
  mutation(
    $id: ID!
    $title: String
    $body: String
    $digest: String
    $copyRight: String
    $linkAddr: String
  ) {
    updatePost(
      id: $id
      title: $title
      body: $body
      digest: $digest
      copyRight: $copyRight
      linkAddr: $linkAddr
    ) {
      id
      title
      body
      copyRight
    }
  }
`

const searchUsers = gql`
  query($name: String!) {
    searchUsers(name: $name) {
      entries {
        ${F.author}
      }
    }
  }
`

export const updatablePostFields = [
  'id',
  'title',
  'digest',
  'body',
  'copyRight',
  'linkAddr',
  // TODO: 'mentionUsers',
]

export const S = {
  createPost,
  updatePost,
  searchUsers,
}
