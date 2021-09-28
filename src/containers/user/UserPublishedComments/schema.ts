import { gql } from '@urql/core'
import { F } from '@/schemas'

const publishedPostComments = gql`
  query($userId: ID!, $filter: PagedFilter!) {
    publishedPostComments(userId: $userId, filter: $filter) {
      entries {
        ${F.comment}
      }
      ${F.pagedCounts}
    }
  }
`

const schema = {
  publishedPostComments,
}

export default schema