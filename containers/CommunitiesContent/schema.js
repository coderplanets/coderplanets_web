import gql from 'graphql-tag'
import { F } from '../schemas'

const pagedCommunities = gql`
  query($filter: CommunitiesFilter!, $userHasLogin: Boolean!) {
    pagedCommunities(filter: $filter) {
      entries {
        ${F.community}
        contributesDigest
        subscribersCount
        viewerHasSubscribed @include(if: $userHasLogin)
      }
      ${F.pagedCounts}
    }
  }
`
const pagedCommunitiesRaw = `
  query($filter: CommunitiesFilter!, $userHasLogin: Boolean!) {
    pagedCommunities(filter: $filter) {
      entries {
        ${F.community}
        contributesDigest
        subscribersCount
        viewerHasSubscribed @include(if: $userHasLogin)
      }
      ${F.pagedCounts}
    }
  }
`
const subscribeCommunity = gql`
  mutation($communityId: ID!) {
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
  mutation($communityId: ID!) {
    unsubscribeCommunity(communityId: $communityId) {
      id
    }
  }
`

const schema = {
  pagedCommunities,
  pagedCommunitiesRaw,
  subscribeCommunity,
  unsubscribeCommunity,
}

export default schema
