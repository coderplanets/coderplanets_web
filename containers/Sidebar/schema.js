import gql from 'graphql-tag'
import { P } from '../schemas'

const subscribedCommunities = gql`
  ${P.subscribedCommunities}
`

// TODO remove
/*
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
 */

const schema = {
  // communities,
  subscribedCommunities,
}

export default schema
