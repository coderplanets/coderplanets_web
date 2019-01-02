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

const updatePost = gql`
  mutation(
    $id: ID!
    $title: String
    $body: String
    $copyRight: String
    $linkAddr: String
  ) {
    updatePost(
      id: $id
      title: $title
      body: $body
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
    $linkAddr: String
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
      linkAddr: $linkAddr
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

const updateJob = gql`
  mutation(
    $id: ID!
    $title: String
    $body: String
    $desc: String
    $digest: String
    $length: Int
    $company: String
    $companyLogo: String
    $companyLink: String
    $copyRight: String
    $salary: String
    $exp: String
    $education: String
    $finance: String
    $scale: String
    $field: String
  ) {
    updateJob(
      id: $id
      title: $title
      body: $body
      desc: $desc
      digest: $digest
      length: $length
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
    ) {
      id
    }
  }
`

const job = gql`
  query($id: ID!) {
    job(id: $id) {
      ${F.job}
      body
      author {
        ${F.author}
      }
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
  'body',
  'copyRight',
  'linkAddr',
  // TODO: 'mentionUsers',
]

export const updatableJobFields = [
  'id',
  'title',
  'body',
  'desc',
  'digest',
  'length',
  'company',
  'companyLogo',
  'companyLink',
  'copyRight',
  'linkAddr',
  'salary',
  'exp',
  'education',
  'finance',
  'scale',
  'field',
  // TODO: 'mentionUsers',
  // TODO: 'tags',
]

export const S = {
  createPost,
  updatePost,
  createJob,
  updateJob,
  searchUsers,
  job,
}
