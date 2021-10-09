import { gql } from '@urql/core'
import { P, F } from '@/schemas'

import { titleCase } from '@/utils/helper'

const getPagedArticlesSchema = (thread) => {
  return gql`
    ${P[`paged${titleCase(thread)}s`]}
  `
}

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
  pagedArticleTags,
  pagedCommunities,
  getPagedArticlesSchema,
  getUpvoteSchema: F.getUpvoteSchema,
  getUndoUpvoteSchema: F.getUndoUpvoteSchema,
}

export default schema
