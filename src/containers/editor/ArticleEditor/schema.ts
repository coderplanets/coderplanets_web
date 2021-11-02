import { gql } from '@urql/core'
import { F } from '@/schemas'

// post
const createPost = gql`
  mutation (
    $title: String!
    $body: String!
    $communityId: ID!
    $linkAddr: String
    $isQuestion: Boolean
    $articleTags: [Id]
  ) {
    createPost(
      title: $title
      body: $body
      communityId: $communityId
      linkAddr: $linkAddr
      isQuestion: $isQuestion
      articleTags: $articleTags
    ) {
      id
      title
      meta {
        thread
      }
    }
  }
`
const updatePost = gql`
  mutation (
    $id: ID!
    $title: String
    $body: String
    $copyRight: String
    $articleTags: [Id]
  ) {
    updatePost(
      id: $id
      title: $title
      body: $body
      copyRight: $copyRight
      articleTags: $articleTags
    ) {
      id
      title
      meta {
        thread
      }
    }
  }
`

const createJob = gql`
  mutation (
    $title: String!
    $body: String!
    $communityId: ID!
    $company: String!
    $companyLink: String
    $articleTags: [Id]
  ) {
    createJob(
      title: $title
      body: $body
      communityId: $communityId
      company: $company
      companyLink: $companyLink
      articleTags: $articleTags
    ) {
      id
      title
      meta {
        thread
      }
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

const post = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      title
      linkAddr
      copyRight
      archivedAt
      isArchived

      originalCommunity {
        ${F.community}
      }

      articleTags {
        ${F.tag}
      }

      meta {
        thread
      }
    
      document {
        body
      }
    }
  }
`
const schema = {
  post,
  createPost,
  updatePost,
  createJob,
  community,
}

export default schema
