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
    $tags: [Ids]
    $topic: CmsTopic
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

const schema = {
  createPost,
  createJob,
}

export default schema
