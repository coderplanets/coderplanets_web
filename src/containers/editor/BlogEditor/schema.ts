import { gql } from '@urql/core'

const blogRssInfo = gql`
  query ($rss: String!) {
    blogRssInfo(rss: $rss) {
      title
      subtitle
      link
      updated
      author {
        name
        intro
        github
        twitter
      }
      historyFeed {
        title
        digest
        linkAddr
        content
        published
        updated
      }
    }
  }
`

const createBlog = gql`
  mutation (
    $title: String!
    $rss: String!
    $communityId: ID!
    $articleTags: [Id]
  ) {
    createBlog(
      title: $title
      rss: $rss
      communityId: $communityId
      articleTags: $articleTags
    ) {
      id
      title
    }
  }
`

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

const schema = {
  blogRssInfo,
  community,
  createBlog,
}

export default schema
