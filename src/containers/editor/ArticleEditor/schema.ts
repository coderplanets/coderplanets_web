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
    $linkAddr: String
    $copyRight: String
    $articleTags: [Id]
  ) {
    updatePost(
      id: $id
      title: $title
      body: $body
      linkAddr: $linkAddr
      copyRight: $copyRight
      articleTags: $articleTags
    ) {
      id
      title
      author {
        ${F.author}
      }
      meta {
        thread
        isLegal
        illegalReason
        illegalWords
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

const updateJob = gql`
  mutation (
    $id: ID!
    $title: String
    $company: String!
    $companyLink: String
    $body: String
    $articleTags: [Ids]
  ) {
    updateJob(
      id: $id
      title: $title
      company: $company
      companyLink: $companyLink
      body: $body
      articleTags: $articleTags
    ) {
      id
      title
      author {
        ${F.author}
      }
      meta {
        thread
        isLegal
        illegalReason
        illegalWords
      }
    }
  }
`

// radar
const createRadar = gql`
  mutation (
    $title: String!
    $body: String
    $linkAddr: String!
    $communityId: ID!
    $articleTags: [Id]
  ) {
    createRadar(
      title: $title
      body: $body
      linkAddr: $linkAddr
      communityId: $communityId
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
const updateRadar = gql`
  mutation (
    $id: ID!
    $title: String
    $body: String
    $linkAddr: String
    $articleTags: [Id]
  ) {
    updateRadar(
      id: $id
      title: $title
      body: $body
      linkAddr: $linkAddr
      articleTags: $articleTags
    ) {
      id
      title
      author {
        ${F.author}
      }
      meta {
        thread
        isLegal
        illegalReason
        illegalWords
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
      author {
        ${F.author}
      }

      originalCommunity {
        ${F.community}
      }

      articleTags {
        ${F.tag}
      }

      meta {
        thread
        isLegal
        illegalReason
        illegalWords
      }
    
      document {
        body
      }
    }
  }
`
const job = gql`
  query job($id: ID!) {
    job(id: $id) {
      id
      title
      company
      companyLink
      copyRight
      archivedAt
      isArchived

      author {
        ${F.author}
      }

      originalCommunity {
        ${F.community}
      }

      articleTags {
        ${F.tag}
      }

      meta {
        thread
        isLegal
        illegalReason
        illegalWords
      }
    
      document {
        body
      }
    }
  }
`
const radar = gql`
  query radar($id: ID!) {
    radar(id: $id) {
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
        isLegal
        illegalReason
        illegalWords
      }
    
      document {
        body
      }
    }
  }
`
const schema = {
  post,
  job,
  radar,
  createPost,
  updatePost,
  createJob,
  updateJob,
  createRadar,
  updateRadar,
  community,
}

export default schema
