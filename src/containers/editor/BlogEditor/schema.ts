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

const schema = {
  blogRssInfo,
}

export default schema
