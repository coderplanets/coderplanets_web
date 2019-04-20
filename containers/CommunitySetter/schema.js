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
const schema = {
  pagedCommunities,
}

export default schema
