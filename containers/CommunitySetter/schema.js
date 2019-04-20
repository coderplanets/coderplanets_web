import gql from 'graphql-tag'
import { F } from 'schemas'

const pagedCommunities = gql`
  query($filter: CommunitiesFilter!) {
    pagedCommunities(filter: $filter) {
      entries {
        ${F.community}
      }
      ${F.pagedCounts}
    }
  }
`
const searchCommunities = gql`
  query($title: String!) {
    searchCommunities(title: $title) {
      entries {
        ${F.community}
      }
      ${F.pagedCounts}
    }
  }
`
const schema = {
  pagedCommunities,
  searchCommunities,
}

export default schema
