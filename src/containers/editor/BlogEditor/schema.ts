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
}

export default schema
