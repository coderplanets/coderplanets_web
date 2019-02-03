import gql from 'graphql-tag'
import { P, F } from 'schemas'

const community = gql`
  ${P.community}
`

const subscribeCommunity = gql`
  mutation subscribeCommunity($communityId: ID!) {
    subscribeCommunity(communityId: $communityId) {
      ${F.community}
      contributesDigest
      threads {
        title
        raw
      }
    }
  }
`
const unsubscribeCommunity = gql`
  mutation unsubscribeCommunity($communityId: ID!) {
    unsubscribeCommunity(communityId: $communityId) {
      id
    }
  }
`

const schema = {
  community,
  subscribeCommunity,
  unsubscribeCommunity,
}

export default schema
