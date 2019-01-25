import gql from 'graphql-tag'
import { F } from 'schemas'

const mentions = gql`
  query($filter: MessagesFilter!) {
    mentions(filter: $filter) {
      entries {
        id
        fromUser {
          ${F.author}
          id
          avatar
          nickname
        }
        sourceId
        sourceTitle
        sourcePreview
        sourceType
        community
        read
      }
      ${F.pagedCounts}
    }
  }
`

const schema = {
  mentions,
}

export default schema
