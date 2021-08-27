import { gql } from '@urql/core'
import { P, F } from '@/schemas'

const pagedPosts = gql`
  ${P.pagedPosts}
`
const pagedJobs = gql`
  ${P.pagedJobs}
`
const pagedArticleTags = gql`
  ${P.pagedArticleTags}
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
  pagedJobs,
  pagedArticleTags,
  pagedCommunities,
}

export default schema
