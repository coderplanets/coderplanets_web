import gql from 'graphql-tag'
import { F } from '../schemas'

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
        sourceTitle
        sourcePreview
        sourceType
        read
      }
      ${F.pagedCounts}
    }
  }
`
const mailBoxStatus = gql`
  query {
    user {
      id
      mailBox {
        hasMail
        totalCount
        mentionCount
        notificationCount
      }
    }
  }
`
const schema = {
  mailBoxStatus,
  mentions,
}

export default schema
