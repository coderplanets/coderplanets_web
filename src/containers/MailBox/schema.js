import gql from 'graphql-tag'
import { P } from '@/schemas'

const mentions = gql`
  ${P.mentions}
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
