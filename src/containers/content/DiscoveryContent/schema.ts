import gql from 'graphql-tag'
import { F } from '@/schemas'

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

const searchCommunities = gql`
  query($title: String!, $userHasLogin: Boolean!) {
    searchCommunities(title: $title) {
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
const pagedCategories = gql`
  query($filter: PagedFilter!) {
    pagedCategories(filter: $filter) {
      entries {
        id
        title
        raw
        index
      }
      totalCount
      totalPages
      pageSize
      pageNumber
    }
  }
`

const schema = {
  pagedCommunities,
  searchCommunities,
  subscribeCommunity,
  unsubscribeCommunity,
  pagedCategories,
}

export default schema
