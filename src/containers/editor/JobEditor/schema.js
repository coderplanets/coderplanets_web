import gql from 'graphql-tag'
import { F } from '@schemas'

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
    $mentionUsers: [Ids]
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
      mentionUsers: $mentionUsers
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
    $tags: [Ids]
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
      tags: $tags
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
  'tags',
]

export const S = {
  createJob,
  updateJob,
  searchUsers,
  job,
}
