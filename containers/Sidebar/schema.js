import gql from 'graphql-tag'
import { F } from '../schemas'

const subscribedCommunities = gql`
  query subscribedCommunities($userId: ID, $filter: PagedFilter!) {
    subscribedCommunities(userId: $userId, filter: $filter) {
      entries {
        ${F.community}
        contributesDigest
      }
    }
  }
`

const schema = {
  // communities,
  subscribedCommunities,
}

export default schema
