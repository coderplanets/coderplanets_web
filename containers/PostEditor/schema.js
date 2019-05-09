import gql from 'graphql-tag'
import { F } from '@schemas'

const createPost = gql`
  mutation createPost(
    $title: String!
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
    $tags: [Ids]
  ) {
    updatePost(
      id: $id
      title: $title
      body: $body
      digest: $digest
      copyRight: $copyRight
      linkAddr: $linkAddr
      tags: $tags
    ) {
      id
      title
      body
      copyRight
    }
  }
`

const post = gql`
  query($id: ID!) {
    post(id: $id) {
      tags {
        ${F.tag}
      }
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
  'tags',
  // TODO: 'mentionUsers',
]

export const S = {
  createPost,
  updatePost,
  post,
  searchUsers,
}
