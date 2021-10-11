import { gql } from '@urql/core'

// viewer_has_subscribed
const community = gql`
  query ($raw: String) {
    community(raw: $raw) {
      id
      logo
      title
      desc
      subscribersCount
    }
  }
`

const schema = {
  community,
}

export default schema
