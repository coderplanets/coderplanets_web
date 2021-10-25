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

const blogRssAuthor = gql`
  query ($rss: String!) {
    blogRssInfo(rss: $rss) {
      title
      subtitle
      link
      author {
        name
        intro
        github
        twitter
      }
    }
  }
`

const updateRssAuthor = gql`
  mutation (
    $rss: String!
    $name: String
    $link: String
    $intro: String
    $github: String
    $twitter: String
  ) {
    updateRssAuthor(
      rss: $rss
      name: $name
      link: $link
      intro: $intro
      github: $github
      twitter: $twitter
    ) {
      author {
        name
        intro
        github
        twitter
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
  blogRssAuthor,
  updateRssAuthor,
}

export default schema
