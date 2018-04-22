import gql from 'graphql-tag'

const subscribedCommunities = gql`
  query subscribedCommunities($userId: ID, $filter: PagedFilter!) {
    subscribedCommunities(userId: $userId, filter: $filter) {
      entries {
        id
        title
        desc
        raw
        logo
        contributesDigest
        threads {
          title
          raw
        }
      }
      pageNumber
      pageSize
      totalCount
      totalPages
    }
  }
`

// TODO remove
const communities = gql`
  query communities($filter: PagedFilter!) {
    communities(filter: $filter) {
      entries {
        id
        title
        desc
        raw
        logo
        contributesDigest
      }
      pageNumber
      pageSize
      totalCount
      totalPages
    }
  }
`

const schema = {
  communities,
  subscribedCommunities,
}

export default schema
