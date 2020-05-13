import gql from 'graphql-tag'
import { P, F } from '@/schemas'

const pagedPosts = gql`
  ${P.pagedPosts}
`
const partialTags = gql`
  ${P.partialTags}
`

const pagedCommunities = gql`
  query($filter: CommunitiesFilter!) {
    pagedCommunities(filter: $filter) {
      entries {
        ${F.community}
        contributesDigest
        subscribersCount
      }
      ${F.pagedCounts}
    }
  }
`

const schema = {
  pagedPosts,
  partialTags,
  pagedCommunities,
}

export default schema
