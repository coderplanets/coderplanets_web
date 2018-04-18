import gql from 'graphql-tag'

const communities = gql`
  query communities($filter: PagedFilter!) {
    communities(filter: $filter) {
      entries {
        id
        title
        desc
        raw
        logo
        recentContributesDigest
        subscribersCount
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
}

export default schema
