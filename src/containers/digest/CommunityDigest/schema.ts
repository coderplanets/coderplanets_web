import { gql } from '@urql/core'
import { P } from '@/schemas'

const community = gql`
  ${P.community}
`
const subscribeCommunity = gql`
  mutation ($communityId: ID!) {
    subscribeCommunity(communityId: $communityId) {
      id
      raw
    }
  }
`
const unsubscribeCommunity = gql`
  mutation ($communityId: ID!) {
    unsubscribeCommunity(communityId: $communityId) {
      id
      raw
    }
  }
`
const schema = {
  community,
  subscribeCommunity,
  unsubscribeCommunity,
}

export default schema
