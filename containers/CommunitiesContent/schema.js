import gql from 'graphql-tag'

const communities = gql`
  query communities($filter: PagedFilter!, $userHasLogin: Boolean!) {
    communities(filter: $filter) {
      entries {
        id
        title
        desc
        raw
        logo
        recentContributesDigest
        subscribersCount
        viewerHasSubscribed @include(if: $userHasLogin)
      }
      pageNumber
      pageSize
      totalCount
      totalPages
    }
  }
`

const subscribeCommunity = gql`
  mutation($communityId: ID!) {
    subscribeCommunity(communityId: $communityId) {
      id
      title
      raw
      logo
      recentContributesDigest
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
  communities,
  subscribeCommunity,
  unsubscribeCommunity,
}

export default schema
