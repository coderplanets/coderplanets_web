import gql from 'graphql-tag'
import { F } from '../schemas'

const createPost = gql`
  mutation(
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

const createJob = gql`
  mutation(
    $title: String!
    $body: String!
    $desc: String
    $digest: String!
    $length: Int!
    $communityId: ID!
    $company: String!
    $companyLogo: String!
    $companyLink: String
    $copyRight: String
    $salary: String!
    $exp: String!
    $education: String!
    $finance: String!
    $scale: String!
    $field: String!
    $tags: [Ids]
  ) {
    createJob(
      title: $title
      body: $body
      desc: $desc
      digest: $digest
      length: $length
      communityId: $communityId
      company: $company
      companyLogo: $companyLogo
      companyLink: $companyLink
      copyRight: $copyRight
      salary: $salary
      exp: $exp
      education: $education
      finance: $finance
      scale: $scale
      field: $field
      tags: $tags
    ) {
      id
      title
      body
      salary
      exp
      education
      field
      communities {
        id
        title
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

const schema = {
  createPost,
  createJob,
  searchUsers,
}

export default schema
